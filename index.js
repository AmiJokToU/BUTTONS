var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "متن دلخواه شما",
assets : {
large_image : "اسم عکسی که توی ریچ پرسنس آپلود کردید",
large_text : "اسمی که میخواید توی استاتوستون نوشته بشه"
},
buttons : [{label : "اسم دکمه اول" , url : "لینک دکمه اول"}]
}
})
})
client.login({ clientId : "اپلیکیشن آیدی" }).catch(console.error);