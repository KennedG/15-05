const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "「👤 Utilidades」Veja minha velocidade!",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        interaction.reply({ content: `🏓︱Pong! Meu ping esta em ${client.ws.ping}ms!` });
    },
};