const { Client, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ptero = require('wrapdactyl');

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'register') {
		// Create the modal
		const modal = new ModalBuilder()
			.setCustomId('AR')
			.setTitle('Account Registration');

		// Add components to modal

		// Create the text input components
		const email = new TextInputBuilder()
			.setCustomId('email')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your email? (please enter a valid email)")
		    // Short means only a single line of text
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
		// An action row only holds one text input,
		// so you need one action row per text input.
		const a = new ActionRowBuilder().addComponents(email);
		const b = new ActionRowBuilder().addComponents(username);
    const c = new ActionRowBuilder().addComponents(FirstName);
    const d = new ActionRowBuilder().addComponents(LastName);
    const e = new ActionRowBuilder().addComponents(password);
		// Add inputs to the modal
		modal.addComponents(a, b, c, d, e);

		// Show the modal to the user
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
