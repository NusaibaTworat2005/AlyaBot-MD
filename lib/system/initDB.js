import dotenv from 'dotenv'
dotenv.config()

let isNumber = (x) => typeof x === 'number' && !isNaN(x)

const SETTINGS_SELF = process.env.SETTINGS_SELF === "true" ? true : false
const SETTINGS_PREFIXES = process.env.SETTINGS_PREFIXES ? process.env.SETTINGS_PREFIXES.split(',') : ['/', '#', '.', '!']
const SETTINGS_ID = process.env.SETTINGS_ID || '120363420992828502@newsletter'
const SETTINGS_NAMEID = process.env.SETTINGS_NAMEID || '𐚁๋࣭⭑ֶָ֢ ѕтєℓℓαя ωα ⚡︎ ¢нαηηєℓ  ₍ᐢ..ᐢ₎♡'
const SETTINGS_LINK = process.env.SETTINGS_LINK || 'https://api.stellarwa.xyz'
const SETTINGS_BANNER = process.env.SETTINGS_BANNER || 'https://cdn.stellarwa.xyz/files/f9nX.jpeg'
const SETTINGS_ICON = process.env.SETTINGS_ICON || 'https://cdn.stellarwa.xyz/files/jjiM.jpeg'
const SETTINGS_CURRENCY = process.env.SETTINGS_CURRENCY || 'Coins'
const SETTINGS_NAMEBOT = process.env.SETTINGS_NAMEBOT || '𑣲♡ ᥲᥣᥡᥲ ᥕᥲrᥱ ᥲі  ₍ᐢ..ᐢ₎♡'
const SETTINGS_NAMEBOT2 = process.env.SETTINGS_NAMEBOT2 || 'Alya'
const SETTINGS_OWNER = process.env.SETTINGS_OWNER || 'Oculto por privacidad'

const USER_DEFAULT_EXP = parseInt(process.env.USER_DEFAULT_EXP) || 0
const USER_DEFAULT_LEVEL = parseInt(process.env.USER_DEFAULT_LEVEL) || 0
const USER_DEFAULT_USEDCOMMANDS = parseInt(process.env.USER_DEFAULT_USEDCOMMANDS) || 0

const CHAT_DEFAULT_BANNEDGRUPO = process.env.CHAT_DEFAULT_BANNEDGRUPO === "true" ? true : false
const CHAT_DEFAULT_WELCOME = process.env.CHAT_DEFAULT_WELCOME === "true" ? true : false
const CHAT_DEFAULT_NSFW = process.env.CHAT_DEFAULT_NSFW === "true" ? true : false
const CHAT_DEFAULT_ALERTS = process.env.CHAT_DEFAULT_ALERTS === "true" ? true : false
const CHAT_DEFAULT_GACHA = process.env.CHAT_DEFAULT_GACHA === "true" ? true : false
const CHAT_DEFAULT_RPG = process.env.CHAT_DEFAULT_RPG === "true" ? true : false
const CHAT_DEFAULT_ADMINONLY = process.env.CHAT_DEFAULT_ADMINONLY === "true" ? true : false
const CHAT_DEFAULT_PRIMARYBOT = process.env.CHAT_DEFAULT_PRIMARYBOT || null
const CHAT_DEFAULT_ANTILINKS = process.env.CHAT_DEFAULT_ANTILINKS === "true" ? true : false

const CHAT_USER_DEFAULT_COINS = parseInt(process.env.CHAT_USER_DEFAULT_COINS) || 0
const CHAT_USER_DEFAULT_BANK = parseInt(process.env.CHAT_USER_DEFAULT_BANK) || 0

function initDB(m, client) {
  const jid = client.user.id.split(':')[0] + '@s.whatsapp.net'

  const settings = global.db.data.settings[jid] ||= {}
  settings.self ??= SETTINGS_SELF
  settings.prefijo ??= SETTINGS_PREFIXES
  settings.id ??= SETTINGS_ID
  settings.nameid ??= SETTINGS_NAMEID
  settings.link ??= SETTINGS_LINK
  settings.banner ??= SETTINGS_BANNER
  settings.icon ??= SETTINGS_ICON
  settings.currency ??= SETTINGS_CURRENCY
  settings.namebot ??= SETTINGS_NAMEBOT
  settings.namebot2 ??= SETTINGS_NAMEBOT2
  settings.owner ??= SETTINGS_OWNER

  const user = global.db.data.users[m.sender] ||= {}
  user.name ??= ''
  user.exp = isNumber(user.exp) ? user.exp : USER_DEFAULT_EXP
  user.level = isNumber(user.level) ? user.level : USER_DEFAULT_LEVEL
  user.usedcommands = isNumber(user.usedcommands) ? user.usedcommands : USER_DEFAULT_USEDCOMMANDS
  user.pasatiempo ??= ''
  user.description ??= ''
  user.marry ??= ''
  user.genre ??= ''
  user.birth ??= ''
  user.metadatos ??= null
  user.metadatos2 ??= null

  const chat = global.db.data.chats[m.chat] ||= {}
  chat.users ||= {}
  chat.bannedGrupo ??= CHAT_DEFAULT_BANNEDGRUPO
  chat.welcome ??= CHAT_DEFAULT_WELCOME
  chat.nsfw ??= CHAT_DEFAULT_NSFW
  chat.alerts ??= CHAT_DEFAULT_ALERTS
  chat.gacha ??= CHAT_DEFAULT_GACHA
  chat.rpg ??= CHAT_DEFAULT_RPG
  chat.adminonly ??= CHAT_DEFAULT_ADMINONLY
  chat.primaryBot ??= CHAT_DEFAULT_PRIMARYBOT
  chat.antilinks ??= CHAT_DEFAULT_ANTILINKS
  chat.personajesReservados ||= []

  chat.users[m.sender] ||= {}
  chat.users[m.sender].coins = isNumber(chat.users[m.sender].coins) ? chat.users[m.sender].coins : CHAT_USER_DEFAULT_COINS
  chat.users[m.sender].bank = isNumber(chat.users[m.sender].bank) ? chat.users[m.sender].bank : CHAT_USER_DEFAULT_BANK
  chat.users[m.sender].characters = Array.isArray(chat.users[m.sender].characters) ? chat.users[m.sender].characters : []
}

export default initDB;