/*
 # ------------√ ×------------
    # Agradecimientos :: ZyxlJs
    # Agradecimientos :: AzamiJs
    # Agradecimientos :: GataDios

    - Recuerda dejar los creditos, no quites los creditos de los autores del código!
    - Puedes modificar esta base a tu gusto, recuerda dejar los creditos correspondiente!
 # ------------√ ×------------
*/

import ws from 'ws';
import moment from 'moment';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import gradient from 'gradient-string';
import seeCommands from './lib/system/commandLoader.js';
import initDB from './lib/system/initDB.js';
import antilink from './commands/antilink.js';
import level from './commands/level.js';
import { getGroupAdmins } from './lib/message.js';

seeCommands()

export default async (client, m) => {
  if (!m.message) return

const sender = m.sender 

  let body =
    m.message.conversation ||
    m.message.extendedTextMessage?.text ||
    m.message.imageMessage?.caption ||
    m.message.videoMessage?.caption ||
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
    m.message.templateButtonReplyMessage?.selectedId ||
    ''

  initDB(m, client)
  antilink(client, m)

  // # Función de Prefijo de Sub-Bot hecho por ZyxlJs, su funcion es: NameBot/comando! 
  // # Ejemplo: Megumin/menu

  const from = m.key.remoteJid
  const idDD = client.user.id.split(':')[0] + "@s.whatsapp.net" || ''
  const rawPrefijo = global.db.data.settings[idDD].prefijo || ''
  const prefas = Array.isArray(rawPrefijo) ? rawPrefijo : rawPrefijo ? [rawPrefijo] : ['#', '.', '/'] || ['#', '.', '/']

const rawBotname = global.db.data.settings[idDD].namebot2 || 'Diamond'

const isValidBotname = /^[\w\s]+$/.test(rawBotname)
const botname2 = isValidBotname ? rawBotname : 'San'

const shortForms = [
  botname2.charAt(0),
  botname2.split(" ")[0],
  botname2.split(" ")[0].slice(0, 2),
  botname2.split(" ")[0].slice(0, 3)
]

const prefixes = shortForms.map(name => `${name}`)
prefixes.unshift(botname2)

const prefixo = prefas.join('')

globalThis.prefix = new RegExp(`^(${prefixes.join('|')})?[${prefixo}]`, 'i')

  const prefixMatch = body.match(globalThis.prefix)
  const prefix = prefixMatch ? prefixMatch[0] : null
  if (!prefix) return

  const args = body.slice(prefix.length).trim().split(/ +/)
  const command = args.shift()?.toLowerCase()
  const text = args.join(' ')

  const pushname = m.pushName || 'Sin nombre'
  const botJid = client.user.id.split(':')[0] + '@s.whatsapp.net' || client.user.lid
  const chat = global.db.data.chats[m.chat] || {}

let groupMetadata = null
let groupAdmins = []
let groupName = ''

if (m.isGroup) {
  groupMetadata = await client.groupMetadata(m.chat).catch(() => null)
  groupName = groupMetadata?.subject || ''
  groupAdmins = groupMetadata?.participants.filter(p =>
    (p.admin === 'admin' || p.admin === 'superadmin')
  ) || []
}

const isBotAdmins = m.isGroup ? groupAdmins.some(p => p.phoneNumber === botJid || p.jid === botJid || p.id === botJid || p.lid === botJid ) : false

const isAdmins = m.isGroup ? groupAdmins.some(p => p.phoneNumber === sender || p.jid === sender || p.id === sender || p.lid === sender ) : false

  const fromprimary = global.db.data.chats[from];
  const consolePrimary = fromprimary.primaryBot;

  if (!consolePrimary || consolePrimary === client.user.id.split(':')[0] + '@s.whatsapp.net') {

const b='*',l=44,H=chalk.bold.gradient.cyanMagenta(b.repeat(l)),V=chalk.bold.hex('#f0fdf4')(b),s=' '

console.log(`\n${H}`)
console.log(c.lg(`${V}${s}Fecha: ${c.wi.it(m().format('DD/MM/YYYY HH:mm:ss'))}${s.repeat(l-11-m().format('DD/MM/YYYY HH:mm:ss').length)}${V}`))
console.log(c.cb(`${V}${s}Usuario: ${c.wi.bo(pushname)}${s.repeat(l-12-pushname.length)}${V}`))
console.log(c.pn(`${V}${s}Remitente: ${g.rainbow(sender)}${s.repeat(l-14-sender.length)}${V}`))
m.isGroup 
  ? (console.log(c.gr(`${V}${s}Grupo: ${c.wi.it(groupName)}${s.repeat(l-10-groupName.length)}${V}`)),
     console.log(c.pu(`${V}${s}ID Grupo: ${g.purplePink(from)}${s.repeat(l-13-from.length)}${V}`)))
  : console.log(c.gr(`${V}${s}Chat: ${c.wi.bo('Privado')}${s.repeat(l-8-7)}${V}`))
console.log(H)

const c={
  lg:chalk.bold.hex('#facc15'),
  cb:chalk.bold.hex('#22d3ee'),
  pn:chalk.bold.hex('#ec4899'),
  gr:chalk.bold.hex('#10b981'),
  pu:chalk.bold.hex('#8b5cf6'),
  wi:chalk.hex('#ffffff'),
  it:chalk.italic,
  bo:chalk.bold
}
const prefixxy = ['/', '#', '!', '-', '+', '.']
const hasPrefix = prefixxy.some(prefix => m.text?.startsWith(prefix))

// # Función primary hecha por ZyxlJs en base beta!

const chatData = global.db.data.chats[m.chat]
const botprimaryId = chatData?.primaryBot
const selfId = client.user.id.split(':')[0] + '@s.whatsapp.net'

if (botprimaryId && botprimaryId !== selfId) {
  if (hasPrefix) {
    const primaryConn = global.conns.find(conn =>
      conn.user.id.split(':')[0] + '@s.whatsapp.net' === botprimaryId &&
      conn.ws?.socket?.readyState !== ws.CLOSED
    )

    const participants = m.isGroup
      ? (await client.groupMetadata(m.chat).catch(() => ({ participants: [] }))).participants
      : []

    const primaryInGroup = participants.some(p => p.phoneNumber === botprimaryId || p.jid === botprimaryId || p.id === botprimaryId || p.lid === botprimaryId)

    const isPrimarySelf = botprimaryId === global.client.user.id.split(':')[0] + '@s.whatsapp.net'

    if (!primaryConn || !primaryInGroup) {
      // console.log(primaryInGroup)
      // chatData.primaryBot = null
    }

    if ((primaryConn && primaryInGroup) || isPrimarySelf) return
  }
}

  const isVotOwn = [
    client.user.id.split(':')[0] + '@s.whatsapp.net',
    ...global.owner.map(num => num + '@s.whatsapp.net')
  ].includes(sender)

  if (global.db.data.settings[selfId].self) {
    const owner = global.db.data.settings[selfId].owner
    if (
      sender !== owner &&
      !isVotOwn &&
      !global.mods.map(num => num + '@s.whatsapp.net').includes(sender)
    ) return
  }

  if (chat?.bannedGrupo && !['#bot on', '/bot on', '.bot on', '!bot on', '-bot on', '+bot on'].includes(body.toLowerCase()) &&
      !global.owner.map(num => num + '@s.whatsapp.net').includes(m.sender)) return

  if (chat.adminonly && !isAdmins) return

    const cmdData = global.comandos.get(command)
    if (!cmdData) {
    await client.readMessages([m.key])
    return m.reply(`ꕤ El comando *${command}* no existe.\n✎ Usa *${prefix}help* para ver la lista de comandos disponibles.`)
   }
    const comando = m.text.slice(prefix.length);
if (cmdData && typeof cmdData === 'object' && cmdData.isOwner && !global.owner.map(num => num + '@s.whatsapp.net').includes(sender)
) { return m.reply(`ꕤ El comando *${command}* no existe.\n✎ Usa *${prefix}help* para ver la lista de comandos disponibles.`) }
   if (cmdData && typeof cmdData === 'object' && cmdData.isModeration && !global.mods.map(num => num + '@s.whatsapp.net').includes(sender)
) { return m.reply(`ꕤ El comando *${command}* no existe.\n✎ Usa *${prefix}help* para ver la lista de comandos disponibles.`) } 
if (cmdData && typeof cmdData === 'object' && cmdData.isAdmin && !isAdmins) { return client.reply(m.chat, mess.admin, m) }
if (cmdData && typeof cmdData === 'object' && cmdData.botAdmin && !isBotAdmins) { return client.reply(m.chat, mess.botAdmin, m) }  

    try {
    await client.readMessages([m.key])
    const user = global.db.data.chats[m.chat].users[m.sender] || {}
    const user2 = global.db.data.users[m.sender] || {}

    user2.usedcommands = (user2.usedcommands || 0) + 1
    user.usedTime = new Date()
    user2.exp = (user2.exp || 0) + Math.floor(Math.random() * 100)
    user2.name = m.pushName
      await cmdData.run(client, m, args, command, text, prefix)
    } catch (error) {
      await client.sendMessage(m.chat, { text: `☃️ Error al ejecutar el comando` }, { quoted: m })
    }

  // valid(client, m, command)
  level(m)
};