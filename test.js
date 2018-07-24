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
var config = {
    botName: "TrollEresTu",
    target: "#zona-secreta",
    
    
}


var MyVar = setInterval(spam, 3000);

 function spam() {  
    var bot = new irc.Client('irc.chathispano.com', config.bot+makeid(), {
        debug: true,
        channels: [config.target]
    });

    bot.addListener('error', function (message) {
        console.error('ERROR: %s: %s', message.command, message.args.join(' '));
    }); 
    setTimeout(function(){      
        // bot.send('nick','MutualHelp'+makeid());        
        bot.say(config.target, 'Te has portado mal, recibid ayuda mutua');
        bot.send('notice',config.target,'https://tinychat.com/room/asdfasdf');          
        bot.send('nick','MutualHelp'+makeid());  
    },2000);
    setTimeout(function(){
        bot.disconnect();
    },2900);
}



