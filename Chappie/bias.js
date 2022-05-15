const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 try {
 let name = ('𝐛𝐢𝐚');

 let avatar = {avatar: 'https://cdn.discordapp.com/avatars/925442627501948928/595af3234abbc928f631086f081c4663.webp?size=1024'}


 let respostas = [
'Kenned e meu dono!',
'Au au kenned.',
'Sou cadela do Kenned.',


  

];
let arg = respostas[Math.floor(Math.random() * respostas.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Cadê minha permissão pra criar webhooks?**')
 }


}