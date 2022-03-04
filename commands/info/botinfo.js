const db = require("old-wio.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
const emoji = require('../../emojis.json')
module.exports = {
config: {
  name: "botinfo",
  category: "info",
  aliases: ['binfo', 'botstats', 'stats'],
  description: 'Check\'s bot\'s status',
},
  run: async (bot, message, args) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${bot.user.username} v${version}`, bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .addField(`${emoji.Uptime} Uptime :`, `${ms(bot.uptime)}`, true)
            .addField(`${emoji.Ping} WebSocket Ping:`, `${bot.ws.ping}ms`, true)
            .addField(`${emoji.Memory} Memory:`, `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField(`${emoji.Verify} Guild Count:`, `${bot.guilds.cache.size} guilds`, true)
            .addField(`${emoji.Users} User Count:`, `${bot.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} users`, true)
            .addField(`${emoji.Commands} Commands:`, `200 cmds`)
            .addField(':man_bowing: Node:', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField(':recycle: Cached Data:', `${bot.users.cache.size} users\n${bot.emojis.cache.size} emojis`, true)
            .addField(':link: Discord.js:', `${discordjsVersion}`, true)
            .addField('• __Note__', `**Bot Name**-> <@!882910260124352562>
            **Bot Id**-> 882910260124352562
            **Maded By**-> <@!840569892800561162> Dm Him For More Info About This Bot.`)
            .setFooter(`Made With ❤️`, message.author.displayAvatarURL({
              dynamic: true
            }))
            .setTimestamp()
        );
    }
}
