const Discord = require('discord.js');
const client = new Discord.Client();
//подключаем файл конфигурации
let config = require('./botconfig.json');
let boss = require('./bosshelper.json');
let token = config.token;
let prefix = config.prefix;

//создаём ссылку-приглашение для бота
client.on('ready', () => {
    console.log(`Запустился бот ${client.user.username}`);
    client.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    });
});
//команда, и то, что она должна выполнить
client.on('message', msg => {
    if (msg.content === prefix + 'Пафнутий') {
        msg.reply('Внемлю твоему зову');
    }
});
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Не гневи небо');
    }
});
client.on('message', msg => {
    if (msg.content === prefix + 'босс') {
        let now = new Date(Date.now());
        let day = now.getDay();        
        let hour = now.getHours() + 1;
        if (hour == '24') { day = day + 1; hour = '0' }
        if (day == '7') { day = '0' }
        console.log(day)
        console.log(hour)
        msg.reply(`Вскоре восстанет ${boss[day][hour]}! К оружию, браться и сестры`);
    }
});

client.login(token);