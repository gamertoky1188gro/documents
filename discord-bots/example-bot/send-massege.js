require('dotenv').config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const dt = Date();

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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'owner') {
const roles = [
    {
        id: '1142865114945560617',
        label: 'owner'
    }
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1101889904121749574');

        if (!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Success)
            )
        });

        await interaction.reply({
            content: 'claim or a remove role below',
            components: [row],
        });
        
        process.exit();

    } catch (error) {
        console.log(error);
    }
});
};   
});

client.login(process.env.TOKEN)