// Require the necessary discord.js classes
const { Client } = require("discord.js");
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;


//mongoConnceciton
require('dotenv').config();
const dbURL = process.env.DBURL;
const mongoose = require("mongoose");
mongoose.connect(dbURL, {}).then(console.log('Connected to mongodb!'))


const
  express = require("express"),
  axios = require("axios").default,
  app = express().use(express.json()); // creates express http server

//routes
// const userRoute = require('./routes/userRoute');
// const whatsappRoute = require("./routes/whatsappRoute")
// app.use("/user", userRoute);
// app.use("/whatsapp",whatsappRoute)

// Create a new client instance
const client = new Client({
  intents: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536],//console.log({GatewayIntentBits}) -- GatewayIntentBits
  partials: [0, 1, 2, 3, 4, 5, 6],//console.log({Partials});, -- Partials
});


// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
  const handler = require('./handlers');
});

// client.on('messageCreate', async (message) => {
//     console.log(message.content);
// });

client.login(token);
module.exports = client;