import fetch from 'node-fetch';
import { getDevice } from '@whiskeysockets/baileys';
import fs from 'fs';
import axios from 'axios';
import moment from 'moment-timezone';

export default {
  command: ['allmenu', 'help', 'menu'],
  category: 'info',
  run: async (client, m, args, command, text, prefix) => {
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

      const isOficialBot = botId === global.client.user.id.split(':')[0] + '@s.whatsapp.net';
      const botType = isOficialBot
        ? 'Principal/Owner'
            : 'Sub Bot';
      const users = Object.keys(global.db.data.users).length;
      const device = getDevice(m.key.id);
      const sender = global.db.data.users[m.sender].name;

const time = client.uptime ? formatearMs(Date.now() - client.uptime) : "Desconocido"

      let menu = `> *¡ʜᴏʟᴀ!* $sender, como está tu día?, mucho gusto mi nombre es *$namebot*

*┏━ ${botname} ━⊜*
┃⋄ 📅 *Fecha* :: $tiempo, $tiempo2
┃⋄ </> *Developer* :: $owner
┃⋄ 🌾 *Tipo* :: $botType
┃⋄ 🌱 *Usuarios* :: $users
┃⋄ 🍃 *Sistema* :: $device
┃⋄ 🦋 *Enlace* :: $link
┃⋄ ☃️ *Uptime* :: $uptime
┗━━◘

乂 *ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* 乂

 .  . ︵ *ᴀɴɪᴍᴇ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixpeek + _<mention>_
.꒷🌳.𖦹˙ $prefixcomfort + _<mention>_
.꒷🌳.𖦹˙ $prefixthinkhard + _<mention>_
.꒷🌳.𖦹˙ $prefixcurious + _<mention>_
.꒷🌳.𖦹˙ $prefixsniff + _<mention>_
.꒷🌳.𖦹˙ $prefixstare + _<mention>_
.꒷🌳.𖦹˙ $prefixtrip + _<mention>_
.꒷🌳.𖦹˙ $prefixblowkiss + _<mention>_
.꒷🌳.𖦹˙ $prefixsnuggle + _<mention>_
.꒷🌳.𖦹˙ $prefixangry + _<mention>_
.꒷🌳.𖦹˙ $prefixbleh + _<mention>_
.꒷🌳.𖦹˙ $prefixbored › $prefixaburrido + _<mention>_
.꒷🌳.𖦹˙ $prefixclap + _<mention>_
.꒷🌳.𖦹˙ $prefixcoffee › $prefixcafe + _<mention>_
.꒷🌳.𖦹˙ $prefixcold + _<mention>_
.꒷🌳.𖦹˙ $prefixsing + _<mention>_
.꒷🌳.𖦹˙ $prefixtickle + _<mention>_
.꒷🌳.𖦹˙ $prefixscream + _<mention>_
.꒷🌳.𖦹˙ $prefixpush + _<mention>_
.꒷🌳.𖦹˙ $prefixnope + _<mention>_
.꒷🌳.𖦹˙ $prefixjump + _<mention>_
.꒷🌳.𖦹˙ $prefixheat + _<mention>_
.꒷🌳.𖦹˙ $prefixgaming + _<mention>_
.꒷🌳.𖦹˙ $prefixdraw + _<mention>_
.꒷🌳.𖦹˙ $prefixcall + _<mention>_
.꒷🌳.𖦹˙ $prefixdramatic › $prefixdrama + _<mention>_
.꒷🌳.𖦹˙ $prefixdrunk + _<mention>_
.꒷🌳.𖦹˙ $prefiximpregnate › $prefixpreg + _<mention>_
.꒷🌳.𖦹˙ $prefixkisscheek › $prefixbeso + _<mention>_
.꒷🌳.𖦹˙ $prefixlaugh + _<mention>_
.꒷🌳.𖦹˙ $prefixlove › $prefixamor + _<mention>_
.꒷🌳.𖦹˙ $prefixpout + _<mention>_
.꒷🌳.𖦹˙ $prefixpunch + _<mention>_
.꒷🌳.𖦹˙ $prefixrun › $prefixcorrer + _<mention>_
.꒷🌳.𖦹˙ $prefixsad › $prefixtriste + _<mention>_
.꒷🌳.𖦹˙ $prefixscared + _<mention>_
.꒷🌳.𖦹˙ $prefixseduce + _<mention>_
.꒷🌳.𖦹˙ $prefixshy › $prefixtimido + _<mention>_
.꒷🌳.𖦹˙ $prefixsleep + _<mention>_
.꒷🌳.𖦹˙ $prefixsmoke › $prefixfumar + _<mention>_
.꒷🌳.𖦹˙ $prefixspit › $prefixescupir + _<mention>_
.꒷🌳.𖦹˙ $prefixstep › $prefixpisar + _<mention>_
.꒷🌳.𖦹˙ $prefixthink + _<mention>_
.꒷🌳.𖦹˙ $prefixwalk + _<mention>_
.꒷🌳.𖦹˙ $prefixhug + _<mention>_
.꒷🌳.𖦹˙ $prefixkill + _<mention>_
.꒷🌳.𖦹˙ $prefixeat › $prefixnom › $prefixcomer + _<mention>_
.꒷🌳.𖦹˙ $prefixkiss › $prefixmuak + _<mention>_
.꒷🌳.𖦹˙ $prefixwink + _<mention>_
.꒷🌳.𖦹˙ $prefixpat + _<mention>_
.꒷🌳.𖦹˙ $prefixhappy › $prefixfeliz + _<mention>_
.꒷🌳.𖦹˙ $prefixbully + _<mention>_
.꒷🌳.𖦹˙ $prefixbite › $prefixmorder + _<mention>_
.꒷🌳.𖦹˙ $prefixblush + _<mention>_
.꒷🌳.𖦹˙ $prefixwave + _<mention>_
.꒷🌳.𖦹˙ $prefixbath + _<mention>_
.꒷🌳.𖦹˙ $prefixsmug + _<mention>_
.꒷🌳.𖦹˙ $prefixsmile + _<mention>_
.꒷🌳.𖦹˙ $prefixhighfive + _<mention>_
.꒷🌳.𖦹˙ $prefixhandhold + _<mention>_
.꒷🌳.𖦹˙ $prefixcringe + _<mention>_
.꒷🌳.𖦹˙ $prefixbonk + _<mention>_
.꒷🌳.𖦹˙ $prefixcry + _<mention>_
.꒷🌳.𖦹˙ $prefixlick + _<mention>_
.꒷🌳.𖦹˙ $prefixslap + _<mention>_
.꒷🌳.𖦹˙ $prefixdance + _<mention>_
.꒷🌳.𖦹˙ $prefixcuddle + _<mention>_

 .  . ︵ *ᴅᴏᴡɴʟᴏᴀᴅs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixfacebook › $prefixfb + _<url>_
.꒷🌳.𖦹˙ $prefixmediafire › $prefixmf + _<query|url>_
.꒷🌳.𖦹˙ $prefixgdrive › $prefixdrive + _<url>_
.꒷🌳.𖦹˙ $prefixinstagram › $prefixig + _<url>_
.꒷🌳.𖦹˙ $prefixtiktok › $prefixtt + _<url|query>_
.꒷🌳.𖦹˙ $prefixplay › $prefixmp3 › $prefixplayaudio › $prefixytaudio › $prefixytmp3 + _<url|query>_
.꒷🌳.𖦹˙ $prefixplay2 › $prefixmp4 › $prefixplayvideo › $prefixytvideo › $prefixytmp4 + _<url|query>_

 .  . ︵ *ᴇᴄᴏɴᴏᴍɪᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixbalance › $prefixbal + _<mention>_
.꒷🌳.𖦹˙ $prefixsteal › $prefixrob › $prefixrobar + _<mention>_
.꒷🌳.𖦹˙ $prefixcrime 
.꒷🌳.𖦹˙ $prefixritual 
.꒷🌳.𖦹˙ $prefixgivecoins › $prefixpay › $prefixcoinsgive + _<cantidad|all>_ + _<mention>_
.꒷🌳.𖦹˙ $prefixppt + _<piedra|papel|tijera>_
.꒷🌳.𖦹˙ $prefixwaittimes › $prefixcooldowns › $prefixeconomyinfo › $prefixeinfo 
.꒷🌳.𖦹˙ $prefixeconomyboard › $prefixbaltop › $prefixeboard + _<página>_
.꒷🌳.𖦹˙ $prefixslut 
.꒷🌳.𖦹˙ $prefixmine 
.꒷🌳.𖦹˙ $prefixrt › $prefixroulette › $prefixruleta + _<cantidad>_ + _<red|black|green>_
.꒷🌳.𖦹˙ $prefixcoinflip › $prefixflip › $prefixcf + _<bet>_
.꒷🌳.𖦹˙ $prefixdaily 
.꒷🌳.𖦹˙ $prefixmonthly › $prefixmensual 
.꒷🌳.𖦹˙ $prefixweekly › $prefixsemanal 
.꒷🌳.𖦹˙ $prefixwork › $prefixw 
.꒷🌳.𖦹˙ $prefixmath › $prefixmatematicas + _<dificultad>_
.꒷🌳.𖦹˙ $prefixdeposit › $prefixdep › $prefixd + _<cantidad|all>_
.꒷🌳.𖦹˙ $prefixwithdraw › $prefixwith + _<cantidad|all>_

 .  . ︵ *ɢᴀᴄʜᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixrw › $prefixroll › $prefixrollwaifu › $prefixrf 
.꒷🌳.𖦹˙ $prefixc › $prefixclaim › $prefixbuy + _<waifu>_
.꒷🌳.𖦹˙ $prefixharem › $prefixmiswaifus › $prefixclaims 
.꒷🌳.𖦹˙ $prefixsell › $prefixvender + _<waifu>_ + _<value>_
.꒷🌳.𖦹˙ $prefixbuyc › $prefixbuycharacter › $prefixbuychar + _<waifu>_
.꒷🌳.𖦹˙ $prefixtrade › $prefixcambiar + _<tu personaje $prefix personaje 2>_
.꒷🌳.𖦹˙ $prefixanimelist › $prefixslist › $prefixserielist 
.꒷🌳.𖦹˙ $prefixanimeinfo › $prefixainfo › $prefixserieinfo + _<anime>_
.꒷🌳.𖦹˙ $prefixtiendawaifus › $prefixwshop › $prefixharemshop 
.꒷🌳.𖦹˙ $prefixdeletechar › $prefixdelwaifu › $prefixdelchar + _<waifu>_
.꒷🌳.𖦹˙ $prefixremoverventa › $prefixremovesale + _<waifu>_
.꒷🌳.𖦹˙ $prefixgivechar › $prefixregalar › $prefixgivewaifu + _<mention>_ + _<waifu>_
.꒷🌳.𖦹˙ $prefixgiveallharem + _<mention>_
.꒷🌳.𖦹˙ $prefixginfo › $prefixinfogacha › $prefixgachainfo 
.꒷🌳.𖦹˙ $prefixwinfo › $prefixcharinfo › $prefixcinfo + _<waifu>_
.꒷🌳.𖦹˙ $prefixwimage › $prefixcharimage › $prefixcimage + _<waifu>_
.꒷🌳.𖦹˙ $prefixvote › $prefixvotar + _<waifu>_
.꒷🌳.𖦹˙ $prefixaccepttrade › $prefixaceptarintercambio + _<solicitud>_
.꒷🌳.𖦹˙ $prefixwaifusboard › $prefixtopwaifus › $prefixwaifustop + _<mention>_

 .  . ︵ *ɢʀᴜᴘᴏ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixbot + _<on|off>_
.꒷🌳.𖦹˙ $prefixpromote + _<mention>_
.꒷🌳.𖦹˙ $prefixdemote + _<mention>_
.꒷🌳.𖦹˙ $prefixsetprimary + _<mention>_
.꒷🌳.𖦹˙ $prefixwarn + _<mention>_ + _<razón>_
.꒷🌳.𖦹˙ $prefixwarns + _<mention>_
.꒷🌳.𖦹˙ $prefixdelwarn + _<mention> <número|all>_
.꒷🌳.𖦹˙ $prefixsetwarnlimit + _<número>_
.꒷🌳.𖦹˙ $prefixclear + _<delete|views>_
.꒷🌳.𖦹˙ $prefixsetgpbaner 
.꒷🌳.𖦹˙ $prefixsetgpname + _<text>_
.꒷🌳.𖦹˙ $prefixsetgpdesc + _<text>_
.꒷🌳.𖦹˙ $prefixcloset › $prefixopen 
.꒷🌳.𖦹˙ $prefixwelcome › $prefixbienvenidas › $prefixalerts › $prefixalertas › $prefixgacha › $prefixrpg › $prefixeconomy › $prefixeconomia › $prefixadminonly › $prefixonlyadmin › $prefixantilinks › $prefixantilink › $prefixantienlaces + _<on|off>_
.꒷🌳.𖦹˙ $prefixgroupinfo › $prefixgp 
.꒷🌳.𖦹˙ $prefixtag › $prefixhidetag + _<text>_
.꒷🌳.𖦹˙ $prefixkick + _<mention>_

 .  . ︵ *ɪᴀ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixia › $prefixchatgpt + _<query>_

 .  . ︵ *ɪɴғᴏ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixallmenu › $prefixmenu › $prefixhelp + _<category>_
.꒷🌳.𖦹˙ $prefixcafi
.꒷🌳.𖦹˙ $prefixayuda + _<comando>_
.꒷🌳.𖦹˙ $prefixinfobot › $prefixinfosocket 
.꒷🌳.𖦹˙ $prefixcreador › $prefixowner 
.꒷🌳.𖦹˙ $prefixping › $prefixp 
.꒷🌳.𖦹˙ $prefixreport › $prefixreporte + _<error>_
.꒷🌳.𖦹˙ $prefixstatus 
.꒷🌳.𖦹˙ $prefixsug › $prefixsuggest + _<suggest>_
.꒷🌳.𖦹˙ $prefixinvitar › $prefixinvite + _<link>_

 .  . ︵ *ɴsғᴡ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixxnxx + _<query|url>_
.꒷🌳.𖦹˙ $prefixxvideos + _<query|url>_
.꒷🌳.𖦹˙ $prefixdanbooru › $prefixdbooru + _<tag>_
.꒷🌳.𖦹˙ $prefixgelbooru › $prefixgbooru + _<tag>_
.꒷🌳.𖦹˙ $prefixblowjob › $prefixbj + _<mention>_
.꒷🌳.𖦹˙ $prefixboobjob + _<mention>_
.꒷🌳.𖦹˙ $prefixcum + _<mention>_
.꒷🌳.𖦹˙ $prefixfap › $prefixpaja + _<mention>_
.꒷🌳.𖦹˙ $prefixanal + _<mention>_
.꒷🌳.𖦹˙ $prefixgrabboobs + _<mention>_
.꒷🌳.𖦹˙ $prefixfootjob + _<mention>_
.꒷🌳.𖦹˙ $prefixgrope + _<mention>_
.꒷🌳.𖦹˙ $prefixundress › $prefixencuerar + _<mention>_
.꒷🌳.𖦹˙ $prefixsixnine › $prefix69 + _<mention>_
.꒷🌳.𖦹˙ $prefixlickpussy + _<mention>_
.꒷🌳.𖦹˙ $prefixspank › $prefixnalgada + _<mention>_
.꒷🌳.𖦹˙ $prefixfuck › $prefixcoger + _<mention>_
.꒷🌳.𖦹˙ $prefixsuckboobs + _<mention>_

 .  . ︵ *ᴘʀᴏғɪʟᴇ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixlevel › $prefixlevelup › $prefixlvl + _<mention>_
.꒷🌳.𖦹˙ $prefixmarry + _<mention>_
.꒷🌳.𖦹˙ $prefixdivorce 
.꒷🌳.𖦹˙ $prefixprofile › $prefixperfil 
.꒷🌳.𖦹˙ $prefixsetbirth + _<dia$prefixmes$prefixaño|mes$prefixdia>_
.꒷🌳.𖦹˙ $prefixsetpasatiempo › $prefixsethobby 
.꒷🌳.𖦹˙ $prefixdelbirth 
.꒷🌳.𖦹˙ $prefixdelpasatiempo › $prefixremovehobby 
.꒷🌳.𖦹˙ $prefixsetdescription › $prefixsetdesc + _<text>_
.꒷🌳.𖦹˙ $prefixdeldescription › $prefixdeldesc 
.꒷🌳.𖦹˙ $prefixsetgenre + _<hombre|mujer>_
.꒷🌳.𖦹˙ $prefixdelgenre 

 .  . ︵ *sᴇᴀʀᴄʜ*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixpinterest › $prefixpin + _<query>_
.꒷🌳.𖦹˙ $prefiximagen › $prefiximg + _<query>_
.꒷🌳.𖦹˙ $prefixaptoide › $prefixapk › $prefixapkdl + _<query>_
.꒷🌳.𖦹˙ $prefixytsearch › $prefixsearch + _<query>_
.꒷🌳.𖦹˙ $prefixttsearch › $prefixtiktoksearch › $prefixtts + _<query>_

 .  . ︵ *sᴏᴄᴋᴇᴛs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixbots › $prefixsockets 
.꒷🌳.𖦹˙ $prefixlogout 
.꒷🌳.𖦹˙ $prefixcode 
.꒷🌳.𖦹˙ $prefixself + _<on|off>_
.꒷🌳.𖦹˙ $prefixsetbotname › $prefixsetname + _<value>_
.꒷🌳.𖦹˙ $prefixsetbanner › $prefixsetmenubanner
.꒷🌳.𖦹˙ $prefixseticon
.꒷🌳.𖦹˙ $prefixsetbotprefix + _<value>_
.꒷🌳.𖦹˙ $prefixsetlink + _<value>_
.꒷🌳.𖦹˙ $prefixsetbotcurrency + _<value>_
.꒷🌳.𖦹˙ $prefixsetbotowner + _<value>_
.꒷🌳.𖦹˙ $prefixsetchannel + _<value>_
.꒷🌳.𖦹˙ $prefixsetusername + _<value>_
.꒷🌳.𖦹˙ $prefixsetstatus + _<value>_
.꒷🌳.𖦹˙ $prefixsetpfp › $prefixsetimage 
.꒷🌳.𖦹˙ $prefixleave 

 .  . ︵ *ᴜᴛɪʟs*.  ◌Ⳋ𝅄
.꒷🌳.𖦹˙ $prefixsticker › $prefixs  
.꒷🌳.𖦹˙ $prefixgetpic › $prefixpfp + _<mention>_ 
.꒷🌳.𖦹˙ $prefixtranslate + _<idioma>_ + _<text>_
.꒷🌳.𖦹˙ $prefixget + _<url>_
.꒷🌳.𖦹˙ $prefixsetmeta + _<packname> | <author>_
.꒷🌳.𖦹˙ $prefixhd
.꒷🌳.𖦹˙ $prefixtourl

> *$namebot está siendo alojado desde cafirexos.com, si quieres más información usa $prefixcafi* ૮(˶ᵔᵕᵔ˶)ა`.trim();

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
