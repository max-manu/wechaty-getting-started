/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   @copyright 2016-2018 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
/**
 * 
 * 
 * discord
 */
var token='';//insert discord token here
var sent='';
 var contact;//contact var for whatsapp
 const Discord = require("discord.js")
 const client = new Discord.Client()

 client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}!`)
 })
 
 client.on("message", discord_msg => {
   async function dis2wapp() {
     try {
 
       if (sent != discord_msg.content) {
         await contact.say( discord_msg.author.username + ' :\n' + discord_msg.content);
         console.log(contact.name())
       }
       sent = 'Message from Discord:\n' + discord_msg.content;
     } catch (error) {
       console.log(error);
     }
   }
   dis2wapp();
   if (discord_msg.content === "ding") {
 
     dis2wapp();
     discord_msg.reply("dong");
 
   }
 })
 
 client.login(token)
 


/**whatsapp channel
 * 
 * 
 */
 var whatsapp_user={};


var whatsapp_channel='wechat';
var discord_channel_id='844079105578369064';


/**
 * whatsapp bot
 */
 const {
    Wechaty,
    config,
  }           = require('wechaty')
  
  const { FileBox }  = require('file-box')
  const qrTerm = require('qrcode-terminal')

  
  /**
   *
   * 1. Declare your Bot!
   *
   */
  const bot = new Wechaty({
    name: 'myWechatyBot',
  })


  
  /**
   *
   * 2. Register event handlers for Bot
   *
   */
  bot
  .on('logout', onLogout)
  .on('login',  onLogin)
  .on('scan',   onScan)
  .on('error',  onError)
  .on('message', onMessage)
  
  /**
   *
   * 3. Start the bot!
   *
   */
  bot.start()
  .catch(async e => {
    console.error('Bot start() fail:', e)
    await bot.stop()
    process.exit(-1)
  })
  
  /**
   *
   * 4. You are all set. ;-]
   *
   */
  
  /**
   *
   * 5. Define Event Handler Functions for:
   *  `scan`, `login`, `logout`, `error`, and `message`
   *
   */
  function onScan (qrcode, status) {
    qrTerm.generate(qrcode, { small: true })
  
    // Generate a QR Code online via
    // http://goqr.me/api/doc/create-qr-code/
    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode),
    ].join('')
  
    console.log(`[${status}] ${qrcodeImageUrl}\nScan QR Code above to log in: `)
  }
  
  function onLogin (user) {
    console.log(`${user.name()} login`)
    bot.say('Wechaty login').catch(console.error)
  }
  
  function onLogout (user) {
    console.log(`${user.name()} logouted`)
  }
  
  function onError (e) {
    console.error('Bot error:', e)
    /*
    if (bot.logonoff()) {
      bot.say('Wechaty error: ' + e.message).catch(console.error)
    }
    */
  }
  
  /**
   *
   * 6. The most important handler is for:
   *    dealing with Messages.
   *
   */
  async function onMessage (msg) {
    console.log(msg.toString())
  
    if (msg.talker().name()===whatsapp_channel){
        try{
          if (sent!=msg.text()){
          var channel=await client.channels.cache.get(discord_channel_id);
          var name=whatsapp_user[(msg.talker().id).substr(2,10)];

console.info(msg);
console.log(msg , name, (msg.talker().id).substr(2,10));


          var message='-------------\n'+name+' :\n'+msg.text();
          channel.send(message);
          sent=message;
          }
        }catch(error){console.error(error);}
      }
        
        if (msg.text() === '!ding') {
          try{
            var channel=await client.channels.cache.get(discord_channel_id);
            channel.send('Hello there!');
      
          }catch(error){console.error(error);}
          await msg.say('dong');
          console.log("room="+msg.room());
          console.log("to="+msg.to());
          console.log('talker='+msg.talker());
          console.log('find '+msg.talker().say("hello here"));
          contact=msg.talker();
          contact.say('started connection:');
      
        }
    /**
     * 2. reply image(qrcode image)
     */
    
     
    /**
     * 3. reply 'scan now!'
     */
   
  }
  
  /**
   *
   * 7. Output the Welcome Message
   *
   */
  const welcome = `
  | __        __        _           _
  | \\ \\      / /__  ___| |__   __ _| |_ _   _
  |  \\ \\ /\\ / / _ \\/ __| '_ \\ / _\` | __| | | |
  |   \\ V  V /  __/ (__| | | | (_| | |_| |_| |
  |    \\_/\\_/ \\___|\\___|_| |_|\\__,_|\\__|\\__, |
  |                                     |___/
  =============== Powered by Wechaty ===============
  -------- https://github.com/chatie/wechaty --------
            Version: ${bot.version(true)}
  I'm a bot, my superpower is talk in Wechat.
  If you send me a 'ding', I will reply you a 'dong'!
  __________________________________________________
  Hope you like it, and you are very welcome to
  upgrade me to more superpowers!
  Please wait... I'm trying to login in...
  `
  console.log(welcome)
