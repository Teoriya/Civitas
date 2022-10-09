const { model, Schema } = require('mongoose');

const guildModel = Schema({
    guildPrefix:{type:String, default:"!"},
    guildId:{type:Number, required:true},
    guildName:{type:String, required:true},
    guildOwner:{type:String, required:true},
    guildOwnerID:{type:String, required:true},
    memberCount:{type:Number, default:0},
    createdTimestamp:{type:Number, required:true},
},{
    timestamps:true
});

module.exports = model('guilds', guildModel);