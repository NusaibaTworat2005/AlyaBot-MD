> [!IMPORTANT]
> **Este proyecto está en constante evolución. Estamos comprometidos en ofrecer a nuestra comunidad un Bot increíble. Te invitamos a instalarlo y para estar al tanto de todas las novedades. [¡Únete a nuestro nuevo canal!](https://stellarw.xyz/channel)**

<p align="center"> 
<img src="https://cdn.stellarwa.xyz/files/1757603651149.jpeg" alt="AlyaBot-MD" style="width: 75%; height: auto; max-width: 100px;">

<p align="center"> 
<a href="#"><img title="AlyaBot-MD" src="https://img.shields.io/badge/¡Disfruta de un Bot totalmente gratuito, con múltiples funciones y de código abierto! -purple?colorA=%239b33b0&colorB=%231c007b&style=for-the-badge"></a> 
</p>

---

## 🪻 Descripción 

Alya Bot es un bot de WhatsApp multifuncional basado en `baileys`. Este bot ofrece una variedad de características para mejorar tu experiencia en WhatsApp.

---

## 🪻 Características

- Respuestas automáticas
- Gestión de grupos
- Juegos interactivos
- Integración con APIs externas

---

## Instalación por Termux
> [!IMPORTANT]
> **No garantizamos un funcionamiento perfecto en Termux, aunque trabajamos constantemente para asegurar una buena compatibilidad. Si experimentas lentitud o errores, por favor envía una solicitud con la evidencia correspondiente para que nuestro equipo pueda solucionarlo. Si el problema persiste, te recomendamos considerar los servicios de alojamiento de bots de nuestros patrocinadores.**

<details>
  <summary><b>🍄 Instalación Manual</b></summary>

> *Comandos para instalar de forma manual*
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/DevZyxlJs/AlyaBot-MD && cd AlyaBot-MD
```
```bash
yarn install
```
```bash
npm install
```
```bash
npm start
```
> *Si aparece **(Y/I/N/O/D/Z) [default=N] ?** use la letra **"y"** y luego **"ENTER"** para continuar con la instalación.*
</details>

<details>
  <summary><b>🪻 Comandos para mantener más tiempo activo el Bot</b></summary>

> *Ejecutar estos comandos dentro de la carpeta AlyaBot-MD*
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### Opciones Disponibles
> *Esto eliminará todo el historial que hayas establecido con PM2:*
```bash 
pm2 delete index
``` 
> *Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:*
```bash 
pm2 logs 
``` 
> *Si desea detener la ejecución de Termux use:*
```bash 
pm2 stop index
``` 
> *Si desea iniciar de nuevo la ejecución de Termux use:*
```bash 
pm2 start index
```
---- 
### En caso de detenerse
> _Si despues que ya instalastes tu bot y termux te salta en blanco, se fue tu internet o reiniciaste tu celular, solo realizaras estos pasos:_
```bash
cd && cd AlyaBot-MD && npm start
```
----
### Obtener nuevo código QR 
> *Detén el bot, haz click en el símbolo (ctrl) [default=z] usar la letra "z" + "ENTER" hasta que salga algo verdes similar a: `AlyaBot-MD $`*
> **Escribe los siguientes comando uno x uno :**
```bash 
cd && cd AlyaBot-MD && rm -rf Sessions && npm run qr
```
----
### Obtener nuevo código de teléfono 
```bash 
cd && cd AlyaBot-MD && rm -rf Sessions && npm run code
```
</details>

<details>
<summary><b>🫛 Actualizar AlyaBot</b></summary>

> **Utiliza esta opción únicamente si deseas actualizar a la última versión de AlyaBot. Hemos implementado un método ingenioso mediante comandos para realizar la actualización, pero ten en cuenta que al usarla se eliminarán todos los archivos de la versión actual y se reemplazarán con los de la nueva versión. Solo se conservará la base de datos, por lo que será necesario volver a vincular el Bot.**  

**Comandos para actualizar AlyaBot-MD de forma automática**

```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/DevZyxlJs/AlyaBot-MD/master/update.sh | bash 
```
#### Para que no pierda su progreso en AlyaBot, estos comandos realizarán un respaldo de su `datos.json` y se agregará a la versión más reciente.
> *Estos comandos solo funcionan para TERMUX, REPLIT, LINUX*
</details>

---

### Patrocinadores del Proyecto

<details>
<summary><strong>☁️ Stellar API</strong> — Hosting</summary>

<div align="center">
  <a href="https://api.stellarwa.xyz">
    <img src="https://api.stellarwa.xyz/favicon.ico" alt="Logo" height="125px">
  </a>
</div>

### 🌱 Enlaces Oficiales
| Servicio | Enlace |
|------------|-----------|
| Soporte | [Visitar](https://api.stellarwa.xyz/ticket) |
| Dashboard | [Abrir](https://api.stellarwa.xyz) |
| Store | [Abrir](https://api.stellarwa.xyz/store) |
| Estado de Servicios | [Ver](https://stellarwa.xyz/status) 

</details>

---

### 🫛 Colaboradores
<a href="https://github.com/DevZyxlJs/AlyaBot-MD/graphs/contributors">
<img src="https://contrib.rocks/image?repo=DevZyxlJs/AlyaBot-MD" /> 
</a> 

### 🌾 Autor Del Proyecto
[![ZyxlJs](https://github.com/DevZyxlJs.png?size=100)](https://github.com/DevZyxlJs) 