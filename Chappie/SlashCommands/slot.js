const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`);

const slots = ['🍇', '🍊', '🍋', '🍌'];


module.exports =  {

    name: "slots",

    description: "「💰Economia」 Jogo caça-niqueis",

    type: "CHAT_INPUT",

    options: [

        {

            name: "bet",

            type: "STRING",

            description: "Valor a apostar",

            required: true

            

        }

    

    ],

    

    run: async (client, interaction, args) => {

let carteira = db.fetch(`carteira_${interaction.user.id}`)
  
  let bet = interaction.options.getString(`bet`)
if (isNaN(bet)) { interaction.reply({content: "Apenas Numeros por favor!", ephemeral: true})
  
            return;
                }

if (carteira <= "1000"){interaction.reply({content: "Calma lá você precisa ter mais de 1000 moedas para apostar", ephemeral: true})
return
};
  db.subtract(`carteira_${interaction.user.id}`, '${bet}')
    const slotOne = Math.floor(Math.random() * slots.length);
        const slotTwo = Math.floor(Math.random() * slots.length);
        const slotThree = Math.floor(Math.random() * slots.length);
  const slotFour = Math.floor(Math.random() * slots.length);
        const slotFive = Math.floor(Math.random() * slots.length);
        const slotSix = Math.floor(Math.random() * slots.length);
  const slotSeven = Math.floor(Math.random() * slots.length);
        const slotEith = Math.floor(Math.random() * slots.length);
        const slotNine = Math.floor(Math.random() * slots.length);
 let win = (slotOne === slotTwo && slotOne === slotThree ? 'GANHOU!' : 'PERDEU')

  
  let description = '\n\`\`\`------------------\`\`\`\n';
        description += `\`\`\`${slots[slotFour]} : ${slots[slotFive]} : ${slots[slotSix]}\`\`\`\n`;
        description += `\`\`\`${slots[slotOne]} : ${slots[slotTwo]} : ${slots[slotThree]}\`\`\` 
  :leavecall:\n`;
        description += `\`\`\`${slots[slotSeven]} : ${slots[slotEith]} : ${slots[slotNine]}\`\`\`\n`;
        description +=  `\`\`\`------------------\`\`\`\n`;
        description +=  `\`\`\`| : :  ${win}  : : |\`\`\``

const embed = new MessageEmbed()
        .setColor(`FF1414`)
        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true}))
        .addField("🎰", '' +  description + '')

    if (win === "GANHOU!") {
      db.add(`carteira_${interaction.user.id}`, `${bet}`)
      db.add(`carteira_${interaction.user.id}`,`${bet}`)
    }
interaction.reply({embeds: [embed]})
  
}
}