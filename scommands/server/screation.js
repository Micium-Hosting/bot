import { SlashCommandBuilder } from '@discordjs/builders';
const name = interaction.options.getString('Name') ?? 'No name provided';
const type = interaction.options.getString('Type');
const creationCommand = new SlashCommandBuilder()
  .setName('Create')
  .setDescription('Create your server!');
.addStringOption((option) =>
  option
    .setName('Type')
    .setDescription('Choose your server type.')
     .setRequired(true)
     .setChoices(
       {
         name: 'NodeJS',
        value: 'njs',
       },
       {
         name: 'Python',
        value: 'pyt',
      },
       {
         name: 'RedBot',
       value: 'rb',
       }
     )
)
.addStringOption((option) =>
   option
     .setName('Name')
     .setDescription('Name your server.')
    .setRequired(true)
 );
ptero.servers.create({
    "name": name,
    "user": 1,
    "egg": 1,
    "docker_image": "quay.io/pterodactyl/core:java",
    "startup": "java -Xms128M -Xmx128M -jar server.jar",
    "environment": {
        "BUNGEE_VERSION": "latest",
        "SERVER_JARFILE": "server.jar"
    },
    "limits": {
        "memory": 150,
        "swap": 0,
        "disk": 512,
        "io": 500,
        "cpu": 25
    },
    "feature_limits": {
        "databases": 1,
        "backups": 1
    },
    "allocation": {
        "default": 1
    }
})
export default creationCommand.toJSON();
// Command isnt finished i still need to work on it its just "prepreprepre alpha cmd"
