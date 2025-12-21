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
      const res = await axios.get(`${api.url}/dl/facebookv2`, {
        params: {
          url: encodeURIComponent(args[0]),
          key: 'ZyxlJs'
        }
      })

      const json = res.data
      const results = json?.data?.results?.filter(v => v.url && v.quality)

      if (!json.status || !results || results.length === 0) {
        return m.reply('ꕥ No se pudo obtener el *video*')
      }

      const best = results.find(v => v.quality.includes('1080')) || results[0]
      const videoUrl = best.url
      const quality = best.quality

      const caption = `🅕𝖡 🅓ownload

*Enlace* › ${args[0]}
*Calidad* › ${quality}`

      await client.sendMessage(
        m.chat,
        { video: { url: videoUrl }, caption, mimetype: 'video/mp4', fileName: 'fb.mp4' },
        { quoted: m }
      )
    } catch (e) {
      await m.reply('ꕥ Error: ' + e.message)
    }
  }
}