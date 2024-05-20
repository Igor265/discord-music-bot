import Command from "../entities/Command.js";
import AudioManager from "../entities/AudioManager.js";

export default class SkipCommand extends Command {
    constructor() {
        super('skip');
    }

    async execute(message, args) {
        const guildId = message.guild.id;
        const audioManager = AudioManager.getInstance(guildId);
        audioManager.skip();
        message.channel.send("Pulando para a próxima música.");
    }
}