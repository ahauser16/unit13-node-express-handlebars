// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

//=================================================
//=================UNSURE OF HOW TO PROCEED========
//=================================================

// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burger_table", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burger_table", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burger_table", {
//       devoured: true
//     }, condition, cb);
//   }
// };

module.exports = burger;
