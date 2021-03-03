const Discord = require("discord.js");
const fs = require("fs");

module.exports = (client) => {
  client.commands = new Discord.Collection();
  fs.readdir(process.cwd() + "/src/commands/", (err, files) => {
    if (err) {
      console.log(client.log.error + err + "!");
      return;
    } else if (files.length <= 0) {
      console.log(client.log.warn + "No commands!");
    } else {
      console.log(client.log.info + files.length + " commands will be loaded.");
    }
    files.forEach((file) => {
      if (!file.endsWith(".js")) {
        console.log(client.log.warn + "File with JS extension not found!");
      }
      const command = require(process.cwd() + "/src/commands/" + file);
      if (command.config.enable == false) {
        return;
      } else {
        for (const names of command.info.names) {
          client.commands.set(names, command);
        }
        console.log(
          client.log.success + command.info.names[0] + " command installed."
        );
      }
    });
  });
};
