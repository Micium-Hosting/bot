const Discord = require('discord.js')
const wrapdactyl = require('wrapdactyl');
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

module.exports = {
    name: "ping",
    aliases: ["latency", "pong"],
    description: "Returns the bot's ping!",
    run: async(client, message) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`${ptero.client.servers.resources('777a61a3')}`)
        .setColor('BLACK')
        message.channel.send(embed)
        message.channel.send(ptero.client.permissions())
    }
}