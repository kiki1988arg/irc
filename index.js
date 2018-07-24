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
    target: "Hario",  
    message: "RESPETAD ESPAÑOL"
    
}

var opts = {
    debug: true,
    channels: [''],  
    userName: config.botName,
    realName: config.botName

}


var MyVar = setInterval(spam, 3000);


 function spam() {  
    var bot = new irc.Client('irc.chathispano.com', config.botName+numberid(),opts);


    bot.addListener('error', function (message) {
        console.error('ERROR: %s: %s', message.command, message.args.join(' '));
    }); 
    setTimeout(function(){          
        bot.say(config.target, config.message);
        bot.send('notice',config.target, config.message);  
        bot.action(config.target,  config.message);
        bot.ctcp(config.target,  'ping')
        bot.send('nick','MutualHelp'+makeid());  
    },1000);
    setTimeout(function(){
        bot.disconnect();
    },2000);
}



