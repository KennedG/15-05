const { MessageEmbed, Formatters } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
  name: "clone",
  description: "Clonar um servidor",
  run: async (client, message, args) => {
    let bot = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()

        .setCustomId("link")
        .setLabel("Entrar no servidor!")
        .setStyle("LINK")
        .setURL("${(await guild.fetchTemplates()).map(v => v.url)}")
       )

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(` ${message.author} Você precisa da permissão para utilizar este comando!`)
        
    const guild = message.guild;
    try {
      (await guild.createTemplate(guild.name)).sync().then((t) => {
        const createTemplate = new MessageEmbed()
          .setTitle("MODELO DE SERVIDOR")
          .addField("URL", Formatters.codeBlock("fix", `${t.url}`))
          .addField("Código", Formatters.codeBlock("fix", `${t.code}`))
          .setColor("RANDOM")
        return message.reply({ embeds: [createTemplate], components: [bot] })
      })
    } catch (error) {
      const templateCreated = new MessageEmbed()
        .setTitle(`MODELO DE SERVIDOR`)
        .addField("URL", Formatters.codeBlock("fix", `${(await guild.fetchTemplates()).map(v => v.url)}`))
        .addField("Code", Formatters.codeBlock("fix", `${(await guild.fetchTemplates()).map(v => v.code)}`))
        .setColor("RANDOM")

      return message.reply({ embeds: [templateCreated], components: [bot] })
    }
  },
};