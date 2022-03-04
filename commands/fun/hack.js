const colors = require('./../../colors.json')
const Discord = require("discord.js");
const emoji = require('../../emojis.json');
const ms = require("ms")

module.exports = {
  config: {
  name: "hack",
  description: "Hax Valid User!",
  category: "fun",
  aliases: ["hax"],
  usage: "hax",
  },
  run: async(client, message, args) => {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send(" ok, You are hacked Pick someone else")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply(`${emoji.Error}| Who to hack? Please Mention him`);
}
const prompt = await message.channel.send(`<a:rainbow_dance:881872313581191179> Hacking ${user ? hacked.username : hacked} now...`);
    
   await wait(2700);
     await  prompt.edit('<a:still_loading:881205540854845460> Finding discord login...');
     await wait(2700);
     await  prompt.edit(`<a:still_loading:881205540854845460> Found:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`${hacked.username}**dumb**abcd\``);
     await  wait(3700);
     await  prompt.edit('<a:still_loading:881205540854845460> Fetching dms');
     await  wait(3700);
     await prompt.edit('<a:still_loading:881205540854845460> Listing most common words...');
     await  wait(2700);
     await  prompt.edit(`<a:still_loading:881205540854845460> Injecting virus into discriminator #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('<a:still_loading:881205540854845460> Virus injected');
     await  wait(3700);
    
   await prompt.edit('<a:still_loading:881205540854845460> Finding IP address');
    await wait(5000);
   await  prompt.edit('<a:still_loading:881205540854845460> Spamming email...');
   await wait(6700);
   await  prompt.edit('<a:still_loading:881205540854845460> Selling data to facebook... <a:les_dance:881872249475461132>');
  await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`A Dangerous and very ORIGINAL HACKING of ${user ? hacked.username : hacked} is just completed\nNow He Is Happy With His Trojan Virus :D`)
  .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053");
  await prompt.delete
   await  message.channel.send(embed);
    

  }
}