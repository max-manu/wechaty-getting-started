/**
 * Wechaty - Conversational RPA SDK for Chatbot Makers.
 *  - https://github.com/wechaty/wechaty
 */
 const {
  Wechaty,
  ScanStatus,
  log,
}               = require('wechaty')

 const Discord = require("discord.js")
 const client = new Discord.Client()
 const bot = new Wechaty({
  name: 'ding-dong-bot',
  /**
   * How to set Wechaty Puppet Provider:
   *
   *  1. Specify a `puppet` option when instantiating Wechaty. (like `{ puppet: 'wechaty-puppet-padlocal' }`, see below)
   *  1. Set the `WECHATY_PUPPET` environment variable to the puppet NPM module name. (like `wechaty-puppet-padlocal`)
   *
   * You can use the following providers:
   *  - wechaty-puppet-wechat (no token required)
   *  - wechaty-puppet-padlocal (token required)
   *  - wechaty-puppet-service (token required, see: <https://wechaty.js.org/docs/puppet-services>)
   *  - etc. see: <https://github.com/wechaty/wechaty-puppet/wiki/Directory>
   */
  // puppet: 'wechaty-puppet-wechat',
})
var sent;
 client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}!`)
 })
 
 client.on("message", msg => {
  async function dis2wapp (){
    try {
      
      if (sent!=msg.content)
      {await contact.say('Message from :'+msg.author.username+'\n'+msg.content);
      console.log(contact.name())}
      sent='Message from Discord:\n'+msg.content;
    } catch (error) {
      console.log(error);
    }}
    dis2wapp();
   if (msg.content === "ding") {
    
    dis2wapp();
     msg.reply("dong");
    
   }
 })
 
 client.login("ODQzODY1ODg2MDU3MDM3ODM0.YKKFWQ.CQu5N3JLSXKZ2l2U9OPZRI-d8No")

function onScan (qrcode, status) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console

    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)

  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}

function onLogin (user) {
  log.info('StarterBot', '%s login', user)
}

function onLogout (user) {
  log.info('StarterBot', '%s logout', user)
}
var contact;
async function onMessage (msg) {
  log.info('StarterBot', msg.toString())
  // if (msg.talker().name()==='wechat'){
  //   try{
  //     if (sent!=msg.text()){
  //     var channel=await client.channels.cache.get('843868192010403903');
  //     channel.send(msg.text());
  //     sent=msg.text();
  //     }
  //   }catch(error){console.error(error);}
  // }
    
  
   
if (msg.talker().name()==='Lekhit Borole'){
  try{
    if (sent!=msg.text()){
    var channel=await client.channels.cache.get('844079105578369064');
    channel.send(msg.text());
    sent=msg.text();
    }
  }catch(error){console.error(error);}
}
  
if (msg.talker().name()==='//Infant Programmers'){
  try{
    if (sent!=msg.text()){
    var channel=await client.channels.cache.get('844079105578369064');
    channel.send(msg.text());
    sent=msg.text();
    }
  }catch(error){console.error(error);}
}


  if (msg.text() === '!yes sure') {
    // try{
    //   var channel=await client.channels.cache.get('843868192010403903');
    //   channel.send('Hello there!');

    // }catch(error){console.error(error);}
    try{
      var channel=await client.channels.cache.get('844079105578369064');
      channel.send('Hello there_from whatsapp!');

    }catch(error){console.error(error);}
    await msg.say('Hi!');
    console.log("room="+msg.room());
    console.log("to="+msg.to());
    console.log('talker='+msg.talker());
    console.log('find '+msg.talker().say("hello here"));
    contact=msg.talker();
    contact.say('started connection:');

  }
}



bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
