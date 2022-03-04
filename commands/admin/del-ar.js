const db = require("quick.db");
const emoji = require('../../emojis.json');

module.exports = {
  config: {
  name: "del-ar",
  aliases: ["delcc"],
  usage: "delcmd <cmd_name>",
  description: "Delete the custom commannd",
  category: "admin",
  },
  
  run: async (bot, message, args) => {

    let cmdname = args[0];

    if(!cmdname) return message.channel.send(`${emoji.Error}Give me commmand name Like-> \`del-ar <word_name>\``)

    let database = db.fetch(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send(`${emoji.Error} Unable To Find The Invalid AutoResponder`)

      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      return message.channel.send(`${emoji.Approved} Deleted the Word \`${cmdname}\` AutoResponder!`)


    } else {
      return message.channel.send(`${emoji.Error} Invalid Command!`)
    


  }
  }
}