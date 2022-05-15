const Discord = require ("discord.js")
module.exports = {
    name: 'say',
    description: 'Faça eu falar alguma coisa',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'mensagem',
            description: 'Digite as palavras que você quer que eu fale!',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction, args) => {
        let mensagem = interaction.options.getString("mensagem");
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.followUp({ content: "Você não tem permissão para usar este comando!"})
        interaction.followUp({ content: `Comando feito por: ${interaction.user.tag}\n\n${mensagem}`})
    }
}