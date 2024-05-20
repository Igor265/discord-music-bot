export default class Bot {

    constructor(client, token) {
        this.client = client;
        this.token = token;
        this.commands = new Map();
    }

    login() {
        this.client.login(this.token);
        this.client.once('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        });
        this.client.on('messageCreate', this.handleMessage.bind(this));
    }

    registerCommand(command) {
        this.commands.set(command.name, command);
    }

    async handleMessage(message) {
        if (!message.content.startsWith('!')) return;
        const args = message.content.slice(1).split(' ');
        const commandName = args.shift().toLowerCase();
        const command = this.commands.get(commandName);
        if (!command) return;
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error executing that command.');
        }
    }
}