
const buySmall = document.querySelector(".smallButton");
const smallPizza = document.querySelector("smallTotal");
const buyMedButton = document.querySelector(".medButton");
const buyLargeButton = document.querySelector(".largeButton");
// const smallTotalElem = document.querySelector(".smallTotal")
let budgetValue = document.querySelector(".inputBudget");

const removeSmallBtn = document.querySelector('.removeSmallBtn');
const removeMediumBtn = document.querySelector('.removeMediumBtn');
const removeLargeBtn = document.querySelector('.removeLargeBtn');

const smallQuantityElem = document.querySelector('.smallQuantity');
const mediumQuantityElem = document.querySelector('.mediumQuantity');
const largeQuantityElem = document.querySelector('.largeQuantity');

const cartQuantityTotalElem = document.querySelector('.cartQuantityTotal');

const addSmallBtn = document.querySelector('.addSmallBtn');
const addMediumBtn = document.querySelector('.addMediumBtn');
const addLargeBtn = document.querySelector('.addLargeBtn');

let smallPizzaTotal = 0.0;
let mediumPizzaTotal = 0.0;
let largePizzaTotal = 0.0;
let total = 0.0;
let budgetTotal = 0.0;

const smallPizzaPrice = 23.75;
const mediumPizzaPrice = 43.75;
const largePizzaPrice = 65.75;

let smallPizzaCartCount = 0;
let mediumPizzaCartCount = 0;
let largePizzaCartCount = 0;
let cartCountTotal = 0;

buySmall.addEventListener("click", function () {
  smallPizzaTotal += smallPizzaPrice;
  total += smallPizzaPrice;

  document.getElementById("smallElem").innerHTML = smallPizzaTotal;
  document.getElementById("totalElem").innerHTML = total;

  
  smallPizzaCartCount++
  cartCountTotal++;
  smallQuantityElem.innerHTML = smallPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
});

buyMedButton.addEventListener("click", function () {
  mediumPizzaTotal += mediumPizzaPrice;
  total += mediumPizzaPrice;
 
  document.getElementById("mediumElem").innerHTML = mediumPizzaTotal;
  document.getElementById("totalElem").innerHTML = total;

  mediumPizzaCartCount++;
  cartCountTotal++;
  mediumQuantityElem.innerHTML = mediumPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
});

buyLargeButton.addEventListener("click", function () {
  let largePizzaPrice = 65.75;
  largePizzaTotal += largePizzaPrice;
  total += largePizzaPrice;

  document.getElementById("largeElem").innerHTML = largePizzaTotal;
  document.getElementById("totalElem").innerHTML = total;

  largePizzaCartCount++;
  cartCountTotal++;
  largeQuantityElem.innerHTML = largePizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  
});

// buyLargeButton.addEventListener("click", function () {
//   let budgetVal = budgetValue.value;
//   let largePizzaPrice = 65.75;
//   let tester = document.getElementById("budgetElem").innerHTML;
//   console.log(tester);
  

//   budgetTotal = budgetVal;
//   console.log("budgetTotal ", budgetTotal);

//   if (budgetVal > largePizzaPrice) {
//     budgetVal -= largePizzaPrice;
//     largePizzaTotal += largePizzaPrice;
//     total += largePizzaPrice;

//     document.getElementById("largeElem").innerHTML = largePizzaTotal;
//     document.getElementById("totalElem").innerHTML = total;
//     document.getElementById("budgetElem").innerHTML = budgetVal;
//   } 

//   largePizzaCartCount++;
//   largeQuantityElem.innerHTML = largePizzaCartCount;
// });

function removeSmallPizza() {
  total -= smallPizzaPrice;
  smallPizzaTotal -= smallPizzaPrice;
  smallPizzaCartCount--
  cartCountTotal--;

  smallQuantityElem.innerHTML = smallPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;
  document.getElementById("smallElem").innerHTML = smallPizzaTotal;

}

function removeMediumPizza() {
  total -= mediumPizzaPrice;
  mediumPizzaTotal -= mediumPizzaPrice;
  mediumPizzaCartCount--;
  cartCountTotal--;

  mediumQuantityElem.innerHTML = mediumPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;
  document.getElementById("mediumElem").innerHTML = mediumPizzaTotal;

}

function removeLargePizza() {
  total -= largePizzaPrice;
  largePizzaTotal -= largePizzaPrice;
  largePizzaCartCount--;
  cartCountTotal--;

  largeQuantityElem.innerHTML = largePizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;   
  document.getElementById("largeElem").innerHTML = largePizzaTotal;

}


function addSmallPizza() {
  total += smallPizzaPrice;
  smallPizzaTotal += smallPizzaPrice;
  smallPizzaCartCount++
  cartCountTotal++;

  smallQuantityElem.innerHTML = smallPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;
  document.getElementById("smallElem").innerHTML = smallPizzaTotal;

}

function addMediumPizza() {
  total += mediumPizzaPrice;
  mediumPizzaTotal += mediumPizzaPrice;
  mediumPizzaCartCount++;
  cartCountTotal++;

  mediumQuantityElem.innerHTML = mediumPizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;
  document.getElementById("mediumElem").innerHTML = mediumPizzaTotal;

}

function addLargePizza() {
  total += largePizzaPrice;
  largePizzaTotal += largePizzaPrice;
  largePizzaCartCount++;
  cartCountTotal++;

  largeQuantityElem.innerHTML = largePizzaCartCount;
  cartQuantityTotalElem.innerHTML = cartCountTotal;
  document.getElementById("totalElem").innerHTML = total;   
  document.getElementById("largeElem").innerHTML = largePizzaTotal;

}

removeSmallBtn.addEventListener("click", removeSmallPizza);
removeMediumBtn.addEventListener("click", removeMediumPizza);
removeLargeBtn.addEventListener("click", removeLargePizza);

addSmallBtn.addEventListener("click", addSmallPizza);
addMediumBtn.addEventListener("click", addMediumPizza);
addLargeBtn.addEventListener("click", addLargePizza);



const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// import sqlite modules
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();

//Configuring express handlebars
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let db = new sqlite3.Database("./database/pizza_shop.db", async(err) => {
   if (err) {
      console.log('Error when creating the database', err)
   } else {
      console.log('Database created!')
      /* Create table(s) here */
      await db.run('CREATE TABLE IF NOT EXISTS pizza(id INTEGER PRIMARY KEY AUTOINCREMENT, size TEXT, price REAL, instock INTEGER, description TEXT )');
   }
})


app.get("/", async function (req, res) {
   try {

      const result = await db.all('SELECT * FROM pizza');
      console.log("results: ", result);

      const counter = await db.get('select * from pizza');
      console.log("counter: ", counter);

      res.render('home');

   } catch (error) {
      console.log(error);
   }

});

app.get("/cart", async function (req, res) {
   try {
      res.render('cart');

   } catch (error) {
      console.log(error);
   }

});

app.post('/greet', async (req, res) => {

   res.redirect('/')
})

app.get('/greeted', (req, res) => {

})

app.get('/counter/:username', (req, res) => {


})

app.get("/create", async function (req, res) {
   try {
      await db.run('INSERT INTO pizza (size, price, instock, description) VALUES (?,?,?,?)', ["Small", 45.5, 20, "Desciption of Small Pizza"]);
      res.redirect('/')

   } catch (error) {
      console.log(error);
   }

});

let PORT = process.env.PORT || 3020;

app.listen(PORT, function () {
   console.log('App starting on port', PORT);
});