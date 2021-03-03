# Discord-Tutorial-Bot
Discord Tutorial Bot

## Example Command
```js
module.exports = {
  info: {
    names: ["example", "example-2"], // Command Name(s)
    description: "Example Description", // Command Description
  },
  config: {
    enable: true, //true - false
    maintenance: false, //true - false
    permission: {
      author: [] //https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
    },
  },
  async run(client, message, args) {
    // run is command
  }
};
```
