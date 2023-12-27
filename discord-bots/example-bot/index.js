require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
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
	    .setURL('https://www.youtube.com/@toky1234/')
	    .setAuthor({ name: 'gammrtoky1188', iconURL: ''})
        .setDescription('please subscribe my channel')
	    .setThumbnail('htts')
	    .setTimestamp()
	    .setFooter({ text: 'from YouTube', iconURL: '' });
        }
});

client.login(process.env.TOKEN)
