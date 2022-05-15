const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
    description: "「🤣 Diversão 」 Me faça uma pergunta!",
    type: 'CHAT_INPUT',
    options: [{
        name: 'pergunta',
        type: 'STRING',
        description: 'Qual sua pergunta?',
        required: true,
    }],
    run: async(client, interaction, args, options) => {
       const p = interaction.options.getString('pergunta')

var list = [
'Sim.',
'Talvez.',
'Melhor você não saber.',
'Não.',
'Eu tenho certeza.',
'SIM EU TENHO MUITA CERTEZA',
'não? você e louco?',
'Eu realmente não sei',
'Sabia que meu criador não existe ?',
'Ninguém sabe.',
'Pergunte a Loritta e me deixe em paz.',
'Nem eu consigo responder.',
'Você não se cansa?',
'Meu dono ficou 2 horas fazendo esse comando e você usa assim.',
'Paraaaaaa',
'Meu dono pode saber responder isso...',
'Não me pergunte nada , estou falando com a Loritta.',
'Talvez sim , Talvez não.',];

var rand = list[Math.floor(Math.random() * list.length)];

        const embed = new MessageEmbed()
            .setTitle(`Chappie responde!`)
  
  .setDescription(`> **Sua pergunta:** ${p}\n> **Minha resposta:** ${rand}`)
  .setColor("#0060EE")
            .setFooter(`Pedido por: ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }));
        
        await interaction.reply({
            embeds: [embed]
        });
    }
    }