export default {
  command: ['cafi'],
  category: 'info',
  run: async (client, m) => {

    const caption = `☃️ *Cafirexos — Hosting*

.꒷🌳.𖦹˙ *Sitio Web:*  
https://cafirexos.com

.꒷🎍.𖦹˙ *Área de Clientes:*  
https://cafirexos.com/clientarea.php

.꒷🦦.𖦹˙ *Panel:*  
https://panel.cafirexos.com

.꒷🌱.𖦹˙ *Estado de Servicios:*  
https://estado.cafirexos.com

.꒷🌾.𖦹˙ *Canal de WhatsApp:*  
https://links.cafirexos.com/whatsapp/canal

.꒷🦩.𖦹˙ *Soporte:*  
https://cafirexos.com/contactenos
`;

    await client.sendMessage(m.chat, {
      image: { url: "https://cdn.cafirexos.com/logos/logo_cfros_2000x2000.png" },
      caption
    }, { quoted: m });

  }
};