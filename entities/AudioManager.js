import {createAudioPlayer, joinVoiceChannel, getVoiceConnection, createAudioResource} from "@discordjs/voice";
import * as play from "play-dl";

class AudioManager {
    static instances = new Map();

    constructor(guildId) {
        this.guildId = guildId;
        this.player = createAudioPlayer();
        this.connection = null;
        this.queue = [];
        this.player.on('stateChange', (oldState, newState) => {
            if (oldState.status === 'playing' && newState.status === 'idle') {
                this.playNext();
            }
        });
    }

    static getInstance(guildId, voiceAdapterCreator) {
        if (!AudioManager.instances.get(guildId)) {
            AudioManager.instances.set(guildId, new AudioManager(guildId));
        }
        return AudioManager.instances.get(guildId);
    }

    joinChannel(channelId, voiceAdapterCreator) {
        this.connection = joinVoiceChannel({
            channelId,
            guildId: this.guildId,
            adapterCreator: voiceAdapterCreator,
        });
        this.connection.subscribe(this.player);
    }

    async addToQueue(song) {
        this.queue.push(song);
        if (this.player.state.status !== 'playing') {
            await this.playNext();
        }
    }

    async playNext() {
        if (this.queue.length === 0) {
            return;
        }
        const song = this.queue.shift();
        const songStream = await play.stream(song.url);
        const resource = createAudioResource(songStream.stream, { inputType: songStream.type });
        this.player.play(resource);
    }

    play(resource) {
        this.player.play(resource);
    }

    stop() {
        this.player.stop();
        this.queue = [];
    }

    async skip() {
        await this.playNext();
    }

    pause() {
        if (this.player.state.status === "playing") {
            this.player.pause();
        }
    }

    resume() {
        if (this.player.state.status === "paused") {
            this.player.unpause();
        }
    }

    leaveChannel() {
        const connection = getVoiceConnection(this.guildId);
        if (connection) {
            connection.destroy();
        }
    }
}

export default AudioManager;