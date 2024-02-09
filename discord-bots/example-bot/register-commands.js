require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'meow',
        description: 'reply with emoji'
    },
    {
        name: 'date',
        description: 'show date and time'
    },
    {
        name: 'calculate',
        description: 'plus calculate two number',
        options: [
            {
                name: 'first-number',
                description: 'enter first number',
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: 'second-number',
                description: 'enter second number',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'gamertoky1188-yt-channel',
        description: 'show gamertoky1188 youtube channel'
    },
    {
        name: 'owner',
        description: 'show owner role'
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('regestaring slash command...............')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        console.log('slash command registared')
    } catch (error) {
        console.log(`⚠️there was an error⚠️:⚠️${error}⚠️`);
    }
})();