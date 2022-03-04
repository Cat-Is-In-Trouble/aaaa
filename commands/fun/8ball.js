const Discord = module.require("discord.js");

module.exports = {
  config: {
  name: "8ball",
  aliases: ["eightball"],
  description: "Surely I will Insult You",
  },
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send("```Name: 8ball\nUsage: g!8ball <question>```")

    var fortunes = [
      "Yes.",
      "Not sure but you def a stupid!",
      "No u..",
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definelty.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Signs point to yes.",
      "yes idiot",
      "NO Dumb",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now...",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good...",
      "Very doubtful.",
      'Maybe.',
	    'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!',
  'NO.!',
  '01010101001010..'
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
