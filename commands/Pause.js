import Command from "../entities/Command.js";
import AudioManager from "../entities/AudioManager.js";

export default class PauseCommand extends Command {
    constructor() {
        super('pause');
    }

    async execute(message, args) {
        const guildId = message.guild.id;
        const audioManager = AudioManager.getInstance(guildId);
        if (!audioManager || audioManager.player.state.status !== "playing") {
            message.reply("Não há música sendo tocada no momento para pausar.");
            return;
        }

        audioManager.pause();
        message.channel.send("Música pausada.");
    }
}