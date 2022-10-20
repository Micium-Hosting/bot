const {  Events, Client, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ptero = require('wrapdactyl');

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'register') {
		
		const modal = new ModalBuilder()
			.setCustomId('AR')
			.setTitle('Account Registration');

		

		
		const email = new TextInputBuilder()
			.setCustomId('email')
			.setLabel("What's your email? (please enter a valid email)")
			.setStyle(TextInputStyle.Short)
                        .setRequired(true);

		const username = new TextInputBuilder()
			.setCustomId('username')
			.setLabel("What's your username?")
			.setStyle(TextInputStyle.Short)
                        .setRequired(true);
		
    		const FirstName = new TextInputBuilder()
			.setCustomId('FirstName')
			.setLabel("What's your first name?")
			.setStyle(TextInputStyle.Short)
                        .setRequired(true);
		
		const LastName = new TextInputBuilder()
			.setCustomId('LastName')
			.setLabel("What's your last name?")
			.setStyle(TextInputStyle.Short)
                        .setRequired(true);
		
    		const password = new TextInputBuilder()
			.setCustomId('password')
			.setLabel("What's your password?")
			.setStyle(TextInputStyle.Short)
                        .setRequired(true);
		
		
		const a = new ActionRowBuilder().addComponents(email);
		const b = new ActionRowBuilder().addComponents(username);
                const c = new ActionRowBuilder().addComponents(FirstName);
                const d = new ActionRowBuilder().addComponents(LastName);
                const e = new ActionRowBuilder().addComponents(password);
		
		modal.addComponents(a, b, c, d, e);

		
		await interaction.showModal(modal);
	}
client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isModalSubmit()) return;
    const pass = interaction.fields.getTextInputValue('e')
const ln = interaction.fields.getTextInputValue('d')
const fn = interaction.fields.getTextInputValue('c')
const mail = interaction.fields.getTextInputValue('a')
const usernam = interaction.fields.getTextInputValue('b')
    ptero.users.create({
    username: usernam,
    email: mail,
    first_name: fn,
    last_name: ln,
    password: pass,
    root_admin: false
})
});
});
