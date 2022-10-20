const { SlashCommandBuilder } = require('discord.js');

const registerCommand = new SlashCommandBuilder()
  .setName('register')
  .setDescription('Let you create an account on the panel.');

export default registerCommand.toJSON();
