const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
const cooldowns = {}

module.exports =  {
    name: "daily",
    description: "「💰 Economia」Resgate seu dinheiro diário.",
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {
        function ms(ms) {
            const seconds = ~~(ms/1000)
            const minutes = ~~(seconds/60)
            const hours = ~~(minutes/60) 
            const days = ~~(hours/24)
            return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}
            
            
            let save_timer_daily = db.fetch(`dtimer.${interaction.user.id}`)
            
            let tempoMs = 86400000;
            let saveDbMS = await save_timer_daily
            let tempo = ms(tempoMs - (Date.now() - saveDbMS))
            if(tempo.minutes > 0 || tempo.seconds > 0){
            

        if(!cooldowns[interaction.user.id])cooldowns[interaction.user.id]={ lastCmd:null};let ultimoCmd=cooldowns[interaction.user.id].lastCmd;
        let timeout = ms("1 day") // Coloque em ms o tempo
        if(ultimoCmd!==null&&timeout-(Date.now()-ultimoCmd)>0){let time=ms(timeout-(Date.now()-ultimoCmd));let resta=[time.seconds,'segundos'];
        if(resta[0]==0)resta=['alguns','millisegundos'];if(resta[0]==1)resta=[time.seconds,'segundo'];

        interaction.reply({ content: `Espere \`${time}\` para poder resgatar seu daily novamente!`, ephemeral:true});return;}else{cooldowns[interaction.user.id].lastCmd=Date.now()};

        let quantia = Math.ceil(Math.random()* 5000 );
        db.add(`carteira_${interaction.user.id}`, quantia);

        interaction.reply(`Você resgatou \`${quantia}\` moedas em seu dinheiro diário.\nUtilize o comando \`/carteira\` para ver seu total de moedas.`)

        db.set(`dtimer.${interaction.user.id}`, Date.now())

    }
}
}