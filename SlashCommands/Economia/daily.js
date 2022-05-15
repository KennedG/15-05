const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "daily",
    description: "「💵 Economia」Colete seu Gizmo Coins Diário.",
    run: async (client, interaction, args) => {
       function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)
return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}

let save_timer_daily = db.fetch(`dtimer.${interaction.member.user.id}`)

let tempoMs = 86400000;
let saveDbMS = await save_timer_daily
let tempo = ms(tempoMs - (Date.now() - saveDbMS))

if(tempo.minutes > 0 || tempo.seconds > 0){
    
    
  interaction.reply({ content: `Ops ${interaction.member.user}!\nVocê só pode coletar seu daily uma vez por dia! Volte amanhã e tente novamente.`})
} else{
    
    let rand = Math.floor(Math.random() * 3000) + 100
    
    const embed = new MessageEmbed()
    .setColor(`#0060EE`)
    .setTitle(`<:coinGizmo:940747974206713886> | Presente Diário!`)
    .setDescription(`${interaction.member.user}! Você coletou seu Daily e ganhou \`${rand}\` Gizmo Coins!`)
    .setFooter({ text: `Pedido por: ${interaction.member.user.username}`,iconURL: interaction.member.user.displayAvatarURL({ dynamic: true })});
    
    
    interaction.reply({embeds: [embed]})
    
    
    
    db.set(`dtimer.${interaction.member.user.id}`, Date.now())
    
    db.add(`gizmo.${interaction.member.user.id}`, parseInt(rand))
}
    },
};
