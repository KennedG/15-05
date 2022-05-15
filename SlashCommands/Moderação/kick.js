const Discord = require("discord.js")
module.exports =  {
name: "kick",
description: "Expulse um membro.",
type: "CHAT_INPUT",
options: [
    {
        name: "user",
        type: "USER",
        description: "Qual user deseja kickar?",
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
    if(rr == null) rr = `Kickado pelo dono do server!`;
    if(user.id == interaction.user.id) return interaction.reply({content: `Você não pode se kickar!`});
if(user.id == interaction.guild.me.id) return interaction.reply({content: `Você não pode me kickar!`});
if(user.id == interaction.guild.ownerId) return  interaction.reply({content: `Você não pode kickar o dono do server!`});

if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({content: `Você não tem permissão para isso!`});
if(!interaction.guild.me.permissions.has("KICK_MEMBERS")) return interaction.reply({content: `Eu não tenho permissão para isso!`});

if(interaction.guild.ownerId) {

    memberTarget.kick();
    return  interaction.reply({content: `${user} foi KICKADO! Motivo: ` +  rr });
    

   
};
interaction.reply({content: `${user} foi KICKADO! Motivo: ` +  rra })

memberTarget.kick()




}
      }