const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const Discord = require("discord.js")

module.exports = {
  config: {
  name: "serveravatar",
  aliases: ["sav", "guildavatar", "servericon"],
  category: "info",
  description: "Get avatar of the server",
  usage: "servericon",
  },
  run: async (client, message, args) => {
    const { guild } = message 
    //console.log(guild)
    
    const { name, region, memberCount, owner, afkTimeout } = guild 
    const icon = guild.iconURL() 
    //console.log(icon)
    //console.log(name, region, memberCount, icon, owner, afkTimeout)
    message.channel.send(`This Servers icon is: ${icon}`)
  },
};