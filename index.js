const Discord = require('discord.js');
const client =new Discord.Client();
const { token, prefix } = require('./config.json');

client.on('ready', ready => {
    console.log(' I am ready')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split( / +/);
    const command = args.shift().toLocaleLowerCase();


    if (command === 'ping') {
        message.channel.send("Pong! 🏓")
    } else if (command === 'help') {
        message.channel.send('Here are my command: $ping')
    }
})

client.login(token)
