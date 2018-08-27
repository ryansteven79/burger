// Node Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  read: function(callback){
    orm.read(function(res){
      callback(res);
    });
  },

  create: function(burger_name, callback){
    orm.create(burger_name, function(res){
      callback(res);
    });
  },

  update: function(burger_id, callback){
    orm.update(burger_id, function(res){
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;