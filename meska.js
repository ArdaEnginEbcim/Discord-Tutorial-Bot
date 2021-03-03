const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
client.db = require("croxydb");
client.config = require("./src/utils/config");
client.log = require("./src/utils/log");

client.login(process.env.TOKEN).then(
  function () {
    require("./src/libs/Handlers/commands")(client);
    require("./src/libs/Handlers/events")(client);
    console.log(client.log.success + "Token is working" + ".");
  },
  function (err) {
    console.log(client.log.error + err + "!");
  }
);
