const fs = require('fs');
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
module.exports = {
    name: 'downloadvideo',
    description: 'Fazer download de videos youtube',
    type: 'CHAT_INPUT',
    options:[
        {
            name:'link',
            description:'Coloque um link!',
            type:3,
            required:true,
        },
      {
        name:'formato',
        description:'Marque algum!',
        type:3,
        required:false,
        choices: [
          {
            name: "mp3",
            value: "mp3"
          },
          {
            name: "mp4",
            value: "mp4"
          },
        ],
      },
      {
        name:'qualidade',
        description:'Marque algum!',
        type:3,
        required:false,
        choices: [
          {
            name: "360p",
            value: "18"
          },
          {
            name: "480p",
            value: "135"
          },
          {
            name: "720p",
            value: "136"
          },
          {
            name: "1080p",
            value: "137"
          },
        ],
      }
    ],
    run: async (client, interaction, lang) =>{
   const link = interaction.options.getString('link') 
   const qualidade = interaction.options.getString('qualidade') || 135
  const formato = interaction.options.getString('formato') || "mp4"
      
let info = await ytdl.getInfo(link)

const name = info.videoDetails.title.replace(/ /g, '_');
      
let format = ytdl.chooseFormat(info.formats, { quality: qualidade });
   
const vid = ytdl(link)

const vidp = await vid.pipe(fs.createWriteStream(`./${name}.${formato}`));

      interaction.reply("calma lá meu patrão")
  setTimeout(async () =>{
   await interaction.editReply({files: [`./${name}.${formato}`]})

  }, 3000)    

    }
}