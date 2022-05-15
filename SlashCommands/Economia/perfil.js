const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Canvas = require("canvas")
const Discord = require("discord.js")
const db = require('quick.db');
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
data: new SlashCommandBuilder()
.setName(`perfil`)
.setDescription(`[💰] » Veja seu perfil`)
.addUserOption(option => option.setName('user').setDescription('Usuario')),

async execute(client, interaction, args) {

const canvas = Canvas.createCanvas(1000, 700)
const ctx = canvas.getContext("2d")

  
const user = interaction.options.getUser('user') || interaction.user

let background = db.get(`background_${user.id}`)
if(background === null || background === "off") background = "https://cdn.discordapp.com/attachments/896888643044642858/908121630994202624/fundo.png?width=765&height=535";

let badge_1 = db.get(`badge1_${user.id}`)
if(badge_1 === null) badge_1 = "https://cdn.discordapp.com/attachments/896888643044642858/908162444726263818/AGvuVRb5cjLnQjUqLzEtKA.png";

let badge_2 = db.get(`badge2_${user.id}`)
if(badge_2 === null) badge_2 = "https://cdn.discordapp.com/attachments/896888643044642858/908178538530746450/fundo-transparente-png12.png"

    const fundo = await 
    Canvas.loadImage(background)
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height)

    const badge2 = await 
    Canvas.loadImage(`${badge_2}`)
    ctx.drawImage(badge2, 235, 167, 35, 35)

    const badge1 = await 
    Canvas.loadImage(`${badge_1}`)
    ctx.drawImage(badge1, 273, 167, 35, 35)

    const layout = await 
    Canvas.loadImage("https://cdn.discordapp.com/attachments/896888643044642858/908171782006112277/perfil.png?width=765&height=535")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)

    ctx.textAlign = "left"; 
    ctx.font = '30px Impact'; 
    ctx.fillStyle = "rgb(253, 255, 252)"; 
    ctx.fillText(`${user.tag}`, 240, 152);


const avatar = user.displayAvatarURL({ format: 'jpg' }); 

ctx.beginPath();
      ctx.arc(120, 140, 90, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

const TargetAvatar = await Canvas.loadImage(`${avatar}`)
ctx.drawImage(TargetAvatar, 28, 40, 193, 193)


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "perfil.png")
        interaction.reply({content: `<:discord:907021999451275334> **- Perfil de** \`${user.tag}\``})
        interaction.channel.send({files: [attachment]})

}
}