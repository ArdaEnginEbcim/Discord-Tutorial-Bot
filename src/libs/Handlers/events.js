const fs = require("fs");

module.exports = async (client) => {
  fs.readdir(process.cwd() + "/src/events/", (err, files) => {
    if (err) {
      console.log(client.log.error + err + "!");
      return;
    } else if (files.length <= 0) {
      console.log(client.log.warn + "No event!");
    } else {
      console.log(client.log.info + files.length + " events will be loaded.");
    }
    files.forEach(file => {
      if (!file.endsWith(".js")) {
        console.log(client.log.warn + "File with JS extension not found!");
      }
      const event = require(process.cwd() + "/src/events/" + file);
      const emitter =
        (typeof event.emitter === "string"
          ? client[event.emitter]
          : event.emitter) || client;
      const once = event.once;
      if (event.config.enable == false) {
        return;
      }
      try {
        emitter[once ? "once" : "on"](event.info.name, (...args) =>
          event.run(client, ...args)
        );
      } catch (error) {
        console.error(client.log.error + error + "!");
      }
      console.log(client.log.success + file.split('.')[0] + " event installed.");
    });
  });
};
