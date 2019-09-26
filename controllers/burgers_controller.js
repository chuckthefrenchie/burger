var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.get('/api/burgers', function(req, res){
  burger.all(function(data){
    res.json(data)
  });
})

router.post("/api/burgers", function(req, res) {

  console.log(req.body)
    burger.create(["name", "devoured"], [req.body.burger_name, false], function(result) {
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(req.body)
  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured}, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;