// Require the necessary discord.js classes
const  { Client, GatewayIntentBits, Partials } =  require("discord.js");

require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
  });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate',async message => {
    if (!message.content.startsWith('!!') || message.author.bot) return;
    message.channel.send(message.content.slice(2));
    message.delete();
});
// Login to Discord with your client's token
client.login(token);