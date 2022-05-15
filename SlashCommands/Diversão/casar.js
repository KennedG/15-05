const Discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = { 
    name: "casar",
    description: "Se casar com alguém", 
    type:'CHAT_INPUT',
    options:[
      {
        name:'user',
        description:'user que desejar se casar',
        type:"USER",
        required:true,
      }
    ],
    run: async(client, interaction, args) => {



  var list = [
    'https://i.imgur.com/Byvt1lm.gif',
    'https://i.imgur.com/qvLIGiD.gif',
    'https://i.imgur.com/K7D0vwo.gif',
    'https://i.imgur.com/ilXD5rZ.gif',
    'https://i.imgur.com/uCLKG9K.gif'
  ];

    var list1 = [
    'https://i.imgur.com/EOLzjrH.gif',
    'https://i.imgur.com/XAPNcZR.gif',
    'https://i.imgur.com/lMYLvrQ.gif',
    'https://i.imgur.com/cITnaRL.gif',
    'https://i.imgur.com/6feJf5j.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
    var rand1 = list1[Math.floor(Math.random() * list.length)];
  let pessoa = interaction.options.getUser('user');
  
  if (!pessoa) return interaction.reply({ content: `❌ | ${interaction.member.user} Mencione alguém para pedir em casamento!`});

    if (pessoa.id == interaction.member.user.id) return interaction.reply({ content: `❌ | ${interaction.member.user} você não pode casar com si mesmo!`});

  const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("casar")
                .setStyle("SECONDARY")
                .setLabel("aceitar")
                .setEmoji(`💘`)
                .setDisabled(false),
                                new MessageButton()
                .setCustomId("002")
                .setStyle("DANGER")
                .setLabel("rejeitar")
                .setEmoji(`❌`)
                .setDisabled(false)
                )

  let kazinho = new Discord.MessageEmbed()
  .setTitle(`💏 casamento 💖`)
  .setDescription(`💍 ${interaction.member.user} pediu ${pessoa} em casamento!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("#0060EE")
  .setThumbnail(interaction.member.user.displayAvatarURL({format:"png"}))
  .setFooter({ text: `💖 casamento`,iconURL: interaction.member.user.displayAvatarURL({format:"png"})});

  const me = await interaction.reply({embeds: [kazinho], components: [row], fetchReply: true})

const filter1 = (interaction) => {
            if(interaction.user.id == pessoa) return true; 
            else {
                interaction.reply({ content: `❌ apenas o ${pessoa}  tem permissao de reagir no botão`, ephemeral: true })
            }
        }


const collector = me.createMessageComponentCollector({componentType: 'BUTTON', time: 10 * 6000, filter: filter1, max: 1 })




  collector.on('collect', async (m) => {
            
            if (!pessoa)
            return;
            if (m.customId === 'casar') {
            me.edit({
                        embeds: [

                        new Discord.MessageEmbed()
                        .setTitle(`💏 casamento 💖`)
                        .setDescription(`💍 ${pessoa} aceitou se casar com ${interaction.member.user}!`)
                        .setColor("#0060EE")
                        .setImage(rand1)
                        .setThumbnail(interaction.member.user.displayAvatarURL({format:"png"}))
                        .setFooter({ text: `💖 casamento`,iconURL: interaction.member.user.displayAvatarURL({format:"png"})})
                                                ], components: []
})
};
 if (m.customId === '002') {
     setTimeout(() => interaction.deleteReply(), 100)

};
});
        }
}
