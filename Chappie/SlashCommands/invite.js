const Discord = require("discord.js");
module.exports = {
name:"invite",
description:'「👤 Utilidades」Quer me adicionar em seu Servidor?', 
run: async(client, interaction, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
    .setColor('#A020F0')
    .setTitle(`<a:hype:897139138661351434> |Quer me adicionar em seu Servidor?`)
    .setDescription(`**<:Staff:920797956209270835>|Me adicione!**\n Clique em __Clique aqui__: [Clique aqui](https://discord.com/oauth2/authorize?client_id=950240306744414269&scope=bot&permissions=8)`)
    .setTimestamp()
    .setFooter({ text: `Obrigado por me adicionar!` })
    interaction.reply({embeds: [embed]});
}
}
