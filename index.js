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
    if (msg.content.toLowerCase() === prefix + 'пафнутий приди!') {
        msg.reply('Внемлю твоему зову');
        function intervalFunc() {

            let now = new Date(Date.now());
            let day = now.getDay();
            let hour = now.getHours() + 1;
            let min = now.getMinutes() +1;
            if (hour == '24') { day = day + 1; hour = '0' }
            if (day == '7') { day = '0' }
            if (boss[day][hour] != null && min == '45') {msg.channel.send(`Вскоре восстанет ${boss[day][hour]}! Готовьтесь`);}
            if (boss[day][hour] != null && min == '55') {msg.channel.send(`Вскоре восстанет ${boss[day][hour]}! Поспешите, братья и сестры`);}
        }

        setInterval(intervalFunc, 30000);
    }
});
client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ping') {
        msg.reply('Не гневи небо');
    }
});
client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'босс') {
        let now = new Date(Date.now());
        let day = now.getDay();
        let hour = now.getHours() + 1;
        if (hour == '24') { day = day + 1; hour = '0' }
        if (day == '7') { day = '0' }
        if (boss[day][hour] != null) {msg.reply(`Вскоре восстанет ${boss[day][hour]}! К оружию, братья и сестры`);}
        else {msg.reply('В сей час не восстанет никто, мир тебе, добрая душа');}
    }
});



client.login(token);