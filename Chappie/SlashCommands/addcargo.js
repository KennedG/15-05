const Discord = require('discord.js');

module.exports = {

    name:"addcargo",
    description: "「👤 Utilidades」Adicionar um cargo em um membro.",
    type:'CHAT_INPUT',
    options: [
      {
        name:"user",
        description:"Usuário que desejar adicionar o cargo.",
        type:'USER',
        required:true,
      },
      {
        name:"cargo",
        description:"Cargo que desejar adicionar no membro.",
        type:'ROLE',
        required:true,
      }
    ],
      run: async(client, interaction, args) => {


       const user = interaction.options.getUser('user')
       const role = interaction.options.getRole('cargo');

       
       if (!interaction.guild.me.permissions.has('MANAGE_ROLES')) return interaction.reply({ content: "Não tenho permissão!"})
       if(!interaction.channel.permissionsFor(interaction.member).has('MANAGE_ROLES')) return interaction.reply({ content: 'Você não tem permissão de executar este comando!',ephemeral: true})

    
     const member = interaction.options.getUser('user'); 
     
     const pedroaddcargo = new Discord.MessageEmbed()
     
     .setTitle("<:az_moderador_old:909264644168900629> | Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member}`)
     .addField(`👉 Cargo`, `${role}`)
     .setFooter({ text: client.user.username,iconURL: client.user.avatarURL()})
     .setColor("#0060EE")

     await interaction.guild.members.cache.get(user.id).roles.add(role);
   
     interaction.reply({ embeds: [pedroaddcargo] }); 

      }
};