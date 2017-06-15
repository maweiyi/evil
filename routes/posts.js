var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render("posts", {page: {content: '<p>123456 <strong>bold</strong> and <em>italic</em></p>\n'}});
});

module.exports = router;