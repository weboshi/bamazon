var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryInventory();
    
  });

  function queryInventory() {
    var query = connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].quantity);
      }
      console.log("-----------------------------------");
      start();
    });
  
    console.log(query.sql);
  }
  
  function start() {
    inquirer
      .prompt({
        name: "whatBuy",
        type: "input",
        message: "ID of product you would like to buy",
      })
      .then(function(answer) {
        inquirer
        .prompt({
            name: "howMany",
            type: "input",
            message: "How many units would you like to buy",
          })
          .then(function(response) {
          var chosenItem = answer.whatBuy;
          var chosenAmount = response.howMany;
          console.log(chosenItem)
          var query = "SELECT * FROM products WHERE item_id = ?";
          connection.query(query, [chosenItem], function(err, res) {
            if(err) throw err;
         
        
      console.log(res[0].quantity)
            if (chosenAmount > parseInt(res.quantity)) {
              console.log("Insufficient quantity!")
              }
            else {
              connection.query(
                "UPDATE tables SET ? WHERE ?",
                [
                  {
                    quantity: res[0].quantity - response.howMany
                  },
                  {
                    item_id: chosenItem
                  }
                ],
                function(error) {
                  if (error) throw err;
                }
              );
              console.log("You bought " + res[0].product_name + " for " + res[0].price)
            }
          }
          )
  })}

  
)}
