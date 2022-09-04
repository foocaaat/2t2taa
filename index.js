
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const work = 1 * 60
const small = 2 * 60
const big = 15 * 60
const times = 4 * 60



const ytdl = require('ytdl-core');

client.on('message', async message => {
  if (!message.guild) return;

  var words = message.content.split(" ");
  if (words[0][0] + words[0][1] + words[0][2] + words[0][3] + words[0][4] + words[0][5] === "yamist") {
    await sleep(5000)
    message.channel.send("na3m");
    if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join();
    }


for(var i = 0; i < times; i++){
message.channel.send("el7sa bada2t");
for(var i = 0; i < work; i++){
await sleep(1000)

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
for(var i = 0; i < small; i++){i
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
for(var i = 0; i < big; i++){
await sleep(1000)
}


  }
});

function unmute(){
    const channel = message.channel
    const members = channel.members
        members.forEach(member => {
	    if (member.user.bot === false) {
            member.voice.setMute(false)
	    }
        });
}

client.login("MTAxNTk4MDQ4ODUyMDg5MjQyNg.GofrJM.jIewY76KNMIihmASzi8xVnOFNkdWLPaSrkfCIY");


