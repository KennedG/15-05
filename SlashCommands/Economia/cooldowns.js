const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "cooldowns",
    description: "「💵 Economia」」Veja seus cooldowns.",
    run: async (client, interaction, args) => {
       function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)
return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}



let save_timer_daily = db.fetch(`cristaistimer.${message.author.id}`)
let tempoMs = 3600000;
let saveDbMS = await save_timer_daily
let tempo = ms(tempoMs - (Date.now() - saveDbMS))


let save_timer_daily2 = db.fetch(`worktimer.${message.author.id}`)
let tempoMs2 = 3600000;
let saveDbMS2 = await save_timer_daily2
let tempo2 = ms(tempoMs2 - (Date.now() - saveDbMS2))


let save_timer_daily3 = db.get(`dtimer.${message.author.id}`);
let tempoMs3 = 86400000;
let tempo3 = ms(tempoMs3 - (Date.now() - save_timer_daily3))


let save_timer_daily4 = db.fetch(`loto.${message.author.id}`)
let tempoMs4 = 3600000;
let saveDbMS4 = await save_timer_daily
let tempo4 = ms(tempoMs4 - (Date.now() - saveDbMS4))


let save_timer_daily5 = db.fetch(`rob_${message.author.id}`)
let tempoMs5 = 600000;
let saveDbMS5= await save_timer_daily
let tempo5 = ms(tempoMs5 - (Date.now() - saveDbMS5))
        

    const embed = new MessageEmbed()
    .setColor(`#0060EE`)
    .setTitle(`<:bag:931934677982396446> | Cooldowns de ${message.author.username}!`)
    .setDescription(`**Work: \`${tempo2.minutes} minutos e ${tempo2.seconds} segundos\`\nCaverna: \`${tempo.minutes} minutos e ${tempo.seconds} segundos\`\nDaily: \`${tempo3.minutes} minutos e ${tempo3.seconds} segundos\`\nLotérica \`${tempo4.minutes} minutos e ${tempo4.seconds} segundos\`\nRoubo\` ${tempo5.minutes} minutos e ${tempo5.seconds} segundos\`**`)
    .setTimestamp()
    
    
    interaction.reply({embeds: [embed]})
    
    },
};
