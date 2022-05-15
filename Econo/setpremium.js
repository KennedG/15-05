const Discord = require("discord.js")
const db = require("quick.db")
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports =  {
    name: "premium", 
    description: "「🚩 Dono」Adicione um usuário premium!", 
    type: "CHAT_INPUT",
    options: [
        {
          name: "user",
          description: "Usuário que desejar adicionar o premium!💎",
          type:"USER",
          required:false,
        }
      ],
    
    run: async (client, interaction, args) => {

        let seu_id = "493282797222494230"

        if (interaction.member.id !== seu_id) {
            interaction.reply(`Apenas meu dono pode utilizar este comando. <@493282797222494230>`)
        } else {

            let user = interaction.options.getUser('user')|| interaction.member.user;

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`/setpremium [usuário]\``);

                interaction.reply({ embeds: [embed] })

            } else {

                interaction.reply(`O usuário ${user} (\`${user.tag}\`) foi adicionado à minha lista de premiums.`);
                db.set(`premium_${interaction.user.id}`, true)
            }
        }
        
    }
}