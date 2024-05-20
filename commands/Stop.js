import Command from "../entities/Command.js";
import AudioManager from "../entities/AudioManager.js";

export default class StopCommand extends Command {
    constructor() {
        super('stop');
    }

    async execute(message, args) {
        const guildId = message.guild.id;
        const audioManager = AudioManager.getInstance(guildId);
        if (!audioManager || !audioManager.player.state.status === "idle") {
            message.reply("Não há música sendo tocada no momento.");
            return;
        }

        audioManager.stop();
        message.channel.send("Música parada.");
    }
}