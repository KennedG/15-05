const db = require("quick.db")

module.exports =  {
    name: "pay",
    description: "Pague uma quantia de moedas para um usuário.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "usuário",
            type: "USER",
            description: "Mencione um usuário para pagar.",
            required: true
        },
        {
            name: "quantia",
            type: "NUMBER",
            description: "Coloque uma quantia para pagar.",
            required: true
        }
    
    ],
    
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser("usuário");
        let quantia = interaction.options.getNumber("quantia");
        let carteira = db.get(`carteira_${interaction.user.id}`);
        if (carteira === null) carteira = 0;

        if (quantia > carteira) {
            interaction.reply(`Você não possui \`${quantia}\` moedas, possui apenas \`${carteira}\` moedas.`);
        } else {
            db.add(`carteira_${user.id}`, quantia)
            db.subtract(`carteira_${interaction.user.id}`, quantia)

            interaction.reply(`Você enviou \`${quantia}\` moedas para ${user} com sucesso.`)
        }
        
    }
}