var express = require('express');
var router = express.Router();

router.get('/menu', function(req, res) {
    res.json([
        {
            title : "Whats Playing",
            action : "playing"
        },
        {
            title : "Find a Song",
            action : "search"
        },
        {
            title : "Who's Listening?",
            action : "users"
        }
    ]);
});

module.exports = router;