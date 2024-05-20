import Command from "../entities/Command.js";
import AudioManager from "../entities/AudioManager.js";

export default class ResumeCommand extends Command {
    constructor() {
        super('resume');
    }

    async execute(message, args) {
        const guildId = message.guild.id;
        const audioManager = AudioManager.getInstance(guildId);
        if (!audioManager || audioManager.player.state.status !== "paused") {
            message.reply("Não há música pausada no momento para retomar.");
            return;
        }

        audioManager.resume();
        message.channel.send("Música retomada.");
    }
}