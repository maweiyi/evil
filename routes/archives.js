var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('archives', {page: {
            posts:[
                {date: {
                    year: function () {
                        return "2017"
                    },
                    pubdate: '03-05'
                },
                    title: "计算机网络体系结构"
                },
                {date: {
                    year: function () {
                        return "2016"
                    },
                    pubdate: '04-06'
                },
                    title: "生产者消费者"
                },
                {date: {
                    year: function () {
                        return "2016"
                    },
                    pubdate: '05-05'
                },
                    title: "Express处理404的理解"
                },
            ]
        }
    });
});

module.exports = router;