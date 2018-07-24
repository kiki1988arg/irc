// var net  = require('net');


// var connectionOpts = {"host":"irc.chathispano.com","port":6667}

// while(2>1){
//      net.createConnection(connectionOpts);
//     }


// #!/usr/bin/env node
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
    target: "gatoloco"
}

var opts = {
    debug: true,
    channels: [''],  
    userName: 'Solitude',
    realName: 'Solitude',
    channels: ['#fobia-social']    
}
var bot = new irc.Client('irc.chathispano.com', 'Solitude',opts);   


    bot.addListener('error', function (message) {
        console.error('ERROR: %s: %s', message.command, message.args.join(' '));
    }); 
    bot.addListener('pm', function(nick, message) {
        console.log('Got private message from %s: %s', nick, message);
    });
    bot.addListener('message', function(from, to, message) {
    
            // private message
            console.log('private message');
          
            bot.say('#zona-secreta','jejeje');
      
    });
    bot.addListener('message#blah', function(from, message) {
        console.log('<%s> %s', from, message);
    });
    bot.addListener('pm', function(nick, message) {
        console.log('Got private message from %s: %s', nick, message);
    });
    bot.addListener('join', function(channel, who) {
        console.log('%s has joined %s', who, channel);
    });
    bot.addListener('part', function(channel, who, reason) {
        console.log('%s has left %s: %s', who, channel, reason);
    });
    bot.addListener('kick', function(channel, who, by, reason) {
        console.log('%s was kicked from %s by %s: %s', who, channel, by, reason);
    });

    // setTimeout(connect,10000);
    // function connect(){
    //    while (2>1) { 
    //         bot.send('ctcp','Jeymmmer', 'userinfo');
    //         bot.ctcp('Jeymmmer', 'userinfo');
    //     }
    // }



