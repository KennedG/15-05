const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "bug",
    description: "「👤 Utilidades」Reporte um bug!",
    options: [
        {
            type: 'STRING',
            description: 'Qual o bug?',
            name: 'bug',
            required: true,
        },
    ],

    run: async (client, interaction, args, message) => {
let user = interaction.user;
        const cc = client.channels.cache.get('910345808845611010');
        const bug =    interaction.options.getString('bug');
        const reportEmbed = new MessageEmbed()
            .setTitle('Bug Reportado!')
            .setDescription(`**Author :**\n> ${user.username} \n**BUG :**\n > ${bug}`)
            .setThumbnail(user.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("#0060EE")
        interaction.reply({ content: "Obrigado por reportar um bug!" })
        cc.send({ embeds: [reportEmbed] });
    },
};