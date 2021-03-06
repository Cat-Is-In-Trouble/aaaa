const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')


module.exports = {
config: {
  name: 'firstmsg',
  aliases: ['1msg']
  },
  async run (cleint, message, args) {
    
  

   const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    message.channel.send(
      new MessageEmbed()
        .setTitle(`First Messsage in ${message.guild.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField('Message ID', msg.id, true)
        .addField('Created At', message.createdAt.toLocaleDateString(), true)
);
}
}