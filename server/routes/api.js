const express = require("express");
const router = express.Router();

// declare axios for making http requests
const axios = require("axios");
// const API = 'https://jsonplaceholder.typicode.com';
const API = "https://localhost:3000";

/* GET api listing. */
router.get("/", (req, res) => {
    res.send("api works");
});

// Get all posts
router.get("/posts", (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios
        .get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// var User = require("../models/users");

// router.get("/getUsers", function(req, res) {
//     var userList = User.find({}, function(err, data) {
//         if (err) throw err;
//         console.log('service api got data', data);
//         res.send(data);
//     });
// });
module.exports = router;