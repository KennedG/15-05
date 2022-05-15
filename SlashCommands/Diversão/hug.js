const Discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = {
    name: "hug",
    description: "「🤣 Diversão」Abraçar um membro.",
    type:'CHAT_INPUT',
    options: [
      {
        name:'user',
        description:'User que desejar abraçar',
        type:"USER",
        required:true,
      },
    ],
    run: async(client, interaction, args) => {

  var list = [
    'https://imgur.com/RgfGLNk.gif',
    'https://i.imgur.com/r9aU2xv.gif',
    'https://i.imgur.com/wOmoeF8.gif',
    'https://i.imgur.com/nrdYNtL.gif',
    'https://imgur.com/82xVqUg.gif'
  ];

    var list1 = [
    'https://imgur.com/c3WzMZu.gif',
    'https://imgur.com/BPLqSJC.gif',
    'https://imgur.com/ntqYLGl.gif',
    'https://imgur.com/v47M1S4.gif',
    'https://imgur.com/6qYOUQF.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
    var rand1 = list1[Math.floor(Math.random() * list.length)];
  let pessoa = interaction.options.getUser('user');
  
  if (!pessoa) return interaction.reply({ content: `<a:Negado:928462860961599590> | ${interaction.member.user} Mencione alguém para abraçar!`});

    if (pessoa.id == interaction.member.user.id) return interaction.reply({ content: `<a:Negado:928462860961599590> | ${interaction.member.user} você Não pode se abraçar ;-;!`});

  const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("hug")
                .setStyle("SECONDARY")
                .setLabel("retribuir")
                .setEmoji(`🔁`)
                .setDisabled(false),
                                new MessageButton()
                .setCustomId("002")
                .setStyle("DANGER")
                .setLabel("cancela")
                .setEmoji(`❌`)
                .setDisabled(false)
                )

  let kazinho = new Discord.MessageEmbed()
  .setTitle(`🤗 Abraço ✨`)
  .setDescription(`💓 ${interaction.member.user} abraçou ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("#0060EE")
  .setThumbnail(interaction.member.user.displayAvatarURL({format:"png"}))
  .setFooter({ text:`🤗 Abraço`,iconURL: interaction.member.user.displayAvatarURL({format:"png"})});

  const me = await interaction.reply({embeds: [kazinho], components: [row], fetchReply: true})

const filter1 = (interaction) => {
            if(interaction.user.id == pessoa) return true; 
            else {
                interaction.reply({ content: `<a:Negado:928462860961599590> apenas o ${pessoa}  tem permissao de reagir no botão`, ephemeral: true })
            }
        }


const collector = me.createMessageComponentCollector({componentType: 'BUTTON', time: 10 * 6000, filter: filter1, max: 1 })




  collector.on('collect', async (m) => {
            
            if (!pessoa)
            return;
            if (m.customId === 'hug') {
            me.edit({
                        embeds: [

                        new Discord.MessageEmbed()
                        .setTitle(`🤗 Abraço ✨`)
                        .setDescription(`💓${pessoa} retribuiu o abraço de ${interaction.member.user}!`)
                        .setColor("#0060EE")
                        .setImage(rand1)
                        .setThumbnail(interaction.member.user.displayAvatarURL({format:"png"}))
                        .setFooter({ text: `🤗 Abraço`,iconURL: interaction.member.user.displayAvatarURL({format:"png"})})
                                                ], components: []
})
};
 if (m.customId === '002') {
     setTimeout(() => interaction.deleteReply(), 100)

};
});
        }
            }