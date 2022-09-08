const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


global.early =  20 * 60
global.work =  25 * 60
global.small = 5 * 60
global.big = 15 * 60
global.times = 4
global.busy = 0
global.list = []


var fs = require('fs');
var qu = fs.readFileSync('yamister.txt').toString().split("\n");
var token = fs.readFileSync('no').toString().split("\n");
qu.splice(-1)
var an = fs.readFileSync('n3m.txt').toString().split("\n");
an.splice(-1)

const ytdl = require('ytdl-core');

client.on('message', async message => {
  if (!message.guild) return;
global.message = message
  if (qu.includes(message.content)) {
    if (!message.member.voice.channel) {
     message.channel.send(an[qu.indexOf(message.content)]);
     await sleep(1000)
     message.channel.send("انت فين");
     await sleep(2000)
     message.channel.send("انا مش شايفك فى الفصل");
    }else {
  if (global.busy === 0) {
    global.busy = 1
//    await sleep(5000)
    await message.channel.send(an[qu.indexOf(message.content)]);
    if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join();
    }


global.members = message.member.voice.channel.members
async function bell(){
global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === true) {
	    if (member.user.username !== "!                      مستر تامر") {
            member.voice.setMute(true)
	    }
	    }
        });
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      await connection.play("bell.mp3");
      await sleep(29000)
    }
// mute
    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === true) {
            member.voice.setMute(false)
	    }
        });
}
await bell()
message.channel.send("الحصة هتبتدي بعد " + early / 60 + " دقيقة");
for(var e = 0; e < early ; e++){
await sleep(1000)
global.left = Math.floor((early - e) / 60)

}
for(var a = 0; a < times; a++){
await bell()
global.channel = message.channel
message.channel.send("الحصة بدأت");
// mute
for(var b = 0; b < work; b++){
await sleep(1000)
global.left = Math.floor((work - b) / 60)

    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === false) {
	    if (member.voice.serverMute === false) {
            if (!list.includes(member.user.username)) {
            member.voice.setMute(true)
            list.push(member.user.username)
	    }
	    }
	    }
        });
}
global.list = []

if (a !== times - 1){
    await bell()
    message.channel.send("يلا خدو فسحه");
// unmute
    global.members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(false)
	    }
        });
for(var c = 0; c < small; c++){
global.left = Math.floor((small - c) / 60)
await sleep(1000)
}
}
}

await bell()
    global.members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(false)
	    }
        });
message.channel.send("فسحه كبييره");
for(var d = 0; d < big; d++){
await sleep(1000)
global.left = Math.floor((big - d) / 60)
}
await bell()
global.busy = 0
message.channel.send("خلصت الحصة");
  }else {
    message.channel.send("مش فاضى")

  }
  }
}});



client.on("message", message => {
  if(message.content === "fadl kam") {
    message.channel.send("فاضل " + global.left + " دقيقة")
  }
})


client.login(token[0]);


