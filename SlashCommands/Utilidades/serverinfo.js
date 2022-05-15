const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "serverinfo",
    description: "Informações do servidor.",
    run: async (client, interaction) => {
        let lvlVerify = {
            "NONE": 'Nenhum',
            "LOW": 'Baixo',
            "MEDIUM": 'Mediano',
            "HIGH": 'Alto',
            "VERY HIGH": 'Máximo'
        }
        let msgMember = message.member;
        let server = message.guild;
    
        let barra = server.premiumProgressBarEnabled;
        function progressBar() {
            if (barra == true) {
                return 'Habilidada'
            } else {
                return 'Desabilidada'
            }
        }
        function meta() {
            let quantia = server.premiumSubscriptionCount
            if (quantia < 2) {
                return 'Nível 1'
            } else if (quantia > 2 && quantia < 6) {
                return 'Nível 2'
            } else {
                return 'Nível 3'
            }
        }
    
        const embedServer = new MessageEmbed()
        .setColor(msgMember.displayHexColor)
        .setTitle(server.name)
        .setThumbnail(server.iconURL({ dynamic: true}))
        .setFooter({text: `Criado em: ${moment(server.createdAt).format('LL')}`})
        .setImage(`https://cdn.discordapp.com/banners/${server.id}/${server.splash}.png?size=256`)
        .setFields(
            {
                name: ':id: ID do servidor:',
                value: `\`${server.id}\``,
                inline: true
            },
            {
                name: ':crown: Dono (a):',
                value: `<@!${server.ownerId}>`,
                inline: true
            },
            {
                name: ':busts_in_silhouette: Membros:',
                value: `Total: **${server.memberCount}**
                Usuários: **${server.members.cache.filter(member => !member.user.bot).size}**
                Bots: **${server.members.cache.filter(b => b.user.bot).size}**`,
                inline: true
            },
            {
                name: ':rocket: Info de impulsos:',
                value: `Impulsos totais: **${server.premiumSubscriptionCount}**
                Barra de progresso: **${progressBar()}**
                Meta: **${meta()}**`,
                inline: true
            },
            {
                name: ':card_index: Canais:',
                value: `Total: **${server.channels.cache.size}**
                De texto: **${server.channels.cache.filter((x) => x.type == "GUILD_TEXT").size}**
                De voz: **${server.channels.cache.filter((x) => x.type == "GUILD_VOICE").size}**`,
                inline: true
            },
            {
                name: ':package: Cargos e emojis:',
                value: `Total de cargos: **${server.roles.cache.size}**
                Total de emojis: **${server.emojis.cache.size}**`,
                inline: true
            },
            {
                name: ':police_officer: Nível de verificação:',
                value: `**${lvlVerify[server.verificationLevel]}**`,
                inline: true
            }
        )
    
        message.reply({embeds: [embedServer]})

   }
} 

