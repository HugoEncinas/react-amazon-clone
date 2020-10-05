const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripeSecretKey = 'sk_test_51HRnYSK9utNpep0DSDau0Gp7Ts5kJpYjXncMzdaeifNpKEsQmn2LnC5J2vrN92NC4rgFbvtts2CSUnnteFnoGmMS00cmh4RXSu';
const stripe = require('stripe')(stripeSecretKey);


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment request received for this amount: ', total);

  const paymentIntent  = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // - OK
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});



// - Listen command
exports.api = functions.https.onRequest(app);

// - Example endpoint
//   http://localhost:5001/clone-bec8f/us-central1/api
