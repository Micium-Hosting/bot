const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const ID = interaction.options.getString('ServerID');
const reason = interaction.options.getString('reason') ?? 'No reason provided';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('Suspend')
		.setDescription('Suspend somebody server')
		.addUserOption(option =>
			option
				.setName('ServerID')
				.setDescription('Put the server id of the server you want to suspend.')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for suspending'))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),
  await interaction.reply(`Suspending ${ID} for reason: ${reason}`);
};
ptero.servers.suspend(ID)
