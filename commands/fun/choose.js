
const { client, message } = require("discord.js");
const colors = require('./../../colors.json')

const diceEmoji = ':game_die:';
const msgs = ["I choose ?!","I like ?!","I love ?!","? is the best choice","definitely ?!","? 100%"];

module.exports = {
  config: {
    name: "choose",
    aliases:["pick", "decide"],
    args:"{item1} | {item2} | ...",
    description:"Let me decide a random option from a list of items! ",
    example:["owo pick dog | cat | mouse"],
    cooldown:5000,
    half:80,
    six:400,
    },

    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('Please Specify a text that you want to let bot choose it! **BUT** `Text Should Be With Comma`\n >>> E.g- g!choose hi, no')

        let items = args.join(" ").replace(/[,;]/gi,'|').split('|');

        if(items.length==1){
            return message.channel.send('Please Specify at least 2 text query!')
        }

        let item = items[Math.floor(Math.random()*items.length)];
        const msg = ', '+msgs[Math.floor(Math.random()*msgs.length)].replace('?','**'+item+'**');
        message.channel.send(diceEmoji + msg);
    }
};


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */