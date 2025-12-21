import axios from 'axios'

export default {
  command: ['fb', 'facebook'],
  category: 'downloader',
  run: async (client, m, args) => {

    if (!args[0]) {
      return m.reply('ꕥ Ingrese un enlace de *Facebook*')
    }

    if (!args[0].match(/facebook\.com|fb\.watch|video\.fb\.com/)) {
      return m.reply('《✧》Por favor, envía un link de Facebook válido')
    }

    try {
      let keys = api.key
      const res = await axios.get(`${api.url}/dl/facebookv2`, {
        params: {
          url: args[0],
          key: keys
        }
      })

      const json = res.data
      const results = json?.data?.results?.filter(v =>
        v.url && v.url !== '/' && v.quality
      )

      if (!json.status || !results || results.length === 0) {
        return m.reply('ꕥ No se pudo obtener el *video*')
      }

      const random = results[Math.floor(Math.random() * results.length)]
      const videoUrl = random.url
      const quality = random.quality

      const caption = `ㅤ۟∩　ׅ　★　ׅ　🅕𝖡 🅓ownload　ׄᰙ　

𖣣ֶㅤ֯⌗ ☆  ׄ ⬭ *Enlace* › ${args[0]}
𖣣ֶㅤ֯⌗ ☆  ׄ ⬭ *Calidad* › ${quality}`.trim()

      await client.sendMessage(
        m.chat,
        { video: { url: videoUrl }, caption, mimetype: 'video/mp4', fileName: 'fb.mp4' },
        { quoted: m }
      )
    } catch (e) {
      await m.reply(msgglobal + e)
    }
  }
}