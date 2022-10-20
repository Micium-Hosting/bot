const { Client, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client()
const yaml = require('js-yaml')
const chalk = require('chalk')
const config = yaml.load(fs.readFileSync('./config.yml', 'utf8'))
client.config = config
client.config = config;
client.commands = new Collection(); 
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
const wrapdactyl = require('wrapdactyl');

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
        const event = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, event.bind(null, client))
    })
})

const ptero = new wrapdactyl({
    url: 'https://dash.micium.cloud',    // Panel url
    client: 'ptlc_dZD0cu2I6CG3l9GiQDCU7RYVSLVxKeTJAnmZoc0ArlN',                 // Client api key
    application: 'ptla_FKSmXiJI7SfFp4YBgx46MSXSm4of5z4f7Elgxw49qRo',            // Application api key
    options: {                      // Options to optimise the performance
        cache: true,                // Enable or disable cache
        events: true,               // Enable of disable events
        checkInterval: 5000,        // An interval which checks the status of tokens and panel
        updateCacheInterval: 30000  // An interval which updates cache in case you have it enabled
    }
})

ptero.check().then(data => {
    console.log('pterodactyl wrapper is ready');
    console.log(data)
})

const prefix = "mh!"

client.on('message', async message => {

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
    return message.channel.send(`Hii! <@${message.author.id}>, My prefix is \`${prefix}\``);
 }
    if(message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args)
  })

if (config.token === 'BOT TOKEN') console.log(chalk.blue('[Micium System] ') + chalk.red('Invalid Token, Check ') + chalk.green('config.yml') + chalk.red(' file to change token'))
client.login(config.token)
console.log(chalk.black('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
console.log(chalk.red('Name: ') + chalk.cyan('Micium'))
console.log(chalk.red('Version: ') + chalk.cyan('v1.0'))
console.log(chalk.red('Bot Status: ') + chalk.cyan('Operational'))
console.log(chalk.black('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))

// Modals
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
//Slash cmd "handler" (for testing purposes)
async function main() {
  const commands = [
    RegisterCommand,
  ];
  try {
    console.log(chalk.black('Started refreshing application (/) commands.`));
    await rest.put(Routes.applicationGuildCommands('809445390155120670', '881122521263534111'), {
      body: commands,
    });
