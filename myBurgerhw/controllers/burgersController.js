// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
//========================================
//Trinity code provided below
//========================================

//=== get route -> index
//if its a one page site why do we need this?  why not just put the res.redirect on the bottom of the get route function?
//===this may not be necessary or can incorporate in a function elsewhere.
router.get("/", function(req, res) {
  res.redirect("/burger_table");
});
//================

//we are sending a get request to the table burgers in the form of a callback response and calling the select all query from burger.js
router.get("/burger_table", function(req, res) {

//question: how do you export a simpler JQUERY formula than what Trinity provided in burger.js below?
  burger.all(function(burgerData) {
    //=== wrapper for orm.js that using MySQL query callback will return burger_data, 
    //  .all is used to make a promise for an array of other promises, which will be resolved when all promises from the array resolve, or will be rejected when any of the promises from the array are rejected.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

    //render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});
//=============================================
// Dayplanner code for the get request below:
// --------------------------------------------
app.get("/", function(req, res) {
    //read from the DB
     connection.query("SELECT * FROM plans;", function(err, data) {
      //If there is an error it will be from our connection to the database.
      if (err) {
        return res.status(500).end();
      }
  //only with the get request do we render a template.  The rest of these routes are API calls.
  //  If error is equal to null then we render the index fragment with an object with plans as the key that we are iterating on and we are receiving an array back.
  //what is the equivalent to plans for burger?
      res.render("index", { plans: data });
    });
  });
  // ---------------------------------------------
  // Dayplanner code for the get request above:
  //==============================================



//=== post route -> back to index
router.post("/burger_table/create", function(req, res) {
  //=== takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    //=== wrapper for orm.js that using MySQL insert callback will return a log to console,
    //=== render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

//=== put route -> back to index
router.put("/burger_table/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    //=== wrapper for orm.js that using MySQL update callback will return a log to console,
    //=== render back to index with handle
    console.log(result);
    //=== Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

//========================================
//Trinity code provided above
//========================================

module.exports = router;
