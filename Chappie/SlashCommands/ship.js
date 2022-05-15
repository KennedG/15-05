const Discord = require("discord.js")

module.exports = {
    name: "ship",
    description: "「🤣 Diversão 」Shipar 2 pessoas",
    type:'CHAT_INPUT',
    options:[
      {
        name:'user1',
        description:'Primeira pessoa',
        type:"USER",
        required:true,

      },
      {
        name: "user2",
        description: "Segunda pessoa",
        type:"USER",
        required:true,
      }
    ],
    run: async(client, interaction, args) => {

        let membro_1 = interaction.options.getUser('user1');
        let membro_2 = interaction.options.getUser('user2');

        let gif = "https://th.bing.com/th/id/R.d2a93c241d886a9ea9800842e13b429e?rik=WNyPeJmtX7Msbw&pid=ImgRaw&r=0";

        let embed = new Discord.MessageEmbed()
        .setColor("#0060EE")
        .setAuthor({ name: `Comando de Ship`,iconURL: interaction.member.user.displayAvatarURL({dynamic:true})})
        .addFields(
            {
                name: `⁉ Como funciona?`,
                value: `\` G!ship (usuario)\` ou \`G!ship (usuario 1) (usuario 2)\``,
                inline: false
            },
            {
                name: `🤓 Explicação:`,
                value: `O bot shippará dois usuários escolhidos por você.`,
                inline: false
            }
        );

        if (!membro_1 || !membro_1 && !membro_2 || !args[0]) return interaction.reply({ content: `${interaction.member.user}`, embeds: [embed] });

        let numeracao = `${Math.ceil(Math.random()*100)}%`;

        if (membro_1 && !membro_2) {

            membro_2 = interaction.member;
            if (membro_1 === membro_2) membro_2 = interaction.member;

            let embed = new Discord.MessageEmbed()
            .setColor("#0060EE")
            .setAuthor({ name: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

interaction.reply({ content: `${interaction.member}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")

                let filtro = (e, r) => e.emoji.name === "💘" && r.id === membro_1.id;
                let coletor = msg.createReactionCollector({filter: filtro});

                coletor.on('collect', () => {

             let embed = new Discord.MessageEmbed()
            .setColor("#0060EE")
            .setAuthor({ name: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            )
            .setImage(gif);

                    msg.edit({ content: `${membro_1.tag} ${membro_2.tag}`, embeds: [embed] })
                })

            })

        }

        else

        if (membro_1 && membro_2) {

            if (membro_1 === membro_2) membro_2 = interaction.member;

            if (membro_2 === client.user || membro_1 === client.user) {

                let embed = new Discord.MessageEmbed()
            .setColor("#0060EE")
            .setAuthor({ name: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

            interaction.reply({ content: `${interaction.member}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")
            })

            }

            else

            {

            let embed = new Discord.MessageEmbed()
            .setColor("#0060EE")
            .setAuthor({ name: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

            interaction.reply({ content: `${interaction.member}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")

                let filtro = (e, r) => e.emoji.name === "💘" && r.id === membro_1.id;
                let coletor = msg.createReactionCollector({filter: filtro});

                coletor.on('collect', () => {

             let embed = new Discord.MessageEmbed()
            .setColor("#0060EE")
            .setAuthor({ name: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            )
            .setImage(gif);

                    msg.edit({ content: `${membro_1.tag} ${membro_2.tag}`, embeds: [embed] })
                })

            })

        }

        }

        
    }
    }