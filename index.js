const { Client, Intents } = require("discord.js")
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

global.work = 25 * 60
global.small = 5 * 60
global.big = 15 * 60
global.times = 4

global.early = 20 * 60
global.busy = 0
global.earlytime = 0
global.mute = 1
global.left = "yeye"
global.stop = 0
global.extra = 0
global.list = []

var fs = require("fs")
var qu = fs.readFileSync("yamister.txt").toString().split("\n")
var token = fs.readFileSync("no").toString().split("\n")
qu.splice(-1)
var an = fs.readFileSync("n3m.txt").toString().split("\n")
an.splice(-1)

const ytdl = require("ytdl-core")

client.on("message", async (message) => {
	if (!message.guild) return
	global.message = message
	if (qu.includes(message.content)) {
		if (!message.member.voice.channel) {
			message.channel.send(an[qu.indexOf(message.content)])
			await sleep(1000)
			message.channel.send("انت فين")
			await sleep(2000)
			message.channel.send("انا مش شايفك فى الفصل")
		} else {
			if (global.busy === 0) {
				global.busy = 1
				//    await sleep(5000)
				await message.channel.send(an[qu.indexOf(message.content)])

				global.members = message.member.voice.channel.members
				async function bell() {
					if (stop !== 1) { 
						global.members = message.member.voice.channel.members
						global.members.forEach((member) => {
							if (member.user.bot === true) {
								if (member.user.username !== client.user.username) {
									member.voice.setMute(true)
								}
							}
						})
						if (message.member.voice.channel) {
							const connection = await message.member.voice.channel.join()
							await connection.play("bell.mp3")
							await sleep(29000)
						}
						// mute
						global.members = message.member.voice.channel.members
						global.members.forEach((member) => {
							if (member.user.bot === true) {
								member.voice.setMute(false)
							}
						})
					}
				}
				if (earlytime === 1) { 
					if (stop !== 1) { 
						message.channel.send("الحصة هتبتدي بعد " + early / 60 + " دقيقة")
					}
					for (var e = 0; e < early; e++) {
						if (stop === 1) { break }
						if (earlytime === 0) {
							break
						}
						await sleep(1000)
						global.left = Math.floor((early - e) / 60) 
					}
				}
				global.left = "yeye"
				for (var a = 0; a < times; a++) {
					if (stop === 1) { break }
					global.timees = times - a
					if (message.member.voice.channel) {
						const connection = message.member.voice.channel.join()
					}
					await bell()
					global.channel = message.channel

					if (stop !== 1) { 
						message.channel.send("الحصة بدأت")
					}
					// mute
					for (var b = 0; b < work; b++) {
						if (stop === 1) { break }
						await sleep(1000)
						global.left = Math.floor((work - b) / 60)

						try {
							global.members = message.member.voice.channel.members
						} catch (e) {
							console.log("ye")
						}
						global.members.forEach((member) => {
							if (mute === 1) {
								if (member.user.bot === false) {
									if (member.voice.serverMute === false) {
										if (!list.includes(member.user.username)) {
											member.voice.setMute(true)
											list.push(member.user.username)
										}
									}
								}
							}
						})
					}
					global.left = "yeye"
					global.list = []

					if (a !== times - 1) {
						await bell()
						if (stop !== 1) { 
							message.channel.send("يلا خدو فسحه")
						}
						// unmute
						global.members = channel.members
						members.forEach((member) => {
							if (member.user.bot === false) {
								member.voice.setMute(false)
							}
						})
						for (var c = 0; c < small; c++) {
							if (stop === 1) { break }
							global.left = Math.floor((small - c) / 60) + Math.floor(extra / 60)
							await sleep(1000)
						}
						for (var h = 0; h < extra; h++) {
							if (stop === 1) { break }
							global.left = Math.floor((extra - h) / 60)
							await sleep(1000)
						}
						global.left = "yeye"
						global.extra = 0
					}
				}

				await bell()
				global.channel = message.channel
				global.members = channel.members
				members.forEach((member) => {
					if (member.user.bot === false) {
						member.voice.setMute(false)
					}
				})
				if (stop !== 1) { 
					message.channel.send("فسحه كبييره")
				}
				for (var d = 0; d < big; d++) {
					if (stop === 1) { break }
					await sleep(1000)
					global.left = Math.floor((big - d) / 60)
				}
				await bell()
				global.busy = 0
				global.left = "yeye"
				stop = 0
				console.log("finished")
				message.channel.send("خلصت الحصة")
			} else {
				message.channel.send("مش فاضى")
			}
		}
	}
})

client.on("message", (message) => {
	if (message.content.toLowerCase() === "fadl kam mara" || message.content === "فاضل كام مره" || message.content === "فاضل كام مرة") {
		if (!global.timees) {
		} else {
			if (timees > 10) {
				message.channel.send("فاضل " + global.timees + " مره")
			}
			if (timees <= 10 && timees >= 3) {
				message.channel.send("فاضل " + global.timees + " مرات")
			}
			if (timees === 2) {
				message.channel.send("فاضل مرتين")
			}
			if (timees === 1) {
				message.channel.send("فاضل مره")
			}
		}
	}
})
client.on("message", (message) => {
	if (message.content.toLowerCase() === "fadl kam" || message.content === "فاضل كام") {
		if (left > 10) {
			message.channel.send("فاضل " + global.left + " دقيقة")
		}
		if (left <= 10 && left >= 3) {
			message.channel.send("فاضل " + global.left + " دقائق")
		}
		if (left === 2) {
			message.channel.send("فاضل دقيقتين")
		}
		if (left === 1) {
			message.channel.send("فاضل دقيقة")
		}
		if (left < 1) {
			message.channel.send("فاضل اقل من دقيقة")
		}
		if (left === "yeye") {
			message.channel.send("ثوانى")
		}
	}
})


client.on("message", (message) => {
	if (message.content.toLowerCase() === "help"  || message.content === "مساعده" || message.content === "مساعدة") {
		message.channel.send("اسأل الى عاملني")
	}
})
client.on("message", (message) => {
	if (message.content.toLowerCase() === "earlytime" || message.content === "وقت قبل البداية") {
		if(earlytime === 1){
			earlytime = 0
			message.channel.send("اتشال")
		} else {
			if(earlytime === 0){
				earlytime = 1
				message.channel.send("اتحط")
			}}
	}
})
client.on("message", (message) => {
	if (message.content.toLowerCase() === "stop" || message.content === "وقف") {
		message.channel.send("براحتك")
		if (message.member.voice.channel) {
			message.member.voice.channel.leave()
		}
		stop = 1
	}
})
client.on("message", (message) => {
	if (message.content.toLowerCase() === "mute") {
		if (mute === 0) {
			message.channel.send("محدش هايتكلم")
			mute = 1
		} else {
			message.channel.send("اتكلموا عادى")
			mute = 0 
			global.list = []
			global.members = message.member.voice.channel.members
			global.members.forEach((member) => {
				if (member.user.bot === false) {
					member.voice.setMute(false)
				}
			})
		}
	}
})

client.on("message", (message) => {
	if (message.content.startsWith("work")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("اتظبت على " + message.content.split(" ")[1])
			global.work = message.content.split(" ")[1] * 60
		}
	}
	if (message.content.startsWith("small")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("اتظبت على " + message.content.split(" ")[1])
			global.small = message.content.split(" ")[1] * 60
		}
	}
	if (message.content.startsWith("big")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("اتظبت على " + message.content.split(" ")[1])
			global.big = message.content.split(" ")[1] * 60
		}
	}
	if (message.content.startsWith("early")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("اتظبت على " + message.content.split(" ")[1])
			global.early = message.content.split(" ")[1] * 60
		}
	}
	if (message.content.startsWith("times")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("اتظبت على " + message.content.split(" ")[1])
			global.times = message.content.split(" ")[1]
		}
	}
	if (message.content.startsWith("add")) {
		if (!isNaN(message.content.split(" ")[1])) {
			message.channel.send("ضفت " + message.content.split(" ")[1])
			global.extra = message.content.split(" ")[1] * 60
		}
	}
})
client.login(token[0])
