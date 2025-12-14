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

import "./settings.js"
import handler from './handler.js'
import events from './commands/events.js'
import { smsg } from "./lib/message.js";
import db from "./lib/system/database.js";
import { startSubBot } from './lib/subs.js';

import {
  Browsers,
  makeWASocket,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  jidDecode,
  DisconnectReason,
} from "@whiskeysockets/baileys";
import cfonts from 'cfonts';
import pino from "pino";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import boxen from 'boxen';
import readline from "readline";
import os from "os";
import parsePhoneNumber from "awesome-phonenumber";
import { exec, execSync } from "child_process";
import moment from 'moment-timezone';

const BOT_NAME = "Alya San";
const BOT_DESCRIPTION = "WhatsApp Bot";
const SESSIONS_DIR = path.join(process.cwd(), "Sessions");
const OWNER_SESSION_DIR = path.join(SESSIONS_DIR, "Owner");
const SUBBOTS_SESSION_DIR = path.join(SESSIONS_DIR, "Subs");
const BROWSER_CONFIG = Browsers.macOS("Chrome");
const RECONNECT_DELAY = 2500;
const LOAD_BOTS_INTERVAL = 60 * 1000;
const BOT_TYPES = [
  { name: "SubBot", folder: SUBBOTS_SESSION_DIR, starter: startSubBot },
];

const log = {
  info: (msg) => console.log(chalk.bgBlue.white.bold("INFO"), chalk.white(msg)),
  success: (msg) => console.log(chalk.bgGreen.white.bold("SUCCESS"), chalk.greenBright(msg)),
  warn: (msg) => console.log(chalk.bgYellowBright.blueBright.bold("WARNING"), chalk.yellow(msg)),
  error: (msg) => console.log(chalk.bgRed.white.bold("ERROR"), chalk.redBright(msg)),
};

const printLabeledValue = (label, value) => {
  console.log(
    `${chalk.green.bold("║")} ${chalk.cyan.bold(label.padEnd(16))}${chalk.magenta.bold(":")} ${value}`
  );
};

const getUserName = () => {
  try {
    return os.userInfo().username;
  } catch (e) {
    return process.env.USER || process.env.USERNAME || "desconocido";
  }
};

const extractDigits = (str = "") => String(str).replace(/\D/g, "");

const normalizePhoneForPairing = (input) => {
  let digits = extractDigits(input);
  if (!digits) return "";
  if (digits.startsWith("0")) digits = digits.replace(/^0+/, "");
  if (digits.length === 10 && digits.startsWith("3")) digits = "57" + digits;
  if (digits.startsWith("52") && !digits.startsWith("521") && digits.length >= 12) digits = "521" + digits.slice(2);
  if (digits.startsWith("54") && !digits.startsWith("549") && digits.length >= 11) digits = "549" + digits.slice(2);
  return digits;
};

const decodeJid = (jid) => {
  if (!jid) return jid;
  if (/:\d+@/gi.test(jid)) {
    const decoded = jidDecode(jid) || {};
    return decoded.user && decoded.server ? `${decoded.user}@${decoded.server}` : jid;
  }
  return jid;
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, (ans) => resolve(ans.trim())));

const createClient = async (sessionName = OWNER_SESSION_DIR) => {
  const { state, saveCreds } = await useMultiFileAuthState(sessionName);
  const { version, isLatest } = await fetchLatestBaileysVersion();
  if (!isLatest) console.log(`⚠️  Versión de Baileys no es la última (actual: ${version.join(".")})`);
  const logger = pino({ level: "silent" });
  const client = makeWASocket({
    version,
    logger,
    browser: BROWSER_CONFIG,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    markOnlineOnConnect: false,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false,
    getMessage: async () => "",
    keepAliveIntervalMs: 45000,
    maxIdleTimeMs: 60000,
  });
  client.ev.on("creds.update", saveCreds);
  client.sendText = async (jid, text, quoted = "", options = {}) => {
    return client.sendMessage(jid, { text, ...options }, { quoted });
  };
  client.decodeJid = decodeJid;
  return { client, state, saveCreds };
};

const handleConnection = async (client) => {
  client.ev.on("connection.update", async (update) => {
    const { qr, connection, lastDisconnect, isNewLogin, receivedPendingNotifications } = update;

    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode || 0;
      if (reason === DisconnectReason.connectionLost) {
        log.warn("Se perdió la conexión, reconectando..");
        startBot();
      } else if (reason === DisconnectReason.connectionClosed) {
        log.warn("Conexión cerrada, reconectando..");
        startBot();
      } else if (reason === DisconnectReason.restartRequired) {
        log.warn("Reinicio requerido, reconectando..");
        startBot();
      } else if (reason === DisconnectReason.timedOut) {
        log.warn("Tiempo agotado, reconectando..");
        startBot();
      } else if (reason === DisconnectReason.badSession) {
        log.warn("Sesión inválida, eliminando y reconectando..");
        startBot();
      } else if (reason === DisconnectReason.connectionReplaced) {
        log.warn("Sesión reemplazada, cierra la otra instancia..");
      } else if (reason === DisconnectReason.loggedOut) {
        log.warn("Desconectado, eliminando sesión y reiniciando..");
        execSync(`rm -rf ${OWNER_SESSION_DIR}/*`);
        process.exit(1);
      } else if (reason === DisconnectReason.forbidden) {
        log.error("Error de acceso, eliminando sesión y reiniciando..");
        execSync(`rm -rf ${OWNER_SESSION_DIR}/*`);
        process.exit(1);
      } else if (reason === DisconnectReason.multideviceMismatch) {
        log.warn("Dispositivo no compatible, eliminando sesión..");
        execSync(`rm -rf ${OWNER_SESSION_DIR}/*`);
        process.exit(0);
      } else {
        client.end(`Motivo desconocido: ${reason}|${connection}`);
      }
    }

    if (connection === "open") {
      client.uptime = Date.now();
      console.log(boxen(chalk.bold(" ¡CONECTADO CON WHATSAPP! "), {
        borderStyle: "round",
        borderColor: "green",
        title: chalk.green.bold("● CONEXIÓN ●"),
        titleAlignment: "center",
        float: "center"
      }));
    }

    if (isNewLogin) log.info("Nuevo dispositivo detectado");
    if (receivedPendingNotifications) {
      log.warn("Espera 1 minuto para cargar notificaciones pendientes..");
      client.ev.flush();
    }
  });

  if (!client.authState?.creds?.registered) {
    console.log(chalk.bold.redBright(`Ingrese el número de WhatsApp.\n${chalk.bold.yellowBright("Ejemplo: +57301******")}\n${chalk.bold.magentaBright('---> ')} `));
    const fixed = await question("");
    const phone = normalizePhoneForPairing(fixed);
    try {
      const pairing = await client.requestPairingCode(phone);
      console.log(chalk.bold.white(chalk.bgMagenta(`🪶  CÓDIGO DE VINCULACIÓN:`)), chalk.bold.white(pairing));
    } catch (err) {
      execSync(`rm -rf ${OWNER_SESSION_DIR}/*`);
      process.exit(1);
    }
  }
};

const startBot = async () => {
  const { client } = await createClient();
  await handleConnection(client);
  global.client = client;
  client.isInit = false;
  return client;
};

const handleMessages = async (client) => {
  client.ev.on("messages.upsert", async ({ messages }) => {
    try {
      let m = messages[0];
      if (!m.message) return;
      m.message = Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
      if (m.key?.remoteJid === "status@broadcast") return;
      if (!client.public && !m.key.fromMe && messages.type === "notify") return;
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) return;
      m = await smsg(client, m);
      await handler(client, m, messages);
    } catch (err) {
      console.log(err);
    }
  });
};

const handleEvents = async (client) => {
  try {
    await events(client);
  } catch (err) {
    console.log(chalk.gray(`[ BOT  ]  → ${err}`));
  }
};

const loadDatabase = async () => {
  global.db = db;
  return global.db;
};

const { say } = cfonts;
say(BOT_NAME, { align: "center", gradient: ["red", "blue"] });
say(BOT_DESCRIPTION, { font: "console", align: "center", gradient: ["blue", "magenta"] });

global.conns = global.conns || [];
const reconnecting = new Set();

const loadBots = async () => {
  for (const { name, folder, starter } of BOT_TYPES) {
    if (!fs.existsSync(folder)) continue;
    const botIds = fs.readdirSync(folder);
    for (const userId of botIds) {
      const sessionPath = path.join(folder, userId);
      const credsPath = path.join(sessionPath, "creds.json");
      if (!fs.existsSync(credsPath)) continue;
      if (global.conns.some(c => c.userId === userId)) continue;
      if (reconnecting.has(userId)) continue;
      try {
        reconnecting.add(userId);
        await starter(null, null, "Auto reconexión", false, userId, sessionPath);
      } catch (e) {
        reconnecting.delete(userId);
      }
      await new Promise(res => setTimeout(res, RECONNECT_DELAY));
    }
  }
  setTimeout(loadBots, LOAD_BOTS_INTERVAL);
};

const initBot = async () => {
  await loadDatabase();
  console.log(chalk.gray('[ ✿  ]  Base de datos cargada correctamente.'));
  const client = await startBot();
  await handleMessages(client);
  await handleEvents(client);
  await loadBots();
};

initBot();
