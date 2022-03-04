const colors = require('./../../colors.json')
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'waifu',
        description: 'Waifu Images',
        aliases: ["Waifu"],
        usage: '',
        category: 'images',
    },
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "Waifu", Color: Color });
    
    return message.channel.send(Data);
  }
};