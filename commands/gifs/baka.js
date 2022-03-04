const { MessageEmbed } = require("discord.js");
const config = require("../../config");
const nekos = require("nekos.life");
const {
  sfw: { baka },
} = new nekos();
module.exports = {
  config: {
    name: "baka",
    description: "Get's a Baka reaction!",
    aliases: ["bka"],
    usage: "<user>",
    accessableby: "",
    category: 'gifs',
  },
  run: async (client, message, args) => {
    const { url } = await baka().catch(() => {});

    if (!url) return message.channel.send(`Could not connect to nekos.life`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(
        `${
          [`B~baka noo!`, `I am Not Baka`, `Don't Say Me That PLz`][
            Math.floor(Math.random() * 2)
          ]
        }`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Ok U Are Baka Now| Ping Anyone Else Now`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor("YELLOW")
          .setDescription(
            `${message.member} Bakas ${message.mentions.members.first()}!| Why He Did That?`
          )
          .setImage(url)
      );
    } else {
      return message.channel.send(
        `${message.member}, I Can't Baka Your Imaginary Freind!`
      );
    }
  },
};
