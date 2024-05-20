
import { Client, GatewayIntentBits } from "discord.js";
import Bot from "./entities/Bot.js";
import PlayCommand from "./commands/Play.js";
import StopCommand from "./commands/Stop.js";
import PauseCommand from "./commands/Pause.js";
import ResumeCommand from "./commands/Resume.js";
import SkipCommand from "./commands/Skip.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const botToken = process.env.BOT_TOKEN;
const bot = new Bot(client, botToken);

bot.registerCommand(new PlayCommand());
bot.registerCommand(new StopCommand());
bot.registerCommand(new PauseCommand());
bot.registerCommand(new ResumeCommand());
bot.registerCommand(new SkipCommand());

bot.login();