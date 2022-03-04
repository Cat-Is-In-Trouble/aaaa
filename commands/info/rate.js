const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config.js");
const emoji = require('../../emojis.json');

module.exports = {
   config: {
  name: "rate",
  aliases: ["r"],
  description: "Bot Rate Your Given Thing!",
  category: "info",
  usage: "Rate <Text>",
  },
  run: async (client, message, args) => {
    //Start
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`${emoji.Error}| Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`I Rated`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};