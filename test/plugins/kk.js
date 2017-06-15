/**
 * transform page.posts to an array
 * @param  {Object} posts page.posts
 * @return {Arrary} posts arrary
 */
function postsToArray(pagePosts) {
    var postsArr = []
    pagePosts.forEach(function (post) {
        postsArr.push(post);
    });
    return postsArr;
}

/**
 * get getUniqueYears from page.post
 * @param  {Object} posts it's page.post
 * @return {Arrary}  years  something like ['2016', '2015', '2014']
 */
function getUniqueYears(posts) {
    var years = [];

    posts.forEach(function (post) {
        var year = post.date.year();
        if (years.indexOf(year) < 0) {
            years.push(year);
        }
    });

    return years;
};

/**
 * get one year's post
 * @param  {Arrary} postsArr
 * @param  {String} year eg: '2014'
 * @return {Arrary} postsArr after filter
 */
function filterPostByYear(postsArr, year) {
    return postsArr.filter(function (post) {
        return year === post.date.year();
    });
};

/**
 * handlePosts to insert year
 * @param  {Arrary} postsArr
 * @return {Arrary}
 */
function handlePosts(postsArr) {
    var postLists = [];
    var years = getUniqueYears(postsArr);

    years.forEach(function(year) {
        postLists.push({year: year, isYear: true});
        var thisYearPosts = filterPostByYear(postsArr, year);
        postLists = postLists.concat(thisYearPosts);
    });

    return postLists;
};

/**
 * getPostListsDom
 * @param  {Object} pagePosts
 * @return {String} dom string
 */
function getPostListsDom(posts) {
    var dom = '<ul class="list-post">';

    var postsArr = postsToArray(posts);
    posts = handlePosts(postsArr);

    console.log("OOOOOOOO--->", posts);

    posts.forEach(function (post) {
        var patialPath = post.isYear ? '_partial/component/item-year' : '_partial/component/item-post';
        dom += "partial(patialPath, {post: post})";
    });

    dom += '</ul>';
    return dom;
}

var posts = {
    page: {
        posts:[
            {date: {
                year: function () {
                    return "2017"
                }
            }},
            {date: {
                year: function () {
                    return "2016"
                }
            }},
            {date: {
                year: function () {
                    return "2016"
                }
            }},
        ]
    }
};

var result = getPostListsDom(posts.page.posts);
console.log(result);