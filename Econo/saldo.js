const Discord = require("discord.js")
const db = require("quick.db")

module.exports =  {
    name: "saldo",
    description: "「💰 Economia」Veja sua quantidade de moedas em sua carteira.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "usuário",
            type: "USER",
            description: "Veja a carteira de um usuário.",
            required: false 
        }
    ],
    
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser("usuário");
        if (!user) user = interaction.user;

        let carteira = await db.get(`carteira_${user.id}`)
        if (carteira === null) carteira = 0;
        let cristais = await db.get(`cristais_${user.id}`)
        if (cristais === null) cristais = 0;

        if (user.id === interaction.user.id) {
            interaction.reply(`
<:coinGizmo:940747974206713886> | Você possui \`${carteira}\` moedas em sua carteira.
<:az_cristal_old:940749107377627186> | Cristais: ${cristais}`)
                    } else {
                        interaction.reply(`
O usuário \`${user.tag}\` Possui \`${carteira}\` Moedas.
<:az_cristal_old:940749107377627186> | Cristais: \`${cristais}\`
            `)
            
        }
        
    }
}