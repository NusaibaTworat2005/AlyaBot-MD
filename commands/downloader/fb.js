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
      const keys = api.key
      const res = await axios.get(`${api.url}/dl/facebookv2`, {
        params: { url: args[0], key: keys },
        responseType: 'arraybuffer' 
      })

      const buffer = Buffer.from(res.data)

      const caption = `🅕𝖡 🅓ownload

*Enlace* › ${args[0]}`

      await client.sendMessage(
        m.chat,
        { video: buffer, caption, mimetype: 'video/mp4', fileName: 'fb.mp4' },
        { quoted: m }
      )
    } catch (e) {
      await m.reply(msgglobal + e)
    }
  }
}