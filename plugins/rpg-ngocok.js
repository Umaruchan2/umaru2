let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastngocok)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.stamina < 20) return m.reply('Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_')
    if (user.lastngocok > 10800000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk kerja ngocok')
    
    let rndm1 = `${Math.floor(Math.random() * 300)}`
		let rndm2 = `${Math.floor(Math.random() * 3000)}`
		let rndm3 = `${Math.floor(Math.random() * 300)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`

let jln = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

✔️ Mencari area....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ Hampir sampai....
`

let jln3 = `https://media.tenor.com/videos/5f5982450feb636f492022fc9bfa25cd/mp4`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🚶

➕ 💹Menerima hasil....
`

let hsl = `
*《 Hasil ngocok Kali Ini 》*
 *💹 = [ ${hmsil1} ] money*
 *🌳 = [ ${hmsil2} ] Esteh*
 *🌳 = [ ${hmsil3} ] Ganja*
 *✉️ = [ ${hmsil4} ] exp*
 
 Stamina anda berkurang -20
`

user.axedurability -= 5
user.stamina -= 20
user.money -= hmsil1
user.esteh += hmsil2
user.ganja += hmsil3
user.exp += hmsil4
	
setTimeout(() => {
                     conn.sendButton(m.chat, hsl, wm, null, [
		['Inventory', '/inv']
	], m)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${jln4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.sendMessage(m.chat, { video: { url: jln3 }, caption: `Mulai mengocok...`}, { quoted: fvid })
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${jln2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${jln}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply(`🔍Mencari Area ngocok.....`)
                     }, 0) 
  user.lastngocok = new Date * 1
}
handler.help = ['ngocok']
handler.tags = ['rpg']
handler.command = /^(ngocok|mengocok)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
