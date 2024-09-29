////////////////////////// CONFIG VALUES ///////////////////////////
ownid = 'PasteYourIDinHere' //<---- Your ID.

statusmode = 1 //<--- Status mode 1 is recommended.
debug = 0 //<--- Debug mode. Keep disabled unless needed.

///////////////////////// OTHER SETTINGS /////////////////////////////
known_bugs = ['The -set command only works for max 5 minutes:(', 'Sometimes the program randomly goes offline'] // Known bugs.

/////////////////////////////// CODE ////////////////////////////////
const { log, getenv } = require("@raadsel/smallify"); 
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const express = require('express');
const app = express();
const { version } = require('./package.json');

// Get status from environment variable if statusmode is 1
if (statusmode) {
  log('Loading status from secret environment...');
  statusbot = getenv("STATUS");
}

app.get('/', (req, res) => {
  res.send(`CURRENT STATUS: "${statusbot}".`);
});

app.listen(3000, () => {
  log('Web server started');
});

client.on("ready", () => {
  log(`Bot logged in as: ${client.user.tag}\n`);

  if (statusmode) {
    // Update status every 1 second
    setInterval(() => {
      client.user.setActivity(getenv("STATUS"), { type: 'WATCHING' });
      log(`Status updated to: '${getenv("STATUS")}'`);
    }, 1000); // Change status every 1 second (1000 milliseconds)
  }
});

client.login(getenv("TOKEN")).catch((err) => {
  console.warn("Invalid token. Please check the TOKEN variable.");
});
