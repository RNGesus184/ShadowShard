const Discord = require("discord.js");
const superagent = require ("superagent");

exports.run = async (client, message, args) => {
    const {body} = await superagent
    .get ('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');

    const shibaembed = new Discord.RichEmbed()
    .setColor("#f48c42")
    .setTitle(":dog: Woof!")
    .setImage(body[0]);
  message.channel.send(shibaembed);
};   
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["dog"],
    permLevel: "Standard User"
  };
  
  exports.help = {
    name: "shiba",
    category: "Fun",
    description: "Provides a random picture of a dog.",
    usage: "shiba"
  };
