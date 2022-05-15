const Discord = require("discord.js");
module.exports = {
name:'invite',
description:'「👤 Utilidades」Quer me adicionar em seu Servidor?', 
run: async(client, interaction, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#0060EE')
    .setTitle(``)
    .setDescription(`**<:Staff:920797956209270835>|Me adicione!**\n Clique em __Clique aqui__: [Clique aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=139656547777)`)
    .setTimestamp()
    .setFooter({ text: `Obrigado por me adicionar!` })
    interaction.reply({embeds: [embed]});
}
}