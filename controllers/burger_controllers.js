var express = require("express");
var router = express.Router();

var burger  = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log (hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne (
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changeRows === 0) {
                return res.status (404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;