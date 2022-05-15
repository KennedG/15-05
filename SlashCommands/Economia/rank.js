const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "rank",
    description: "「💵 Economia」Veja o rank.",
    run: async (client, interaction, args) => {

   
    let bank = db.all().filter(data => data.ID.startsWith(`banco_${message.guild.id}`)).sort((a, b) => b.data - a.data); 
    let bank1;
    
    if(bank.length > 10){
        bank1 = 10
    }else{
        bank1 = bank.length
    
    }
    let content = "";

    for (let i = 0; i < bank1; i++) {
        let user = client.users.cache.get(bank[i].ID.split('_')[2]).tag;

        content += `${i+1}º **\`${user}\`** - **R$${bank[i].data}**\n`
    }

    const embed = new Discord.MessageEmbed()
    .setTitle(`💵 **|** Rank - ${message.guild.name}`)
    .setDescription(content)
    .setColor(2686950)
    .setFooter(`Rank Monetário!`)
    .setTimestamp();

    interaction.reply({embeds: [embed]});

}   
}