const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "「👤 Utilidades」Pegar avatar de um usuário.",
  type:'CHAT_INPUT',
  options: [
    {
      name: "user",
      description: "Usuário que desejar pegar o avatar",
      type:"USER",
      required:false,
    }
  ],
  run: async(client, interaction, args) => {
  let user = interaction.options.getUser('user')|| interaction.member.user;
  const EMBED = new Discord.MessageEmbed()
    .setTitle(`🖼 ${user.username}`)
    .setDescription(
      `**Clique [aqui](${user.displayAvatarURL({
        dynamic: true,
        size: 4096
      })}) para baixar a imagem!**`
    )
    .setImage(
      user.displayAvatarURL({ dynamic: true, size: 4096 })
    )
    .setColor("RANDOM")

    interaction.reply({embeds: [EMBED]});
  //@kettraworld
}};