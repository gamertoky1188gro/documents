require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`the bot is ready🙂🙂🙂${c.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    console.log(message.content);
    console.log(message.author);
    if (message.content === 'hallo') {
        message.reply(`hi! @${message.author.username}`)
    };
});

client.login(process.env.TOKEN)