const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "votar",
    description: "vote em mim em algumas botlists!",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        
        const embed = new Discord.MessageEmbed()
        .setColor('#A020F0')
        .setTitle('Você descobriu isso? <:voidbots:742925293907607624>')
        .setDescription(`
        <a:V_AfirmativoTKF:944678965258367027>| Para você usuário poder me ajudar e ajudar os meus desenvolvedores basta apenas votar! [Clique aqui!](https://voidbots.net/bot/814726444377833532)
        É você também vai animar meus desenvolvedores <@493282797222494230>, <@794015673184419881> a fazer mais comandos espetaculares para você mesmo usar!

        `)
        .setImage('https://i.imgur.com/ebpFFOU.jpeg')
        
        const button = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton() //button
            .setStyle('LINK') //NÃO TROQUE POIS É UM LINK!
            .setEmoji('<:voidbots:742925293907607624>') //EMOJI DO BOTÃO
            .setLabel('Vote no Gizmo') //TEXTO DO BOTÃO
            .setURL('https://voidbots.net/bot/814726444377833532')//URL
            
        )
        
        message.reply({ embeds: [embed], components: [button] })
    },
};