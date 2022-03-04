const { MessageEmbed } = require("discord.js");
const config = require("../../config");
const nekos = require("nekos.life");
const {
  sfw: { feed },
} = new nekos();
module.exports = {
  config: {
    name: "feed",
    description: "Get's a Feed reaction!",
    aliases: ["eat"],
    usage: "<user>",
    accessableby: "",
    category: 'gifs',
  },
  run: async (client, message, args) => {
    const { url } = await feed().catch(() => {});

    if (!url) return message.channel.send(`Could not connect to nekos.life`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(
        `${
          [`Tummy Full!`, `Thanks For Feeding Me ^-^`, `That Wasen't Tasty At All! ;-;`][
            Math.floor(Math.random() * 2)
          ]
        }`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Ok U Are Now Fedded Now Feed Any One Else Because Your Tummy Is Full`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor("YELLOW")
          .setDescription(
            `${message.member} Feeded ${message.mentions.members.first()}!| His Tummy Is Full?`
          )
          .setImage(url)
      );
    } else {
      return message.channel.send(
        `${message.member}, I Can't Feed Your Imaginary Freind!`
      );
    }
  },
};
