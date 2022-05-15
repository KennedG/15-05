const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "rank",
    description: "「💰 Economia」Veja o rank.",
    run: async (client, interaction, args) => {

        let splita = args.join(" ").split(" ")
        let subc = splita[0]
        let bank = db.all().filter(data => data.ID.startsWith(`carteira`)).sort((a, b) => b.data - a.data);
    let bank1;
    
    if(bank.length > 10){
        bank1 = 10
    }else{
        bank1 = bank.length
    
    }
    let content = "";

    for (let i = 0; i < bank1; i++) {
        let user = client.users.cache.get(bank[i].ID.split('_')[2]).user;

        content += `${i+1}º **\`${user}\`** - **R$${bank[i].data}**\n`

    }

    const embed = new Discord.MessageEmbed()
    .setTitle(`💰 **|** Rank - ${interaction.guild.name}`)
    .setDescription(content)
    .setColor('RANDOM')
    .setFooter(`Rank Monetário! GLOBAL`)
    .setTimestamp();

    interaction.reply({embeds: [embed]});

}   
}

