//npm i axios

const Discord = require("discord.js");
const axios = require('axios');


module.exports =  {
    name: "banner",
    description: "「👤 Utilidades」Ver o banner de um usuario",
    type: "CHAT_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "mencione um usuario",
            required: false
            
       }
    
    ],
    
    run: async (client, interaction, args) => {

    
        let user = interaction.options.getUser("user") || interaction.user


axios
    .get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`,
    },
})
.then((res) => {
    const { banner } = res.data;

    if(banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=4096' : '.png?size=4096'; 
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

        let embed = new Discord.MessageEmbed()
        .setTitle(`Banner de ${user.username}`)
        .setImage(`${url}`)
        .setColor("RANDOM")
        .setFooter(`• Autor: ${interaction.user.tag}`, interaction.user.displayAvatarURL({format: "png"}))
        .setTimestamp()

        const button = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()

         .setStyle('LINK')
         .setEmoji('<:pasta_azul:910474183543246848>')
         .setLabel('Abrir no navegador')
         .setURL(`${url}`)
 )
 
 interaction.reply({embeds: [embed], components: [button]})
        }else {
            interaction.reply(`Este usuário não possui um banner!`, {ephemeral: true})
        }
      }) 
    }
    }
