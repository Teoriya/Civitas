const client = require("..");

client.on('messageCreate', async (message) => {
    if(message.content.startsWith('!edit')) {
        args = message.content.split(' ');
        const msg = await message.channel.messages.fetch(args[1]);
        await msg.edit(args.slice(2).join(' '));
        message.delete();
    }
    else if(message.content.startsWith("!")){
        await message.channel.send(message.content.slice(1));
        message.delete();
    }
});

module.exports = {name:"messageCreate"}