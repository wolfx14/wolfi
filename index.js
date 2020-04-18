const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAwNDM2OTQ5NDI4NzMxOTI0.XpoRQw.3kxLw_YhWLbq47EtKS8hdQUy25A';

const PREFIX = '!';

var Version = '1.0.1';

bot.on('ready', () =>{
    console.log('this bot is online');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('player name', message.author.username, true)
            .addField('Version', Version, true)
            .addField('Current Server', message.guild.name, true)
            .setColor(0xffd05c)
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed);
        break;
    }
})

bot.login(process.env.token);