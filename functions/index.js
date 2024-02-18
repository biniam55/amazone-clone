
const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51OcB7FGB1MweLZTVxSPWyzGWh8xjFCYNx4Y4FV5XdJLJOlRi6N6krIFSIpqJVnxP0MuquftEHUAH2Nfpr7RuevfS00RlNi9m5z"
);

const app=express();
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("up and running"));
// - Listen command
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/e-clone-55334/us-central1/api