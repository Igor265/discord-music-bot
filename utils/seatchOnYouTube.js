import {YouTube} from "youtube-sr";
import * as play from "play-dl";

export default async function searchOnYouTube(query) {
    const result = await YouTube.searchOne(query);

    if (result) {
        return await play.video_basic_info(`https://youtube.com/watch?v=${result.id}`);
    }
    return null;
}