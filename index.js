
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const work = 1 * 60
const small = 1 * 60
const big = 15 * 60
const times = 4



const ytdl = require('ytdl-core');

client.on('message', async message => {
  if (!message.guild) return;

  var words = message.content.split(" ");
  if (words[0][0] + words[0][1] + words[0][2] + words[0][3] + words[0][4] + words[0][5] === "yamist") {
    await sleep(5000)
    await message.channel.send("na3m");
    if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join();
    }


    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      await connection.play("bell.mp3");
      await sleep(29000)
    }
for(var a = 0; a < times; a++){
message.channel.send("el7sa bada2t");
for(var b = 0; b < work; b++){
await sleep(1000)
global.left = Math.floor((work - b) / 60)
// mute
    const channel = message.channel
    const members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(true)
	    }
        });

}
// unmute
    const channel = message.channel
    const members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(false)
	    }
        });
    message.channel.send("yala break");
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      await connection.play("bell.mp3");
      await sleep(29000)
    }
for(var c = 0; c < small; c++){
global.left = Math.floor((small - c) / 60)
await sleep(1000)
}
    message.channel.send("5ls elbreak");
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      await connection.play("bell.mp3");
      await sleep(29000)
    }
}
message.channel.send("break kbeer");
for(var d = 0; d < big; d++){
await sleep(1000)
global.left = Math.floor((big - i) / 60)
}


  }
});



client.on("message", message => {
  if(message.content === "fadl kam") {
    message.channel.send("fadl " + global.left )
  }
})


client.login("MTAxNTk4MDQ4ODUyMDg5MjQyNg.GnX5ZT.h-HkqtXPgQxLf_Gu7mx4C2mLugUqVouplN05mg");


