const Discord = require('discord.js'); 
const bot = new Discord.Client();
//подключаем файл конфигурации
let config = require('/botconfig.json'); 
let token = config.token; 
let prefix = config.prefix;

//создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Привет! Я ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
});
//команда, и то, что она должна выполнить
bot.on('message', msg => {
    if (msg.content === prefix + 'Пафнутий') {
        msg.reply('Внемлю твоему зову');
    }
});
bot.login(token);