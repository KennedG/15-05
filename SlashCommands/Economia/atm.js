const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
  name: "atm",
  description: "「💵」Mostra a carteira de alguém!",
  type:'CHAT_INPUT',
  options: [
    {
      name:'user',
      description: 'User que desejar ver o saldo',
      type:"USER",
      required:false,
    }
  ],
  run: async (bot, interaction, args) => {

      let user = interaction.options.getUser('user') || interaction.member.user;

    let gizmo = db.fetch(`gizmo.${user.id}`)
    if(gizmo === null) gizmo = 0;
  
    let bank = db.fetch(`bank_${user.id}`)
    if(bank === null) bank = 0;

    
    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`<:coinGizmo:940747974206713886> | Saldo de: ${membro.displayName}`) 
    .setDescription(`<:coinGizmo:940747974206713886> | Gizmo Coins na Carteira: ${gizmo}\n<a:ccclonadl:861996907655331921> | Gizmo Coins no Banco: ${bank}\n<:az_cristal_old:940749107377627186> | Cristais: ${cristais}`)
    .setFooter({ text: "Informações da carteira!"})
    .setTimestamp()
     
    interaction.reply({embeds: [embed]})
  }}