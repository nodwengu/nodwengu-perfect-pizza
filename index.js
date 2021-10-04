
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const flash = require('express-flash');
const session = require('express-session');

// import sqlite modules
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const CreatePizza = require('./createPizza');
const createPizza = CreatePizza();

const app = express();

// initialise session middleware - flash-express depends on it
app.use(session({
   secret: "<add a secret string here>",
   resave: false,
   saveUninitialized: true
}));

//Configuring express handlebars
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

// initialise the flash middleware
app.use(flash());

app.get("/", async function (req, res) {
   try {
      //const result = await db.all('SELECT * FROM pizza');
      // console.log("results: ", result);
      let totals = createPizza.getTotals();
      let quantities = createPizza.getQuanties();

      req.flash('info', 'Flash Message Added');

      res.render('home', {
         totals,
         quantities
      });

   } catch (error) {
      console.log(error);
   }

});

// app.get("/cart", async function (req, res) {
//    try {
//       res.render('cart');

//    } catch (error) {
//       console.log(error);
//    }

// });

// app.post('/greet', async (req, res) => {
//    flash.

//    res.redirect('/')
// })

// app.get('/counter/:username', (req, res) => {


// })

// app.get("/create", async function (req, res) {
//    try {
//       await db.run('INSERT INTO pizza (size, price, instock, description) VALUES (?,?,?,?)', ["Small", 45, 30, "Desciption of small Pizza"]);
//       await db.run('INSERT INTO pizza (size, price, instock, description) VALUES (?,?,?,?)', ["Medium", 60, 40, "Desciption of medium Pizza"]);
//       await db.run('INSERT INTO pizza (size, price, instock, description) VALUES (?,?,?,?)', ["Large", 85, 50, "Desciption of large Pizza"]);
//       res.redirect('/');
//    } catch (error) {
//       console.log(error);
//    }
// });   

// app.get('/delete', async (req, res) => {
//    await db.exec('delete from pizza');
//    res.redirect('/')
// })




app.get('/buy-small', async (req, res) => {
   createPizza.buySmall();
   res.redirect('/')
});

app.get('/buy-medium', async (req, res) => {
   createPizza.buyMedium()
   res.redirect('/')
});

app.get('/buy-large', async (req, res) => {
   createPizza.buyLarge();
   res.redirect('/')
});

app.get('/orders', async (req, res) => {
   let orders = createPizza.getOrders();
   let buttonStatus = createPizza.getButtonStatus();

   res.render('orders', {
      orders,
      buttonStatus
   });
});

app.get('/create-order', async (req, res) => {
   createPizza.createOrder();
   createPizza.resetTotals();
   res.redirect('/')
});

app.get('/pay-order/:orderId', async (req, res) => {
   let orderId = req.params.orderId;
   createPizza.updateOrderStatus(orderId)
   res.redirect('/orders')
});

let PORT = process.env.PORT || 3020;

app.listen(PORT, function () {
   console.log('App starting on port', PORT);
});



