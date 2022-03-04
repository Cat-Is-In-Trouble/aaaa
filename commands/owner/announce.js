const Discord = require("discord.js");

module.exports = {
config: {
  name: "announce",
  aliases: ["ac"],
  category: "owner",
  description: "Announce Your Message To Another Channel",
  usage: "announce #channel your message"
},
  run: async (client, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send("<a:noshinchn:881874652857761833>| You don't have premmsions to do that!");

    let inline = true;
    let sayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!sayChannel)
      return message.channel.send(
        `<a:noshinchn:881874652857761833> | ${message.author} mention a channel First`
      );
    let sayMsg = args
      .slice(1)
      .join(" ")
      .split(" | ");

    if (!sayMsg[1]) sayMsg[1] == "FF7034";
    if (!sayMsg)
      return message.channel.send(
        ` | Say Some Message To Announce`
      );
    let role = message.member.highestRole;
    let embed = new Discord.MessageEmbed()
      .setColor(sayMsg[1])
      .setTitle(`Announced By ${message.author.username}`)
      .setTimestamp()
      .setDescription(sayMsg[0]);

    message.delete();
    message.channel
      .send(
        `<a:yeas:878206441046032404>  | successfully Announced Your Message To ${sayChannel}`
      )
      .then(m => m.delete({ timeout: 2000 }));

    sayChannel.send({ embed }).catch(console.error);
  }
};