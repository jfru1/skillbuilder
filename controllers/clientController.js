var express = require("express");
var router = express.Router();
const db = require("../models");




  router.get("/test", function(req, res) {

console.log("hello")
res.JSON("hello")

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
    .findOne({ email: req.body.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})

router.post("/addClientSkill", function(req, res) {
  var obj ={
    email:req.body.email,
    skill:req.body.skill,
    goal:req.body.goal,
    step1:req.body.step1,
    step2:req.body.step2,
    step3:req.body.step3,
    step4:req.body.step4,
    step5:req.body.step5,
  }
console.log(req.body)
  db.Client
    .findOneAndUpdate({ email: req.body.email },obj,{new:true})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})

router.post("/addClientPost", function(req, res) {

console.log(req.body.completed)

var body = {
post:req.body.post,
date:req.body.date,
}

// {$set:{completed:req.body.completed}}, {multi:true}

db.Client
.findOneAndUpdate({ email: req.body.email },{$push: {Posts: body}, $set:{completed:req.body.completed}},{new:true})
.then(dbModel => res.json(dbModel))
.catch(err => res.status(422).json(err));

});


router.post("/checkClientPost", function(req, res) {
console.log(req.body)
db.Client
.find({ email: req.body.email },'Posts' ,{'Posts': { '$slice':-1}})
.then(dbModel => res.json(dbModel))
.catch(err => res.status(422).json(err));

});



module.exports = router;
