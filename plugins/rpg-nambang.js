let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastnambang)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.pickaxe < 1) return m.reply(`*Kamu tidak memiliki Pickaxe*\n*Silahkan membeli Pickaxe si shop dengan mengetik _${usedPrefix}buy pickaxe_ atau _${usedPrefix}craft pickaxe_ agar kamu bisa nambang*`)
    if (user.pickaxedurability < 10) return m.reply(`Durability pickaxe anda kurang\nSilahkan repair pickaxe agar bisa nambang dengan menggunakan command _${usedPrefix}repair pickaxe_`)
    
    if (user.stamina < 20) return m.reply('Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_')
    if (user.lastnambang > 10800000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk kerja nambang')
    
    let rndm1 = `${Math.floor(Math.random() * 5)}`
		let rndm2 = `${Math.floor(Math.random() * 10)}`
		let rndm3 = `${Math.floor(Math.random() * 7)}`
		let rndm4 = `${Math.floor(Math.random() * 4)}`
		let rndm5 = `${Math.floor(Math.random() * 200)}`
		let rndm6 = `${Math.floor(Math.random() * 200)}`
		let rndm7 = `${Math.floor(Math.random() * 20)}`
		let rndm8 = `${Math.floor(Math.random() * 100)}`
		let rndm9 = `${Math.floor(Math.random() * 100)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)
let ran4 = (rndm4 * 10)
let ran5 = (rndm5 * 10)
let ran6 = (rndm6 * 10)
let ran7 = (rndm7 * 10)
let ran8 = (rndm8 * 10)
let ran9 = (rndm9 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`
let hmsil4 = `${ran4}`
let hmsil5 = `${ran5}`
let hmsil6 = `${ran6}`
let hmsil7 = `${ran7}`
let hmsil8 = `${ran8}`
let hmsil9 = `${ran9}`

let jln = `
⬛⬛⬛⬛⬛⬛⬛⬛🚶⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

✔️ Wait....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛🚶
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

➕ Menemukan Area....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🚶

➕ Mulai Menambang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🚶

➕ 💹Menerima gaji....
`

let hsl = `
*《 Hasil Nambang Kali Ini 》*

 *💎 = [ ${hmsil1} ] Diamond*
 *⛓️ = [ ${hmsil2} ] Iron*
 *🪙 = [ ${hmsil3} ] Gold*
 *💚 = [ ${hmsil4} ] Emerald*
 *🪨 = [ ${hmsil5} ] Rock*
 *🌕 = [ ${hmsil6} ] Clay*
 *🕳️ = [ ${hmsil7} ] Coal*
 *🌑 = [ ${hmsil8} ] Sand*
 *✉️ = [ ${hmsil9} ] Exp*
 
 Stamina anda berkurang -20
`

user.diamond += hmsil1
		user.iron += hmsil2
		user.gold += hmsil3
		user.emerald += hmsil4
		user.rock += hmsil5
		user.clay += hmsil6
		user.coal += hmsil7
		user.sand += hmsil8
		user.exp += hmsil9
		user.stamina -= 20
	
setTimeout(() => {
                     conn.sendButton(m.chat, hsl, wm, null, [
		['Inventory', '/inv']
	], m)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${jln4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${jln3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${jln2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${jln}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply(`🔍Mencari Area Nambang.....`)
                     }, 0) 
  user.lastnambang = new Date * 1
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang|menambang)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
