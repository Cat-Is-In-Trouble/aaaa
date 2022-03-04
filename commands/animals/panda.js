const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const Discord = require("discord.js");
const emoji = require('../../emojis.json')

module.exports = {
  config: {
  name: "panda",
  description: "Shows a picture of a panda",
  category: "animals",
  aliases: [""],
  usage: "panda",
  },
  
  run: async (bot, message, args) => {
  
    const res = await fetch('https://some-random-api.ml/img/panda');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Panda} Panda !!! ${emoji.Panda}`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
    
  }
};