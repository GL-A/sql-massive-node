var app = require('./index.js');
var db = app.get('db');
console.log(Object.keys(db));


module.exports = {
  create: function(req, res){
    db.create_product([
      req.body.Name,
      req.body.Description,
      req.body.Price,
      req.body.imageUrl
    ], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send("inserted product");
      }
    })
  },
  getProducts: function(req, res){
    db.read_products([], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  getOneGuy: function(req, res){
    db.read_product([req.params.ID], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  updateGuy: function(req, res){
    db.update_product([
      req.params.ID,
      req.body.Name,
      req.body.Description,
      req.body.Price,
      req.body.imageUrl
    ], function(err, results){
      if(err){
        console.error(err);
        res.send(err);
      }
      else{
        res.send(results);
      }
    })
  },
  deleteGuy: function(req, res){
    db.delete_product([req.params.ID], function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      if(results.length === 0){
        return res.status(404).send("Guy not found");
      }
      return res.send("Guy " + results[0].name + " is dead");
    })
  }
}
