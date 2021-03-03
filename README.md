# Discord-Tutorial-Bot
[![meska](https://github-readme-stats.vercel.app/api/pin/?username=ArdaEnginEbcim&repo=Discord-Tutorial-Bot&theme=dark)](https://github.com/ArdaEnginEbcim/Discord-Tutorial-Bot)

## Requirements
- Discord Bot Token [Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

## 🚀 Getting Started
```
git clone https://github.com/ArdaEnginEbcim/Discord-Tutorial-Bot.git
cd Discord-Tutorial-Bot
npm install
```
- Run `start.bat`

## ⚙️ Configuration
- Copy or Rename .env.example to .env and fill out the values:
```env
PREFIX=
AUTHOR_ID=
CLIENT_ID=
TOKEN=
```

## Example Command (`./src/commands/command-name.js`)
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

## Example Event (`./src/events/event-name.js`)
```js
module.exports = {
  info: {
    name: "message", // Event Name (message, ready, guildMemberAdd etc.)
  },
  config: {
    enable: true, // true - false
  },
  once: false, // true - false
  async run(client, message) {
    // Run Event
  }
};
```

## 🤝 Contributing
- [Fork the repository](https://github.com/ArdaEnginEbcim/Discord-Tutorial-Bot/fork)
- Clone your fork: git clone https://github.com/your-username/Discord-Tutorial-Bot.git
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Glitch Remix
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/ArdaEnginEbcim/Discord-Tutorial-Bot)

## Replit
[Remix on Replit](https://repl.it/github/ArdaEnginEbcim/Discord-Tutorial-Bot)

## 💸 Donation 
- Papara: 1848656156
- TR IBAN: TR82 0006 4000 0013 2040 0585 91

## 📝 Contact 
- Discord: ⚶ Meska 🍁#0001 (`324146816322895873`)
- Mail: developer.meska@gmail.com

## License

- This repo is under the Apache-2.0 License.
See [LICENSE](https://github.com/ArdaEnginEbcim/Discord-Tutorial-Bot/blob/master/LICENSE) File.
