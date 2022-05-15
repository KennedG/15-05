const Discord = require("discord.js");
module.exports = {
name:'invite',
description:'Me convide para seu servidor', 
run: async(client, interaction, args) => {
    let nome = new discord.MessageEmbed()

    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`<a:hype:897139138661351434> |Quer me adicionar em seu Servidor?`)
    .setDescription(`**<:Staff:920797956209270835>|Me adicione!**\n Clique em __Clique aqui__: [Clique aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=139656547777)`)
    .setColor('#A020F0')
    .setFooter("Caso queira meu convite pelo PRIVADO use G!convitedm")
    
    message.channel.send(nome)
}
}