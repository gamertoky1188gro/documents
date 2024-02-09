require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
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
    client.user.setActivity({
        name: 'checking-discord-server',
        type: ActivityType.Competing,
        status: 'idle'
    })
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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    console.log(interaction.commandName);
    
    if (interaction.commandName === 'meow') {
        interaction.reply('😻🐾🐱🐆🐈🧶😸')
    };

    if (interaction.commandName === 'date') {
        interaction.reply(dt)
    };

    if (interaction.commandName === 'calculate') {
        const num1 = interaction.options.get('first-number').value
        const num2 = interaction.options.get('second-number').value

        interaction.reply(`your ans: ${num1 + num2}`)

        function numbers(firstNumber, secondNumber) {
            this.firstNumber = firstNumber;
            this.secondNumber = secondNumber;
        }
        const fsnn = new numbers(num1, num2)
        console.table(fsnn)
    };
    if (interaction.commandName === 'gamertoky1188-yt-channel') {
        const embed = new EmbedBuilder()
        .setColor('Random')
	    .setTitle('gamertoky1188 youtube channel')
	    .setURL('https://www.youtube.com/@toky1234')
	    .setAuthor({ name: 'GAMERTOKY1188', iconURL: 'https://gamertoky1188gro.github.io/documents/discord-bots/example-bot/connect.png', url: 'https://www.youtube.com/@toky1234' })
	    .setDescription('pls subscribe my channel.')
	    .setThumbnail('https://gamertoky1188gro.github.io/documents/discord-bots/example-bot/connect.png')
	    .setTimestamp()
	    .setFooter({ text: 'from youtube', iconURL: 'https://gamertoky1188gro.github.io/documents/discord-bots/example-bot/Screenshot_20231227-181633.png' });

        interaction.reply({ embeds: [embed] });
    };

});

client.on('interactionCreate', async (interaction) => {
    try {
        if (!interaction.isButton()) return;
        await interaction.deferReply({ ephemeral: true });

        const role =  interaction.guild.roles.cache.get(interaction.customId);
            
        if (!role) {
            interaction.editReply({
                content: 'i could not find the roll',
            })
            return;
        }
    
        const hasRole = interaction.member.roles.cache.has(role.id)

        if (hasRole) {
            await interaction.member.roles.remove(role);
            await interaction.editReply(`the role ${role} was removed`);
            return;
        }
    
        await interaction.member.roles.add(role);
        await interaction.editReply(`the role ${role} was removed`); 
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN)
