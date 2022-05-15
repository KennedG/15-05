const Discord = require("discord.js")
const db = require("quick.db");
const ms = require('parse-ms');

module.exports =  {
    name: "crime", 
    description: "「💰Economia」Cometa um crime!", 
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {


    let user = interaction.options.getUser("usuário");

    let author = await db.fetch(`crime_${interaction.user.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        interaction.reply(`❌ | ${user} **Você sabia que os seres humanos ficam cansados? você não tem mais força para continuar!**`);
        
        interaction.reply({content: `${user}`, embeds: [timeEmbed] });
    } else {
        let replies = ['Programador (a)','Construtor (a)','Agricultor (a)','Garoto(a) de Programa','Garçom','Mecanico (a)','Cozinheiro (a)',
                      'Vendedor (a)','Barqueiro (a)','Youtuber','Padeiro (a)']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 10000) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("efetuado com sucesso!")
        .setColor("#0060EE")
        .setDescription(`Você cometeu um crime e ganhou: **${amount}** Moedas!`)
        .setFooter("Você acabou de cometer um crime!")
        .setTimestamp();

        interaction.reply({content: `${user}`, embeds: [embed1] });
        
        db.add(`carteira_${interaction.user.id}`, amount);
        db.set(`crime_${interaction.user.id}`, Date.now())
    };

    interaction.reply(`Parabéns ${interaction.author}! Você está utilizando meu comando premium.<a:vegasvip:949092680661606430>`);
    interaction.react("<a:verificado:908562051927007242>");

}
    

}
    