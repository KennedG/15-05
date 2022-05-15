const Discord = require("discord.js")

module.exports={
name:'botinfo',
description: 'Mostra as minhas informações',
run: async (client, message,interaction) => {
            

    let EMBED = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL({dynamic: false}))
    .setAuthor('Prazer, sou o Gizmo e aqui está minhas informações')
    .setDescription(`
    <:coroa:910509283010031646>**|Dono**/[! Kenned#0001](https://github.com/KennedG)
   
    <:info:916909634403573801>** | Infomações gerais**
    > Usuários: **${client.users.cache.size}**
    > Servidores: **${client.guilds.cache.size} **
    > Canais: **${client.channels.cache.size}**
    > Fui criado há: **26/02/2021**


    <:engrenagem:916913635169816597> **|Informações técnicas**
    > Total CPU usando usada: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}%**
    > Total de Memória sendo Usada: ** ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB**
    > Versão do Node: **${process.version}**
    > Versão do discord.js: **${Discord.version}**
    

    <:download:910474079931338813> ** | Hospedagem**
    > Host: **[Replit](https://replit.com/~)**
    > Ping: **${Math.round(client.ws.ping)}**
    
    <:dcl_ypSino:914350019182723122> **| Meus links**
    > <a:sintonia_emoji239:909266143204741181> [Website](https://sites.google.com/view/botgizmo)
    > <:badgePartner:909263598788968478> [Link Do Meu Servidor](https://discord.gg/Vk8sEtb4n5)
    > <:online:909288899862478878> [Meu convite](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)`)
    .setColor('YELLOW')
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))

    message.reply({embeds: [EMBED]});
    }}