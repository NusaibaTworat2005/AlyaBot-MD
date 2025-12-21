import fetch from 'node-fetch'

export default {
  command: ['instagram', 'ig'],
  category: 'downloader',
  run: async (client, m, args) => {

    const url = args[0]

    if (!url) {
      return m.reply('《✧》 Ingrese un enlace de *Instagram*.')
    }

    if (!url.match(/instagram\.com\/(p|reel|share|tv)\//)) {
      return m.reply('《✧》 El enlace no parece *válido*. Asegúrate de que sea de *Instagram*')
    }

    try {
      const res = await fetch(`${api.url}/dl/instagramv2?url=${encodeURIComponent(url)}&key=${api.key}`)
      const json = await res.json()

      if (!json.status || !json.data) {
        return client.reply(m.chat, '《✧》 No se pudo *obtener* el contenido', m)
      }

      const { type, username, caption, mediaUrls, stats } = json.data

      const captionMsg = `ㅤ۟∩　ׅ　★ ໌　ׅ　🅘𝖦 🅓ownload　ׄᰙ

𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Usuario* › ${username}
𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Tipo* › ${type}
𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Likes* › ${stats?.likes || 0}
𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Comentarios* › ${stats?.comments || 0}
𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Enlace* › ${url}
𖣣ֶㅤ֯⌗ ❀  ׄ ⬭ *Caption* › ${caption || 'Sin descripción'}
`.trim()

      if (type === 'video') {
        await client.sendMessage(
          m.chat,
          { video: { url: mediaUrls[0] }, caption: captionMsg, mimetype: 'video/mp4', fileName: 'ig.mp4' },
          { quoted: m }
        )
      } else if (type === 'image' || type === 'carousel') {
        for (const img of mediaUrls) {
          await client.sendMessage(
            m.chat,
            { image: { url: img }, caption: captionMsg },
            { quoted: m }
          )
        }
      } else {
        return client.reply(m.chat, '《✧》 Tipo de contenido no soportado', m)
      }

    } catch (e) {
      await client.reply(m.chat, msgglobal, m)
    }
  }
}