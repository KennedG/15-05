const Discord = require("discord.js") 



module.exports =  {
    name: "ping", 
    description: "「👤 Utilidades」Veja meu ping.", 
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {
       
        let don = new Discord.MessageEmbed() 
        .setColor("#36393e") // Cor invisivel
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`
        > <:PepePing:960207591269630002> Meu ping atual é de: \`${client.ws.ping}ms\``);

        interaction.reply({ embeds: [don], ephemeral: true })
    } 
} 



