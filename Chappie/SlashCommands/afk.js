const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "afk", // Coloque o nome do comando do arquivo
    description: '「👤 Utilidades」Ativar o modo afk', // Coloque sinônimos aqui
    type:'CHAT_INPUT',
    options: [
      {
        name:'motivo',
        description:'Motivo por que você esta AFK.',
        type:"STRING",
        required:false,
      }
      ],
    run: async(client, interaction, args) => {
        let user = interaction.member.user
        let motivo = interaction.options.getString('motivo') || "Sem motivo";
        interaction.reply({ content: `O modo afk foi ativado com sucesso: \`${motivo}\``})
          .then(msg => {
            db.set(`afk_${user.id}`, true);
            db.set(`motivo_afk_${user.id}`, motivo)
            db.set(`verificando_afk_${user.id}`, user.id)
        })          
    }
}