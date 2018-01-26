const express = require("express");
const router = express.Router();

/* GET api listing. */
router.get("/", (req, res) => {
    res.send("api users works");
});

var User = require("../models/users");
router.get('/getUsers', (req, res) => {
    User.find({},
        (err, data) => {
            if (err) throw err;
            console.log('service api got data', data);
            res.send(data);
            // throw new Error("ddddd eror");
        },
        (err) => {
            if (err) { res.send(err); }
        });
});
router.post('/newUser', (req, res) => {
    console.log('body======', req.body);
    User.create(req.body, (err, res) => {
        console.log('create after', err, res);
    });
});
module.exports = router;