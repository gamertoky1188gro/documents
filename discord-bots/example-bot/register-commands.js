require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const { commands } = require('./commands');

const command1 = [
    {
        "name": "calculate",
        "description": "plus calculate two number",
        "options": [
            {
                "name": "first-number",
                "description": "enter first number",
                "type": ApplicationCommandOptionType.Number,
                "required": true
            },
            {
                "name": "second-number",
                "description": "enter second number",
                "type": ApplicationCommandOptionType.Number,
                "required": true
            }
        ]
    },
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('regestaring slash command...............');
        const allCommands = [...commands, ...command1]
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: allCommands }
        )
        console.log('slash command registared')
    } catch (error) {
        console.log(`⚠️there was an error⚠️:⚠️${error}⚠️`);
    }
})();