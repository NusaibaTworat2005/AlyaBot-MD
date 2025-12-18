/*
 # ------------- √ × -------------
    # Agradecimientos :: ZyxlJs
    # Agradecimientos :: AzamiJs
    # Agradecimientos :: GataDios

   # Nota
   - No elimines los créditos ni agregues créditos que no te pertenecen. Respeta el trabajo ajeno.
   - No vendas el código del bot. Este proyecto es completamente gratuito y de código abierto.
 # ------------- √ × -------------
*/

import "./settings.js";
import handler from './handler.js';
import events from './commands/events.js';
import {
  Browsers,
  makeWASocket,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  jidDecode,
  DisconnectReason
} from "@whiskeysockets/baileys";
import cfonts from 'cfonts';
import pino from "pino";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import boxen from 'boxen';
import readline from "readline";
import os from "os";
import { exec } from "child_process";
import { smsg } from "./lib/message.js";
import { startSubBot } from './lib/subs.js';

const log = {
  info: msg => console.log(chalk.bgBlue.white.bold('INFO'), chalk.white(msg)),
  success: msg => console.log(chalk.bgGreen.white.bold('SUCCESS'), chalk.greenBright(msg)),
  warn: msg => console.log(chalk.bgYellowBright.blueBright.bold('WARNING'), chalk.yellow(msg)),
  error: msg => console.log(chalk.bgRed.white.bold('ERROR'), chalk.redBright(msg))
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = async (text) => {
  return new Promise(resolve => rl.question(text, answer => resolve(answer.trim())));
};

const normalizePhoneForPairing = (input) => {
  let s = input.replace(/\D/g, "");
  if (s.startsWith("0")) s = s.replace(/^0+/, "");
  if (s.length === 10 && s.startsWith("3")) s = "57" + s;
  if (s.startsWith("52") && !s.startsWith("521") && s.length >= 12) s = "521" + s.slice(2);
  if (s.startsWith("54") && !s.startsWith("549") && s.length >= 11) s = "549" + s.slice(2);
  return s;
};

const isValidPhoneNumber = (input) => /^[0-9\s\+\-\(\)]+$/.test(input);

const displayLoadingMessage = () => {
  console.log(chalk.bold.redBright(`Por favor, Ingrese el número de WhatsApp.\n` +
      `${chalk.bold.yellowBright("Ejemplo: +57301******")}\n` +
      `${chalk.bold.magentaBright('---> ')} `));
};

const startBot = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(global.sessionName);
  const { version } = await fetchLatestBaileysVersion();
  const logger = pino({ level: "silent" });

  const client = makeWASocket({
    version,
    logger,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    }
  });

  global.client = client;
  client.ev.on("creds.update", saveCreds);

  if (!client.authState.creds.registered) {
    while (true) {
      try {
        displayLoadingMessage();
        const phoneInput = await askQuestion("");
        if (isValidPhoneNumber(phoneInput)) {
          const phoneNumber = normalizePhoneForPairing(phoneInput);
          const pairing = await client.requestPairingCode(phoneNumber);
          console.log(chalk.bold.white(chalk.bgMagenta(`🪶  CÓDIGO DE VINCULACIÓN:`)), chalk.bold.white(chalk.white(pairing)));
          break;
        } else {
          log.error("Error: por favor ingrese un número válido, solo se permiten números, espacios, +, -, ()");
        }
      } catch (err) {
        log.error("Error al solicitar el código de emparejamiento.");
      }
    }
  }

  client.sendText = (jid, text, quoted = "", options) =>
    client.sendMessage(jid, { text, ...options }, { quoted });

  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode || 0;
      switch (reason) {
        case DisconnectReason.connectionLost:
        case DisconnectReason.connectionClosed:
          log.warn("Intentando reconectarme...");
          startBot();
          break;
        case DisconnectReason.restartRequired:
          log.warn("Reinicio necesario, intentando nuevamente...");
          startBot();
          break;
        case DisconnectReason.badSession:
          log.warn("Eliminar sesión y escanear nuevamente...");
          startBot();
          break;
        case DisconnectReason.loggedOut:
          log.warn("Escanee nuevamente y ejecute...");
          exec("rm -rf ./Sessions/Owner/*");
          process.exit(1);
        default:
          log.error("Desconexión inesperada, razón: " + reason);
          client.end(`Motivo de desconexión desconocido: ${reason}`);
      }
    }

    if (connection === "open") {
      console.log(boxen(chalk.bold('¡CONECTADO CON WHATSAPP!'), {
        borderStyle: 'round',
        borderColor: 'green',
        title: chalk.green.bold('● CONEXIÓN ●'),
        titleAlignment: 'center',
        float: 'center'
      }));
    }
  });

  client.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || (m.key && m.key.remoteJid === "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length === 16)) return;
    const msg = await smsg(client, m);
    handler(client, msg, messages);
  });

  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      const { user, server } = jidDecode(jid) || {};
      return user && server ? `${user}@${server}` : jid;
    }
    return jid;
  };
};

(async () => {
  await startBot();
  console.log(chalk.gray('[ ✿  ]  Base de datos cargada correctamente.'));
})();
