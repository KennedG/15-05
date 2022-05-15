const ms = require("ms");
const Discord = require("discord.js"); 
module.exports =  {
    name: "castigo",
    description: "「👑 Adminstração」Dê o castigo para um membro.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "membro",
            type: "USER",
            description: "Mencione um usuário para ser punido.",
            required: true
            
        },
        {
            name: "tempo",
            type: "STRING",
            description: "Coloque o tempo de duração do castigo.",
            required: true
            
        },
        {
            name: "motivo",
            type: "STRING",
            description: "Coloque o motivo do castigo.",
            required: true
            
        }
    
    ],
    
    run: async (client, interaction, args) => {

        if (!interaction.member.permissions.has("MODERATE_MEMBERS")) {
            interaction.reply({ embeds: [
                new Discord.MessageEmbed()
                .setDescription(`Você não tem permissão para utilizar este comando!`)
                .setColor('RANDOM')
            ], ephemeral: true })
        } else {

        let usuario = interaction.options.getUser("membro");
        let server = interaction.guild.name;
        let membro = interaction.guild.members.cache.get(usuario.id);
        let tempo = interaction.options.getString("tempo");
        let motivo = interaction.options.getString("motivo");

        let duracao = ms(tempo);
        let embed_4 = new Discord.MessageEmbed()
        .setColor('#b71fc9')
        .setDescription(`**\`${membro.user.tag}\` você foi mutado em \`${server}\` por \`${tempo}\` motivo \`\`${motivo}\`\`.**`)
        if (!membro) {
            interaction.reply({ content: `O usuário não está no servidor.` })
        } else if (!duracao) {
            interaction.reply({ content: `Insira um tempo válido.` })
        } else {
            membro.timeout(duracao, motivo).then( () => {
                membro.send({embeds : [embed_4]}).catch(err => console.log(`\n${membro.user.tag} DM block`));
                interaction.reply({ content: `O membro \`${membro.user.tag}\` foi punido por \`${tempo}\`, pelo motivo \`${motivo}\`.`, ephemeral: false })
            })
        }

    }

    }
}