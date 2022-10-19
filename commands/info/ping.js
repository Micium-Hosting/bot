const Discord = require('discord.js')
const ptero = require('wrapdactyl');

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
