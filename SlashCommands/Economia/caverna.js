const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minerar')
        .setDescription('Fique rico conseguindo minerios'),
    async execute(interaction, message) {

        function ms(ms) {
            const seconds = ~~(ms/1000)
            const minutes = ~~(seconds/60)
            const hours = ~~(minutes/60) 
            const days = ~~(hours/24)
            return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}

            let save_timer_daily = db.fetch(`minerios_${interaction.user.id}`)
        
            let tempoMs = 3600000;
            let saveDbMS = await save_timer_daily
            let tempo = ms(tempoMs - (Date.now() - saveDbMS))
            
            if(tempo.minutes > 0 || tempo.seconds > 0) {
                
                interaction.reply(`**${interaction.user.username}** você está cansado espere **${tempo.hours} ** **${tempo.minutes} minutos** e **${tempo.seconds} segundos** para minerar novamente!`)
    
            } else {
                
                let Rubis = Math.floor(Math.random() * 5300) + 800
                let Diamantes = Math.floor(Math.random() * 5300) + 800
                
                let embed1 = new MessageEmbed()
                .setColor(config.noColor)
                .setTitle(`Minérios!`)
                .setDescription(`Olá **${interaction.user.username}**, vamos ver o que temos aqui:
> <:az_cristal_old:940749107377627186>  Você conseguiu **${Diamantes.toLocaleString('pt-BR')} Cristais**`)                
                
                interaction.reply({embeds: [embed1]})
                
                db.set(`minerios_${interaction.user.id}`, Date.now())
                db.add(`cristais_${interaction.user.id}`, parseInt(Diamantes))
            }

    }
}