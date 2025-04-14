const express = require('express')
const router = express.Router()
const User = require("../models/customersSchema");
var moment = require('moment');


router.get("/", (req, res) => {

  User.find()
  .then((result) => {
    res.render("index", {arr: result, moment : moment} );
  })
  .catch((err) => {
    console.log(err);
  })
});


router.get("/edit/:id", (req, res) => {
  User.findById(req.params.id)
  .then((result) => {
    res.render("user/edit", {obj: result, moment:moment});
  })
  .catch((err) => {
    console.log(err);
  })
 
});

router.get("/view/:id", (req, res) => {

  User.findById(req.params.id)
  .then((result) => {
    res.render("user/view", {obj: result, moment:moment});
  })
  .catch((err) => {
    console.log(err);
  })
});



router.post("/search", (req, res) => {
  const searchText = req.body.searchText.trim()
  User.find({ $or: [{fireName: searchText}, {lastName: searchText}] })
    .then((result) => {
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE Request

router.delete("/edit/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(() =>{
    res.redirect("/")
  })
  .catch((err) => {
    console.log(err);
  })
  

});

// PUT Requst
router.put("/edit/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router