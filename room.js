#!/usr/bin/env node
const https = require('https');
var irc = require('irc');
var _ = require("underscore");

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 2; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function numberid() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
var config = {
    botName: "FS_",
    channel1:"#zona-secreta",
    channel2:"#fobia-social"

}
var opts = {
    debug: true,
    channels: [ config.channel1, config.channel2 ],
    userName: "qqq",
    realName: "qqq"
}
var bot = new irc.Client('irc.chathispano.com', 'qqq:qqq123456', opts);
bot.addListener('error', function (message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});
bot.addListener('message#fobia-social', function (from, message) {
    console.log('<%s> %s', from, message);
    bot.say("#zona-secreta",from +': ' + message); 
});

// bot.addListener('message#zona-secreta', function (from, message) {
//     console.log('<%s> %s', from, message);
//     bot.say('#fobia-social',from +': ' + message); 
//     bot.send('MODE','#zona-secreta','-R')
// });

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);   
});
bot.addListener('pm', function (nick, message) {
    console.log('Got private message from %s: %s', nick, message);
});
bot.addListener('join', function (channel, who) {
    console.log('%s has joined %s', who, channel);
});
bot.addListener('part', function (channel, who, reason) {
    console.log('%s has left %s: %s', who, channel, reason);
});
bot.addListener('kick', function (channel, who, by, reason) {
    console.log('%s was kicked from %s by %s: %s', who, channel, by, reason);
});

