import express from "express";
import * as dotenv from 'dotenv' 
const app = express();
const PORT = 4000;

app.get("", (req, res) => {
  res.send(`Hello SuperUsers!`);
});


// your code here
dotenv.config()
//Task 1:
// - Write a middleware that shows the current route on terminal.
// - This logging works only if an env variable called DEBUG is true
app.use((req, res, next) => {
  let path = req.url;
  process.env.DEBUG === 'true' ? console.log(path) : 'Cannot return route: DEBUG = false';
  next();
})

//Task 2 -
// - write an endpoint multiply/:number using app.get() - use the .env vairable MULTIPLIER
// - endpoint should show the result of number * MULTIPLIER

app.get("/multiply/:number", (req, res) => {
  let answer = req.params.number * process.env.MULTIPLIER;
  res.send({answer})
}
);

// Task 3 -
// When an unspecified endpoint is given, there should be an error message with status 404 'Route Unknown'. Default is 404
export const errorHandler = (error, req, res,  next) => {
  error.status = 404;
  if (!req.route) {
  }
  
}


app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
