const chalk = require("chalk");
const moment = require("moment");

exports.success = chalk.green.bold("✔") + " " + chalk.green("SUCCESS - ") + chalk.gray(moment().format("YYYY-MM-DD HH:mm:ss")) + chalk.green(" - ");
exports.info = chalk.blue.bold("ℹ") + " " + chalk.blue("  İNFO  - ") + chalk.gray(moment().format("YYYY-MM-DD HH:mm:ss")) + chalk.blue(" - ");
exports.warn = chalk.yellow.bold("⚠") + " " + chalk.yellow("  WARN  - ") + chalk.gray(moment().format("YYYY-MM-DD HH:mm:ss")) + chalk.yellow(" - ");
exports.error = chalk.red.bold("✖") + " " + chalk.red(" ERROR  - ") + chalk.gray(moment().format("YYYY-MM-DD HH:mm:ss")) + chalk.red(" - ");
