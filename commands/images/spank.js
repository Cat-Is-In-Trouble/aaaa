const Discord = require('discord.js');
const emoji = require('../../emojis.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    config: {
        name: "spank",
        category: "images",
        description: "Posts you spanking the mentioned user",
        example: `${config.Prefix}slap @Panda BOii`
    },

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        new DIG.Spank().getImage(message.member.user.displayAvatarURL({dynamic: false, format: 'png', size: 1024}), avatar);

        let img = await new DIG.Spank().getImage(message.member.user.displayAvatarURL({dynamic: false, format: 'png', size: 1024}), avatar);

        let attach = new Discord.MessageAttachment(img, "spank.png");

        message.channel.send(attach)
    }
}