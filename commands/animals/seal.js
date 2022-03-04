const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  config: {
  name: "seal",
  aliases: [],
  category: "animals",
  description: "Return A Random Seal!",
  usage: "Seal",
  },
  run: async (client, message, args) => {
    
    const Data = await Random.GetAnimalImage({ Animal: "seal", Color: Color });
    return message.channel.send(Data);
  }
};