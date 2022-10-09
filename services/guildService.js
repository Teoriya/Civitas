const guild = require('../models/guilds.model');

module.exports = {
    // Create a new guild
    createGuild: async (guildId, guildName, guildOwner, guildOwnerID, memberCount, createdTimestamp) => {
        const newGuild = new guild({
            guildId,
            guildName,
            guildOwner,
            guildOwnerID,
            memberCount,
            createdTimestamp
        });
        await newGuild.save();
    },
    // Get a guild by ID
    getGuild: async (guildId) => {
        return await guild.findOne({ guildId: guildId });
    },
    // Get all guilds
    getAllGuilds: async () => {
        return await guild.find();
    },
    // Update a guild   
    updateGuild: async (guildId, guildName, guildOwner, guildOwnerID, memberCount, createdTimestamp) => {
        await guild.findOneAndUpdate({ guildId: guildId }, {
            guildId,
            guildName,
            guildOwner,
            guildOwnerID,
            memberCount,
            createdTimestamp
        });
    },
    // Delete a guild
    deleteGuild: async (guildId) => {
        await guild.findOneAndDelete({ guildId: guildId });
    },
}