var express = require("express");
var router = express.Router();
const db = require("../models");




  router.get("/test", function(req, res) {

console.log("hello")

})



router.post("/saveClient", function(req, res) {

console.log(req.body)
  db.Client
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})

router.post("/checkClient", function(req, res) {
  console.log(req.body)
  db.Client
    .find({ email: req.body.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})



module.exports = router;
