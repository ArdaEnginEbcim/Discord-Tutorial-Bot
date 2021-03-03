module.exports = {
  info: {
    name: "message", // Event Name
  },
  config: {
    enable: true, //true - false
  },
  once: false, //true -false
  async run(client, message) {
  let prefix = process.env.PREFIX
    if (!message.guild) {
      return;
    } else {
      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(" ")
        .slice(1);
      const command = client.commands.get(
        message.content.slice(prefix.length).trim().split(" ")[0]
      );

      if (message.author.bot) {
        return;
      } else if (!message.content.startsWith(prefix)) {
        return;
      } else if (command) {
        if (
          client.db.has("maintenance") ||
          command.config.maintenance == true
        ) {
          return;
        } else if (
          !message.member.hasPermission(command.config.permission.author)
        ) {
          return;
        }
        command.run(client, message, args);
      }
    }
  },
};
