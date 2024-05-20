import * as play from "play-dl";
import Command from "../entities/Command.js";
import {videoPattern} from "../patterns.js";
import searchOnYouTube from "../utils/seatchOnYouTube.js";
import AudioManager from "../entities/AudioManager.js";


export default class PlayCommand extends Command {
    constructor() {
        super('play');
    }

    async execute(message, args) {
        if (args.length === 0) {
            message.reply("Você precisa fornecer o nome da música ou a URL.");
            return;
        }
        const songQuery = args.join(' ').trim();
        try {
            const result = await this.verifySongQuery(songQuery);
            await this.playMusic(message, result);
        } catch (error) {
            console.error(error);
            message.reply("Houve um erro ao tentar tocar a música.");
        }
    }


    async playMusic(message, songUrl) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            message.reply("Você precisa estar em um canal de voz para tocar música.");
            return;
        }

        const audioManager = AudioManager.getInstance(voiceChannel.guild.id, voiceChannel.guild.voiceAdapterCreator);
        audioManager.joinChannel(voiceChannel.id, voiceChannel.guild.voiceAdapterCreator);

        try {
            await audioManager.addToQueue({ url: songUrl.video_details.url, title: songUrl.video_details.title });
            message.channel.send(`Adicionado à fila: ${songUrl.video_details.title}`);
        } catch (error) {
            console.error(error);
            message.reply("Houve um erro ao tentar tocar a música.");
        }
    }

    async verifySongQuery(songQuery) {
        if (videoPattern.test(songQuery)) {
            return await play.video_basic_info(songQuery);
        } else {
            return searchOnYouTube(songQuery);
        }
    }
}