# 🎵 Simple Discord Music Bot

Este repositório contém um simples bot de música para Discord, desenvolvido em Node.js. O objetivo principal deste projeto é praticar habilidades de desenvolvimento com JavaScript/Node.js, bem como explorar a API do Discord e as bibliotecas associadas para criar bots.

## 📝 Funcionalidades

- **Reprodução de Música**: Reproduz músicas a partir de links do YouTube.
- **Comandos Básicos**: Inclui comandos para tocar, pausar, pular e parar músicas.
- **Fila de Reprodução**: Gerencia uma fila de músicas para reprodução contínua.
- **Respostas Interativas**: Responde com mensagens de confirmação e feedback no canal de texto.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **discord.js**: Biblioteca para interagir com a API do Discord.
- **youtube-sr**: Biblioteca para buscar vídeos no YouTube.
- **play-dl**: Biblioteca para fazer o stream do video.

## 📦 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/Igor265/simple-discord-music-bot.git
   cd simple-discord-music-bot

2. Instale as dependências:
   ```sh
    npm install

3. Crie um arquivo .env e adicione seu token do Discord:
   ```sh
    DISCORD_TOKEN=seu-token-do-discord

4. Instale as dependências:
   ```sh
    node --env-file=.env index.js

## 🔧 Comandos Disponíveis

- `!play <link-ou-nome-da-música>`: Adiciona uma música à fila de reprodução.
- `!pause`: Pausa a reprodução da música atual.
- `!resume`: Continua a reprodução da música pausada.
- `!skip`: Pula para a próxima música na fila.
- `!stop`: Para a reprodução de música e limpa a fila.

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.


Desenvolvido com ❤️ por [Igor Ribeiro](https://www.linkedin.com/in/igor-ribeiro-a1a670174/).
