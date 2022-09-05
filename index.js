
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const work =  25 * 60
const small = 5 * 60
const big = 15 * 60
const times = 4
global.busy = 0



const ytdl = require('ytdl-core');

client.on('message', async message => {
  if (!message.guild) return;

  var words = message.content.split(" ");
  if (words[0][0] + words[0][1] + words[0][2] + words[0][3] + words[0][4] + words[0][5] === "yamist") {
    if (!message.member.voice.channel) {
     message.channel.send("انت فين");
    }else {
  if (global.busy === 0) {
    global.busy = 1
    await sleep(5000)
    await message.channel.send("نعم");
    if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join();
    }


// mute
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
for(var a = 0; a < times; a++){
const channel = message.channel
message.channel.send("الحصة بدأت");
// mute
    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(true)
	    }
        });
for(var b = 0; b < work; b++){
await sleep(1000)
global.left = Math.floor((work - b) / 60)

}
// mute
    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === true) {
	    if (member.user.username !== "!                      مستر تامر") {
            member.voice.setMute(true)
	    }
	    }
        });
    message.channel.send("يلا خدو فسحه");
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      await connection.play("bell.mp3");
      await sleep(29000)
    }
// unmute
    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === true) {
            member.voice.setMute(false)
	    }
        });
// unmute
    const members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(false)
	    }
        });
for(var c = 0; c < small; c++){
global.left = Math.floor((small - c) / 60)
await sleep(1000)
}
// mute
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
// unmute
    global.members = message.member.voice.channel.members
        global.members.forEach(member => {
	    if (member.user.bot === true) {
            member.voice.setMute(false)
	    }
        });
}
message.channel.send("فسحه كبييره");
for(var d = 0; d < big; d++){
await sleep(1000)
global.left = Math.floor((big - i) / 60)
}


global.busy = 0
  }else {
    message.channel.send("مش فاضى")

  }
  }
}});



client.on("message", message => {
  if(message.content === "fadl kam") {
    message.channel.send("فاضل " + global.left )
  }
})


client.login("");


