const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        description: 'flips a coin',
        usage: 'coinflip',
    },
    run: async (bot, message, args) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("And The Coin Is <a:p_coin:888697192267800607>")
            .setDescription(`**${result}**!`)
            .setThumbnail("https://cdn.dribbble.com/users/31664/screenshots/1377335/coin-flip.gif")
        message.channel.send(embed);
    }
};