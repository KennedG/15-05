const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "coinflip",
    description: "「🤣 Diversão 」Jogue uma moeda!",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args, message) => {

      
var list = [
    'Cara',
'Coroa',];

  var rand = list[Math.floor(Math.random() * list.length)];

  let jacu = new MessageEmbed()
  
  .setTitle(`CoinFlip!`)
  
  .setDescription(`Você jogou uma moeda e tirou **${rand}**!`)
  .setColor("#0060EE")
 
        interaction.reply({ embeds: [jacu] });
    },
};