import fetch from 'node-fetch'

const usedIds = new Set()

function generateUniqueFilename(mime) {
  const ext = mime.split('/')[1] || 'bin'
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id
  do {
    id = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  } while (usedIds.has(id))
  usedIds.add(id)
  return `${id}.${ext}`
}

const uploadToUguu = async (buffer, mime) => {
  const filename = generateUniqueFilename(mime)
  const form = new FormData()
  form.append('files[]', buffer, filename)

  const res = await fetch('https://uguu.se/upload.php', {
    method: 'POST',
    body: form
  })

  const json = await res.json()
  return json?.files?.[0]?.url || null
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`
}

export default {
  command: ['tourl'],
  category: 'utils',
  run: async (client, m, command) => {

    const q = m.quoted || m
    const mime = (q.msg || q).mimetype || ''
    if (!mime) {
      return client.reply(
        m.chat,
        `《✧》 Por favor, responde a una imagen o video con el comando *${prefa}tourl* para convertirlo en una URL.`,
        m
      )
    }

    try {
      const media = await q.download()
      const link = await uploadToUguu(media, mime)

      if (!link) {
        return client.reply(m.chat, '《✧》 No se pudo subir el archivo a Uguu.', m)
      }

      const userName = global.db.data.users[m.sender]?.name || 'Usuario'
      const upload = `ꕥ *Upload To Uguu*\n\n✎ *Link ›* ${link}\n✰ *Peso ›* ${formatBytes(media.length)}\n✿ *Solicitado por ›* ${userName}\n\n${dev}`

      await client.reply(m.chat, upload, m)
    } catch (e) {
      await m.reply(msgglobal + e)
    }
  }
}