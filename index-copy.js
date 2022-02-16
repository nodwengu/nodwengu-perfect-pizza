const express = require('express');
const app = express();

const Factory = require('./factory');
const factory = Factory();

const PORT = process.env.PORT || 3020;

const myMiddleware = (req, res, next) => {
   console.log("Middleware is running");
   const name = req.params.name;
   const patients = factory.getAll();

   const patient = patients.filter( (item) => item.name === name);
   console.log("Obj: ", patient[0]);
  
   patients.map( (item) => {
      if (item.name === name) {
         item.greets++;
         return;
      }
   });

   next();
}

app.get('/without-cors', (req, res, next) => {
   res.json({ msg: 'no CORS, no party!' })
})

app.get('/greet/:name', myMiddleware, (req, res) => {
   const patients = factory.getAll();

   res.json(patients);
});

const server = app.listen(PORT, () => {
   // console.log(server.address().port);
   console.log(`server running at port ${PORT}`);
});