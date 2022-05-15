const Discord = require('discord.js');

module.exports = {

    name: 'gay',
    description: '「🤣 Diversão 」Mostra se você ou alguém que você mencionar e um gay ou não.',
    type:'CHAT_INPUT',
    options:[
      {
        name:'user',
        description: "Usuário que desejar ver ser é gay!",
        type:"USER",
        required:false,
      }
    ],
    run: async (client, interaction, args) => {

    let gay = Math.round(Math.random() * 100)
        let pessoa = interaction.options.getUser('user') || interaction.member.user;
        if(!pessoa) return message.channel.send(`❌| ${message.author}, Mencione uma pessoa para ver se ele é`)

        let frase
    if(gay > 80) {
      gay = ("é 80% gay...");
    } else if(gay>= 40) {
      gay = ("é 40% gay"); 
    } else if(gay>= 10){
      gay = ("é 10% gay")
    } else {
      gay = ("É 100% gay!");
    }
      if(gay > 20) {
      gay = ("é 20% gay");
    } else if(gay>= 50) {
      gay = ("é 50% gay..."); 
    } else if(gay>= 30){
      gay = ("é 30% gay")
    } 
    let embedin = new Discord.MessageEmbed()
    .setTitle("Então ele(a) é?")
    .setDescription(`🏳️‍🌈 ${pessoa} ${gay}!`)
    .setFooter({ text: `Comando usado por ${interaction.member.user.tag}`})
.setColor("#0060EE")
    .setThumbnail("https://c.tenor.com/kh_F1WNQ1oUAAAAC/buzz-lightyear-ent%C3%A3o-ele%C3%A9.gif")

    
    interaction.reply({embeds: [embedin]});


}
}