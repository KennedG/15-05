const Discord = require("discord.js");
module.exports =  {
name: "ban",
description: "Banir um membro.",
type: "CHAT_INPUT",
options: [
    {
        name: "user",
        type: "USER",
        description: "Qual user deseja banir?",
        required: true
        
        },
        {
            name: "motivo",
            type: "STRING",
            description: "Qual o motivo?",
            required: false
            
            },

],


run: async (client, interaction, args) => {
   
    let user = interaction.options.getUser("user");
    const memberTarget = interaction.guild.members.cache.get(user.id);
    let rr = interaction.options.getString("motivo");
    let rra = interaction.options.getString("motivo");
    if(rra == null) rra = `Sem motivo`;
    if(rr == null) rr = `Banido pelo dono do server!`;
    if(user.id == interaction.user.id) return interaction.reply({content: `Você não pode se banir!`});
if(user.id == interaction.guild.me.id) return interaction.reply({content: `Você não pode me banir!`});
if(user.id == interaction.guild.ownerId) return  interaction.reply({content: `Você não pode banir o dono do server!`});

if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({content: `Você não tem permissão para isso!`});
if(!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply({content: `Eu não tenho permissão para isso!`});

if(interaction.guild.ownerId) {
    interaction.reply({content: `${user} foi banido! Motivo: ` +  rr })
    
    memberTarget.ban({reason: rr || `Banido pelo dono do server!`})
   
};
interaction.reply({content: `${user} foi banido! Motivo: ` +  rra })

memberTarget.ban({reason: rra})




}
 }