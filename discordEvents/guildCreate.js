const guildService = require('../services/guildService.js');
const { EmbedBuilder } = require('discord.js');
const client = require('..');

client.on(
    'guildCreate', async (guild) => {
        guildService.createGuild(guild.id, guild.name, guild.owner.user.username, guild.ownerID, guild.memberCount, guild.createdTimestamp);
        const welcomeEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Thanks for adding me here!')
            .setDescription(`${client.user.username} is a bot that is designed to help you with your server. You can use the command !help to see all of my commands.`)
            .addFields(
                { name: 'Prefix', value: `My default prefix is \`!\`\nYou can change it using \`!prefix\` or using slash command \`/prefix\`` },
                { name: '\u200B', value: '\u200B' },
                { name: 'Support Server', value: 'support server link', inline: true },
                { name: 'Developed By', value: 'Team Civitas', inline: true },
            )
            .setTimestamp()
        guild.fetchAuditLogs({ type: "BOT_ADD", limit: 1 }).then(log => { // Fetching 1 entry from the AuditLogs for BOT_ADD.
            log.entries.first().executor.send({content:`Thank you for adding me to ${guild.name}!`,embeds:[welcomeEmbed]}).catch(e => console.error(e)); // Sending the message to the executor.
        });
    }

)