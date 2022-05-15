const { MessageEmbed } = require('discord.js');
const ms = require('ms');


module.exports = {
    name: "slow-mode",
    description: "「👑 Adminstração」Define um Slow para o canal",
    type: "CHAT_INPUT",
    options: [
        {
            name: "tempo",
            type: "STRING",
            description: "Qual tempo deseja setar?",
            required: true
            
            },
           
    
    ],
    run: async (client, interaction, args) => {
        if (!interaction.guild) return interaction.reply({ content: "Esse comando deve ser usado somente em um server" })
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) returninteraction.followUp('Você não tem permissÃo para usar este comando.').then(m => m.delete({ timeout: 5000 }));

       let string = interaction.options.getString('tempo');

        const currentCooldown = interaction.channel.rateLimitPerUser;


           



        const time = ms(string) / 1000;


        if(string < 1000) {

            const embed = new MessageEmbed()
            .setTitle('SlowMode desativado!!')
            
      
                .addField('Deseja ativar?',"/slow-mode <tempo em milisegundos>", true)
        
                .setColor(config.embed)
    
    return interaction.channel.setRateLimitPerUser(time).then(msg =>{
               interaction.reply({embeds: [embed]});
            });
        };

        if (isNaN(time)) return interaction.reply({content: 'Tempo invalido!'})

        if (time >= 21600) return interaction.reply({content: 'Esse limite de modo lento é muito alto!\N\N Limite: 6 horas'} )

        if (currentCooldown === time) return interaction.reply(`Slowmode já está definido para ${string}`);
        const embed = new MessageEmbed()
        .setTitle('SlowMode ativo!!')
        

            .addField('Slowmode: ', `\`\`\`${string}ms\`\`\``, true)
    
            .setColor(`2F3136`)

        interaction.channel.setRateLimitPerUser(time).then(msg =>{
            interaction.reply({embeds: [embed]})
        })
      


    }
}