const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const ID = interaction.options.getString('ServerID');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('Unsuspend')
		.setDescription('Unsuspend somebody server')
		.addUserOption(option =>
			option
				.setName('ServerID')
				.setDescription('Put the server id of the server you want to unsuspend.')
				.setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),
  await interaction.reply(`Unsuspended ${ID}`);
};
ptero.servers.unsuspend(ID)
