const db = require('quick.db');
const ms = require("pretty-ms");
const {MessageEmbed} = require("discord.js");;
const weather = require('weather-js')
const Discord = require('discord.js')
module.exports =  {
    name: "Clima",
    description: "Tempo",
    type: "CHAT_INPUT",
    options: [
      {
          name: "City",
          type: "STRING",
          description: "Selecione Cidade ou Região.",
          required: true
          
      }
  
  ],
    run: async (client, interaction, args) => {
        
        const search = interaction.options.getString('City')
     await weather.find({ search: search, degreeType: 'C' }, function(err, result) {
          if (result[0] != undefined) {
              var current = result[0].current;
              var location = result[0].location;
              const tempEmbed = new Discord.MessageEmbed()
                  .setDescription(`**${current.skytext}**`)
                  .setAuthor({ name:`Clima atual na região de: ${current.observationpoint}`, iconURL: ''})
                  .setThumbnail(current.imageUrl)
                  .setColor('BLACK')
                  .addField(`Fuso horário`, `UTC${location.timezone}`, true)
                  .addField(`Temperatura`, `${current.temperature} Cº`, true)
                  .addField(`Sensação Térmica`, `${current.feelslike} Cº`, true)
                  .addField(`Vento`, `${current.winddisplay}`, true)
                  .addField(`Umidade`, `${current.humidity}%`, true)
                  interaction.channel.send({ embeds: [tempEmbed]})
          } else {
              interaction.reply({ content: '<:1486moderationvhighest:938556914927808572> | Esta localização não está em meu alcance! Me desculpe.'})
          }
      })
    }
}