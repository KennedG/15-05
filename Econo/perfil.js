const { Message, Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const db = require("quick.db")

module.exports =  {
    name: "perfil", 
    description: "「💰Economia」Olhe seu perfil!.", 
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {

let idade = await
db.fetch(`idade_${interaction.user.id}`)
if(idade == null) idade = `Não setado!`;
let nome = await
db.fetch(`nome_${interaction.user.id}`)
if(nome  == null) nome = `Não setado!`;
let sobre = await db.fetch(`sobre${interaction.user.id}`)
if(sobre == null) sobre = `Não setado!`;      
let img = await db.fetch(`bg.${interaction.user.id}`)
if(img == null) img = 'https://media.discordapp.net/attachments/895445212464312381/938517215051911188/Bottom-sea-animals-fish-starfish-coral-water-art-drawing_1920x1200.png?width=683&height=427';      
let gizmo = await db.fetch(`carteira_${interaction.user.id}`)
if(gizmo == null) gizmo = 0;
let bank = await db.fetch(`bank_${interaction.user.id}`)
if(bank == null) bank = 0;
let emblemas = await db.fetch(`emblemas_${interaction.user.id}`)
if(emblemas == null) emblemas = 0;
let cristais = await db.fetch(`cristais_${interaction.user.id}`)
if(cristais == null) cristais = 0;
let premium = await db.fetch(`premium_${interaction.user.id}`)
if(premium == false) premium = `Não e Premium!`;
if(premium == null) premium = `Não e Premium!`;
if(premium == true) premium = `Premium! <a:7884discordboostemoji:938556916420984963>`;


       const embed = new Discord.MessageEmbed()
   .setColor(`#0060EE`)
  .setTitle(`<:info:916909634403573801> | Perfil de ${interaction.user}`)
  .setThumbnail(`${interaction.user.displayAvatarURL({ dynamic: true })}`)
.setDescription(`
> **Básico**\n<:info:916909634403573801> **Username: \`${interaction.user.username}\`**\n<:branco_pessoaRDM:908562579117453342>**Nome \`${nome}\`**\n<:az_moderador_old:909264644168900629>**Idade: \`${idade}\`**\n<a:b_emblema:946560582931329094>**Emblemas: ${emblemas}**\n<:download:910474079931338813> **Sobre Mim: \`${sobre}\`**\n<a:Red_DinheiroCDL:949097070969630790> Premium: **${premium}**
\n> **Status** \n<:coinGizmo:940747974206713886> **Gizmo Coins: \`${gizmo}\`**\n 🏦 **Gizmo Coins no banco: \`${bank}\`**\n<:az_cristal_old:940749107377627186> **Cristais: \`${cristais}\`**\n> <:firewall:942415761857728532>  **BACKGROUND**`)
.setImage(img)


interaction.reply({embeds: [embed]})
    },
};
