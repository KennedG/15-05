const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "banlist",
  description: "「👑 Adminstração」Ver a lista de banimentos do servidor",

  run: async (client, interaction, args) => {

    if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`Você não possui permissão de \`Administrador\`!`)
   const bybaliza = interaction.guild.bans.fetch()
   const baliza_d = (await bybaliza).map((baliza) => baliza.user.tag).join("\n") || "\`\`\`Ninguém foi banido\`\`\`"
   const bybaliza2 = new MessageEmbed()
    .setTitle(':rotating_light: | Lista de banidos')
    .setDescription(baliza_d)
    .setColor("RANDOM")
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dinamyc : true}))
    .setTimestamp(new Date())
    
    interaction.reply({embeds: [bybaliza2]})
  }
  }