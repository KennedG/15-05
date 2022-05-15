const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "servericon",
    description: "veja o icone deste servidor!",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        
      let servidor = interaction.guild;

        let embed = new MessageEmbed()
        .setColor("#0060EE")
        .setTitle(`❤ | ${interaction.guild.name}`)
        .setImage(`${interaction.guild.iconURL({ dynamic: true })}`)
      
      interaction.reply({ embeds: [embed] });
    },
};