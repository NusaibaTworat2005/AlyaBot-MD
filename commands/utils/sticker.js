import fs from 'fs'
import { execSync } from 'child_process'

export default {
command: ['sticker', 's'],
category: 'utils',
run: async (client, m) => {

try {
let media
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

let user = globalThis.db.data.users[m.sender];
const name = user.name;
let text1 = user.metadatos || `S'ᴛᴇʟʟᴀʀ 🧠 WᴀBᴏᴛ`;
let text2 = user.metadatos2 || `@${name}`;

if (mime === 'image/webp') {
    media = await quoted.download()

    let tmpMp4 = './tmp_sticker.mp4'
    execSync(`ffmpeg -i ${media} -movflags faststart -pix_fmt yuv420p ${tmpMp4}`)

    let encmedia = await client.sendVideoAsSticker(
        m.chat,
        fs.readFileSync(tmpMp4),
        m,
        { packname: text1, author: text2 }
    )

    fs.unlinkSync(tmpMp4)
    return
}

if (/image/.test(mime)) {
    media = await quoted.download()
    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: text1, author: text2 })
    await fs.unlinkSync(encmedia)
    return
}

if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 20) {
        return m.reply('ꕥ El video no puede ser muy largo')
    }

    media = await quoted.download()
    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: text1, author: text2 })
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await fs.unlinkSync(encmedia)
    return
}

return client.reply(m.chat, '✐ Por favor, envia una imagen, video o sticker animado.', m)

} catch (e) {
    m.reply('Error: ' + e)
}}
};