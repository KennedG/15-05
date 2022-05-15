const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Avatar do usuário mencionado ou do seu próprio avatar.',
    type: 1,
          options: [
            {
            name: 'user',
            type: 6,
            description: 'Selecione um usuário para pegar o avatar.',
            required: false
            },
        {
            name: 'tipo',
            type: 3,
            description: 'Selecione um avatar para pegar do usuário.',
            required: false,
            choices: [
        { name: "avatar original", value: "avatar1"},
        { name: "avatar do servidor", value: "avatar2"},
      ],
        },
    ],
    run: async (client, interaction) => {

     const tipo = interaction.options.getString("tipo")
     const user = interaction.options.getUser("user") || interaction.user

        if (!tipo || tipo === "avatar1") {

const avatar = user.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 });
          
const embedAvatar = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`🖼 ${user.username}`)
    .setDescription("Clique no botão para baixar a imagen!")
    .setImage(avatar)

const butao = new MessageActionRow()
  .addComponents( 
  new MessageButton()
      .setEmoji('🔗')
      .setLabel('Baixar1')
      .setURL(`${avatar}`)
      .setStyle('LINK')
          );
        interaction.reply({ embeds: [embedAvatar], components: [butao]});
      }

      if (tipo === "avatar2") {

const avatar = interaction.guild.members.cache.get(user.id).displayAvatarURL({ dynamic: true, format: 'png', size: 4096 });

const embedAvatar = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`🖼 ${user.username}`)
     .setDescription("Clique no botão para baixar a imagen!")
    .setImage(avatar)
  
  const butao = new MessageActionRow()
    .addComponents(
    new MessageButton()
        .setEmoji('🔗')
        .setLabel('Baixar2')
        .setURL(`${avatar}`)
        .setStyle('LINK')
            );
        
        interaction.reply({ embeds: [embedAvatar], components: [butao] });
      }
        
    }
}