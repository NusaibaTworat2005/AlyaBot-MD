import fetch from 'node-fetch';
import { getDevice } from '@whiskeysockets/baileys';
import fs from 'fs';
import axios from 'axios';
import moment from 'moment-timezone';

export default {
  command: ['allmenu', 'help', 'menu'],
  category: 'info',
  run: async (client, m, args) => {
    try {
      const now = new Date();
      const colombianTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Bogota' }));
      const tiempo = colombianTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).replace(/,/g, '');
      const tiempo2 = moment.tz('America/Bogota').format('hh:mm A');

      const botId = client?.user?.id.split(':')[0] + '@s.whatsapp.net' || '';
      const botSettings = global.db.data.settings[botId] || {};
      const botname = botSettings.namebot || '';
      const botname2 = botSettings.namebot2 || '';
      const banner = botSettings.banner || '';
      const owner = botSettings.owner || '';
      const canalId = botSettings.id || '120363420992828502@newsletter';
      const canalName = botSettings.nameid || '𐚁๋࣭⭑ֶָ֢ ѕтєℓℓαя ωα ⚡︎ ¢нαηηєℓ ₍ᐢ..ᐢ₎♡';
      const link = botSettings.link || bot.api;

      const prefix = botSettings.prefijo

      const isOficialBot = botId === global.client.user.id.split(':')[0] + '@s.whatsapp.net';
      const isPremiumBot = botSettings.botprem === true;
      const isModBot = botSettings.botmod === true;
      const botType = isOficialBot
        ? 'Principal/Owner'
        : isPremiumBot
          ? 'Premium'
          : isModBot
            ? 'Principal/Mod'
            : 'Sub Bot';
      const users = Object.keys(global.db.data.users).length;
      const device = getDevice(m.key.id);
      const sender = global.db.data.users[m.sender].name;

const time = client.uptime ? formatearMs(Date.now() - client.uptime) : "Desconocido"

      let menu = `> *¡ʜᴏʟᴀ!* $username, como está tu día?, mucho gusto mi nombre es *$namebot*

*┏━ $namebot ━⊜*
┃⋄ 📅 *Fecha* :: $fecha, $fecha2
┃⋄ </> *Developer* :: $owner
┃⋄ 🌾 *Tipo* :: $botType
┃⋄ 🌱 *Usuarios* :: $users
┃⋄ 🍃 *Sistema* :: $device
┃⋄ 🦋 *Enlace* :: $link
┃⋄ ☃️ *Uptime* :: $uptime
┗━━◘

乂 *ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* 乂

 .  . ︵ *ᴀɴɪᴍᴇ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /peek + _<mention>_
.꒷🌳.𖦹˙ /comfort + _<mention>_
.꒷🌳.𖦹˙ /thinkhard + _<mention>_
.꒷🌳.𖦹˙ /curious + _<mention>_
.꒷🌳.𖦹˙ /sniff + _<mention>_
.꒷🌳.𖦹˙ /stare + _<mention>_
.꒷🌳.𖦹˙ /trip + _<mention>_
.꒷🌳.𖦹˙ /blowkiss + _<mention>_
.꒷🌳.𖦹˙ /snuggle + _<mention>_
.꒷🌳.𖦹˙ /angry + _<mention>_
.꒷🌳.𖦹˙ /bleh + _<mention>_
.꒷🌳.𖦹˙ /bored › /aburrido + _<mention>_
.꒷🌳.𖦹˙ /clap + _<mention>_
.꒷🌳.𖦹˙ /coffee › /cafe + _<mention>_
.꒷🌳.𖦹˙ /cold + _<mention>_
.꒷🌳.𖦹˙ /sing + _<mention>_
.꒷🌳.𖦹˙ /tickle + _<mention>_
.꒷🌳.𖦹˙ /scream + _<mention>_
.꒷🌳.𖦹˙ /push + _<mention>_
.꒷🌳.𖦹˙ /nope + _<mention>_
.꒷🌳.𖦹˙ /jump + _<mention>_
.꒷🌳.𖦹˙ /heat + _<mention>_
.꒷🌳.𖦹˙ /gaming + _<mention>_
.꒷🌳.𖦹˙ /draw + _<mention>_
.꒷🌳.𖦹˙ /call + _<mention>_
.꒷🌳.𖦹˙ /dramatic › /drama + _<mention>_
.꒷🌳.𖦹˙ /drunk + _<mention>_
.꒷🌳.𖦹˙ /impregnate › /preg + _<mention>_
.꒷🌳.𖦹˙ /kisscheek › /beso + _<mention>_
.꒷🌳.𖦹˙ /laugh + _<mention>_
.꒷🌳.𖦹˙ /love › /amor + _<mention>_
.꒷🌳.𖦹˙ /pout + _<mention>_
.꒷🌳.𖦹˙ /punch + _<mention>_
.꒷🌳.𖦹˙ /run › /correr + _<mention>_
.꒷🌳.𖦹˙ /sad › /triste + _<mention>_
.꒷🌳.𖦹˙ /scared + _<mention>_
.꒷🌳.𖦹˙ /seduce + _<mention>_
.꒷🌳.𖦹˙ /shy › /timido + _<mention>_
.꒷🌳.𖦹˙ /sleep + _<mention>_
.꒷🌳.𖦹˙ /smoke › /fumar + _<mention>_
.꒷🌳.𖦹˙ /spit › /escupir + _<mention>_
.꒷🌳.𖦹˙ /step › /pisar + _<mention>_
.꒷🌳.𖦹˙ /think + _<mention>_
.꒷🌳.𖦹˙ /walk + _<mention>_
.꒷🌳.𖦹˙ /hug + _<mention>_
.꒷🌳.𖦹˙ /kill + _<mention>_
.꒷🌳.𖦹˙ /eat › /nom › /comer + _<mention>_
.꒷🌳.𖦹˙ /kiss › /muak + _<mention>_
.꒷🌳.𖦹˙ /wink + _<mention>_
.꒷🌳.𖦹˙ /pat + _<mention>_
.꒷🌳.𖦹˙ /happy › /feliz + _<mention>_
.꒷🌳.𖦹˙ /bully + _<mention>_
.꒷🌳.𖦹˙ /bite › /morder + _<mention>_
.꒷🌳.𖦹˙ /blush + _<mention>_
.꒷🌳.𖦹˙ /wave + _<mention>_
.꒷🌳.𖦹˙ /bath + _<mention>_
.꒷🌳.𖦹˙ /smug + _<mention>_
.꒷🌳.𖦹˙ /smile + _<mention>_
.꒷🌳.𖦹˙ /highfive + _<mention>_
.꒷🌳.𖦹˙ /handhold + _<mention>_
.꒷🌳.𖦹˙ /cringe + _<mention>_
.꒷🌳.𖦹˙ /bonk + _<mention>_
.꒷🌳.𖦹˙ /cry + _<mention>_
.꒷🌳.𖦹˙ /lick + _<mention>_
.꒷🌳.𖦹˙ /slap + _<mention>_
.꒷🌳.𖦹˙ /dance + _<mention>_
.꒷🌳.𖦹˙ /cuddle + _<mention>_

 .  . ︵ *ᴅᴏᴡɴʟᴏᴀᴅs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /facebook › /fb + _<url>_
.꒷🌳.𖦹˙ /mediafire › /mf + _<query|url>_
.꒷🌳.𖦹˙ /gdrive › /drive + _<url>_
.꒷🌳.𖦹˙ /instagram › /ig + _<url>_
.꒷🌳.𖦹˙ /tiktok › /tt + _<url|query>_
.꒷🌳.𖦹˙ /play › /mp3 › /playaudio › /ytaudio › /ytmp3 + _<url|query>_
.꒷🌳.𖦹˙ /play2 › /mp4 › /playvideo › /ytvideo › /ytmp4 + _<url|query>_

 .  . ︵ *ᴇᴄᴏɴᴏᴍɪᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /balance › /bal + _<mention>_
.꒷🌳.𖦹˙ /steal › /rob › /robar + _<mention>_
.꒷🌳.𖦹˙ /crime 
.꒷🌳.𖦹˙ /ritual 
.꒷🌳.𖦹˙ /givecoins › /pay › /coinsgive + _<cantidad|all>_ + _<mention>_
.꒷🌳.𖦹˙ /ppt + _<piedra|papel|tijera>_
.꒷🌳.𖦹˙ /waittimes › /cooldowns › /economyinfo › /einfo 
.꒷🌳.𖦹˙ /economyboard › /baltop › /eboard + _<página>_
.꒷🌳.𖦹˙ /slut 
.꒷🌳.𖦹˙ /mine 
.꒷🌳.𖦹˙ /rt › /roulette › /ruleta + _<cantidad>_ + _<red|black|green>_
.꒷🌳.𖦹˙ /coinflip › /flip › /cf + _<bet>_
.꒷🌳.𖦹˙ /daily 
.꒷🌳.𖦹˙ /monthly › /mensual 
.꒷🌳.𖦹˙ /weekly › /semanal 
.꒷🌳.𖦹˙ /work › /w 
.꒷🌳.𖦹˙ /math › /matematicas + _<dificultad>_
.꒷🌳.𖦹˙ /deposit › /dep › /d + _<cantidad|all>_
.꒷🌳.𖦹˙ /withdraw › /with + _<cantidad|all>_

 .  . ︵ *ɢᴀᴄʜᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /rw › /roll › /rollwaifu › /rf 
.꒷🌳.𖦹˙ /c › /claim › /buy + _<waifu>_
.꒷🌳.𖦹˙ /harem › /miswaifus › /claims 
.꒷🌳.𖦹˙ /sell › /vender + _<waifu>_ + _<value>_
.꒷🌳.𖦹˙ /buyc › /buycharacter › /buychar + _<waifu>_
.꒷🌳.𖦹˙ /trade › /cambiar + _<tu personaje / personaje 2>_
.꒷🌳.𖦹˙ /animelist › /slist › /serielist 
.꒷🌳.𖦹˙ /animeinfo › /ainfo › /serieinfo + _<anime>_
.꒷🌳.𖦹˙ /tiendawaifus › /wshop › /haremshop 
.꒷🌳.𖦹˙ /deletechar › /delwaifu › /delchar + _<waifu>_
.꒷🌳.𖦹˙ /removerventa › /removesale + _<waifu>_
.꒷🌳.𖦹˙ /givechar › /regalar › /givewaifu + _<mention>_ + _<waifu>_
.꒷🌳.𖦹˙ /giveallharem + _<mention>_
.꒷🌳.𖦹˙ /ginfo › /infogacha › /gachainfo 
.꒷🌳.𖦹˙ /winfo › /charinfo › /cinfo + _<waifu>_
.꒷🌳.𖦹˙ /wimage › /charimage › /cimage + _<waifu>_
.꒷🌳.𖦹˙ /vote › /votar + _<waifu>_
.꒷🌳.𖦹˙ /accepttrade › /aceptarintercambio + _<solicitud>_
.꒷🌳.𖦹˙ /waifusboard › /topwaifus › /waifustop + _<mention>_

 .  . ︵ *ɢʀᴜᴘᴏ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /bot + _<on|off>_
.꒷🌳.𖦹˙ /promote + _<mention>_
.꒷🌳.𖦹˙ /demote + _<mention>_
.꒷🌳.𖦹˙ /setprimary + _<mention>_
.꒷🌳.𖦹˙ /warn + _<mention>_ + _<razón>_
.꒷🌳.𖦹˙ /warns + _<mention>_
.꒷🌳.𖦹˙ /delwarn + _<mention> <número|all>_
.꒷🌳.𖦹˙ /setwarnlimit + _<número>_
.꒷🌳.𖦹˙ /clear + _<delete|views>_
.꒷🌳.𖦹˙ /setgpbaner 
.꒷🌳.𖦹˙ /setgpname + _<text>_
.꒷🌳.𖦹˙ /setgpdesc + _<text>_
.꒷🌳.𖦹˙ /closet › /open 
.꒷🌳.𖦹˙ /welcome › /bienvenidas › /alerts › /alertas › /gacha › /rpg › /economy › /economia › /adminonly › /onlyadmin › /antilinks › /antilink › /antienlaces + _<on|off>_
.꒷🌳.𖦹˙ /groupinfo › /gp 
.꒷🌳.𖦹˙ /tag › /hidetag + _<text>_
.꒷🌳.𖦹˙ /kick + _<mention>_

 .  . ︵ *ɪᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /ia › /chatgpt + _<query>_

 .  . ︵ *ɪɴғᴏ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /allmenu › /menu › /help + _<category>_
.꒷🌳.𖦹˙ /cafi
.꒷🌳.𖦹˙ /ayuda + _<comando>_
.꒷🌳.𖦹˙ /infobot › /infosocket 
.꒷🌳.𖦹˙ /creador › /owner 
.꒷🌳.𖦹˙ /ping › /p 
.꒷🌳.𖦹˙ /report › /reporte + _<error>_
.꒷🌳.𖦹˙ /status 
.꒷🌳.𖦹˙ /sug › /suggest + _<suggest>_
.꒷🌳.𖦹˙ /invitar › /invite + _<link>_

 .  . ︵ *ɴsғᴡ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /xnxx + _<query|url>_
.꒷🌳.𖦹˙ /xvideos + _<query|url>_
.꒷🌳.𖦹˙ /danbooru › /dbooru + _<tag>_
.꒷🌳.𖦹˙ /gelbooru › /gbooru + _<tag>_
.꒷🌳.𖦹˙ /blowjob › /bj + _<mention>_
.꒷🌳.𖦹˙ /boobjob + _<mention>_
.꒷🌳.𖦹˙ /cum + _<mention>_
.꒷🌳.𖦹˙ /fap › /paja + _<mention>_
.꒷🌳.𖦹˙ /anal + _<mention>_
.꒷🌳.𖦹˙ /grabboobs + _<mention>_
.꒷🌳.𖦹˙ /footjob + _<mention>_
.꒷🌳.𖦹˙ /grope + _<mention>_
.꒷🌳.𖦹˙ /undress › /encuerar + _<mention>_
.꒷🌳.𖦹˙ /sixnine › /69 + _<mention>_
.꒷🌳.𖦹˙ /lickpussy + _<mention>_
.꒷🌳.𖦹˙ /spank › /nalgada + _<mention>_
.꒷🌳.𖦹˙ /fuck › /coger + _<mention>_
.꒷🌳.𖦹˙ /suckboobs + _<mention>_

 .  . ︵ *ᴘʀᴏғɪʟᴇ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /level › /levelup › /lvl + _<mention>_
.꒷🌳.𖦹˙ /marry + _<mention>_
.꒷🌳.𖦹˙ /divorce 
.꒷🌳.𖦹˙ /profile › /perfil 
.꒷🌳.𖦹˙ /setbirth + _<dia/mes/año|mes/dia>_
.꒷🌳.𖦹˙ /setpasatiempo › /sethobby 
.꒷🌳.𖦹˙ /delbirth 
.꒷🌳.𖦹˙ /delpasatiempo › /removehobby 
.꒷🌳.𖦹˙ /setdescription › /setdesc + _<text>_
.꒷🌳.𖦹˙ /deldescription › /deldesc 
.꒷🌳.𖦹˙ /setgenre + _<hombre|mujer>_
.꒷🌳.𖦹˙ /delgenre 

 .  . ︵ *sᴇᴀʀᴄʜ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /pinterest › /pin + _<query>_
.꒷🌳.𖦹˙ /imagen › /img + _<query>_
.꒷🌳.𖦹˙ /aptoide › /apk › /apkdl + _<query>_
.꒷🌳.𖦹˙ /ytsearch › /search + _<query>_
.꒷🌳.𖦹˙ /ttsearch › /tiktoksearch › /tts + _<query>_

 .  . ︵ *sᴏᴄᴋᴇᴛs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /bots › /sockets 
.꒷🌳.𖦹˙ /logout 
.꒷🌳.𖦹˙ /code 
.꒷🌳.𖦹˙ /self + _<on|off>_
.꒷🌳.𖦹˙ /setbotname › /setname + _<value>_
.꒷🌳.𖦹˙ /setbanner › /setmenubanner
.꒷🌳.𖦹˙ /seticon
.꒷🌳.𖦹˙ /setbotprefix + _<value>_
.꒷🌳.𖦹˙ /setbotcurrency + _<value>_
.꒷🌳.𖦹˙ /setbotowner + _<value>_
.꒷🌳.𖦹˙ /setchannel + _<value>_
.꒷🌳.𖦹˙ /setusername + _<value>_
.꒷🌳.𖦹˙ /setstatus + _<value>_
.꒷🌳.𖦹˙ /setpfp › /setimage 
.꒷🌳.𖦹˙ /leave 

 .  . ︵ *ᴜᴛɪʟs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ /sticker › /s  
.꒷🌳.𖦹˙ /getpic › /pfp + _<mention>_ 
.꒷🌳.𖦹˙ /translate + _<idioma>_ + _<text>_
.꒷🌳.𖦹˙ /get + _<url>_
.꒷🌳.𖦹˙ /setmeta + _<packname> | <author>_
.꒷🌳.𖦹˙ /hd 

> *$namebot está siendo alojado desde cafirexos.com, si quieres más información usa /cafi* ૮(˶ᵔᵕᵔ˶)ა`.trim();

      const replacements = {
        $owner: owner ? (!isNaN(owner.replace(/@s\.whatsapp\.net$/, '')) ? `@${owner.split('@')[0]}` : owner) : 'Oculto por privacidad',
        $botType: botType,
        $device: device,
        $tiempo: tiempo,
        $tiempo2: tiempo2,
        $users: users.toLocaleString() || '0',
        $link: link,
        $sender: sender,
        $botname2: botname2,
        $botname: botname2,
        $namebot: botname2,
        $prefix: prefix,
        $uptime: time
      };

      for (const [key, value] of Object.entries(replacements)) {
        menu = menu.replace(new RegExp(`\\${key}`, 'g'), value);
      }

      if (banner.endsWith('.mp4') || banner.endsWith('.gif') || banner.endsWith('.webm')) {
        await client.sendMessage(
          m.chat,
          {
            video: { url: banner },
            gifPlayback: true,
            caption: menu,
            contextInfo: {
              mentionedJid: [owner, m.sender],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: canalId,
                serverMessageId: '0',
                newsletterName: canalName
              }
            }
          },
          { quoted: m }
        );
      } else {
        await client.sendMessage(
          m.chat,
          {
            text: menu,
            contextInfo: {
              mentionedJid: [owner, m.sender],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: canalId,
                serverMessageId: '0',
                newsletterName: canalName
              },
              externalAdReply: {
                title: botname,
                body: `${botname2}, Built With 💛 By Stellar`,
                showAdAttribution: false,
                thumbnailUrl: banner,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true
              }
            }
          },
          { quoted: m }
        );
      }
    } catch (e) {
      await m.reply(msgglobal);
    }
  }
};

function formatearMs(ms) {
  const segundos = Math.floor(ms / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  return [dias && `${dias}d`, `${horas % 24}h`, `${minutos % 60}m`, `${segundos % 60}s`].filter(Boolean).join(" ");
}
