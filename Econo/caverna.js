

const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
const cooldowns = {}

module.exports =  {
    name: "caverna",
    description: "「💰 Economia」Encontre Cristais",
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {
       
        if(!cooldowns[interaction.user.id])cooldowns[interaction.user.id]={ lastCmd:null};let ultimoCmd=cooldowns[interaction.user.id].lastCmd;
        let timeout = ms("1 hours") // Coloque em ms o tempo hours
        if(ultimoCmd!==null&&timeout-(Date.now()-ultimoCmd)>0){let time=ms(timeout-(Date.now()-ultimoCmd));let resta=[time.seconds,'segundos'];
        if(resta[0]==0)resta=['alguns','millisegundos'];if(resta[0]==1)resta=[time.seconds,'segundo'];

        interaction.reply({ content: `Espere \`${time}\` para entrar na caverna novamente!`, ephemeral:true});return;}else{cooldowns[interaction.user.id].lastCmd=Date.now()};

        let quantia = Math.ceil(Math.random()* 20 );
        db.add(`cristais_${interaction.user.id}`, quantia);

        interaction.reply(`Você resgatou \`${quantia}\` cristais.\nUtilize o comando \`/atm\` para ver seu total de moedas e cristais.`)

        db.set(`dtimer.${interaction.user.id}`, Date.now())

    }
}
