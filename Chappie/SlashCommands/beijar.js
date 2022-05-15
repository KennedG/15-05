const Discord = require('discord.js');
module.exports = {
  name: "beijar",
  description:"「🤣 Diversão 」Beijar alguém.",
  type:'CHAT_INPUT',
  options:[
    {
      name:'user',
      description:'Usuário que desejar beijar',
      type:"USER",
      required:true,
    }
  ],
  run: async(client, interaction, args) => {

var list = [
  'https://loritta.website/assets/img/actions/kiss/both/gif_283.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_321.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_male/gif_379.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_333.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_male/gif_306.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_337.gif',
  'https://loritta.website/assets/img/actions/kiss/female_x_female/gif_350.gif',
  'https://loritta.website/assets/img/actions/kiss/both/gif_287.gif',
  'https://loritta.website/assets/img/actions/kiss/male_x_female/gif_299.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = interaction.options.getUser('user');
if (!user) {
return interaction.reply({ content: 'lembre-se de mencionar um usuário válido para beijar!'});
}

let avatar = interaction.member.user.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(':kissing_heart: | Beijo')
        .setColor('#0060EE')
        .setDescription(`${interaction.member.user} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter({ text: 'Que beijão...'})
        .setAuthor({ name: interaction.member.user.tag,iconURL: avatar});
  await interaction.reply({embeds: [embed]});
  //@kettraworld
}}