const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });




client.on('message', message => {
  if (message.content === 'are you here') {
    message.channel.send("nyan");

  }
});

client.login(process.env.token);
