const client = require("..");

client.on('messageCreate', async (message) => {
    // console.log(message.content);
});

module.exports = {name:"messageCreate"}