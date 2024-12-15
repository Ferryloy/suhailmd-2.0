const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_53_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUEyemJ6NHNsdW5ic3Z3dFN6SzBLU0lpOGV3d3k2SnB2QVJTbm03cHlJdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicHhvMHA1TzZRUnVXRW1kQVFiVFdjQVwiLFxuICBcInBob25lSWRcIjogXCJiYzQyM2UwZC1kNzMzLTQwMzktYjJiMS05ZmJkYjM4YTMzYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyMzAsXG4gICAgICAxNDEsXG4gICAgICAyNTEsXG4gICAgICAxODcsXG4gICAgICAzLFxuICAgICAgMTEzLFxuICAgICAgMjI0LFxuICAgICAgMTA2LFxuICAgICAgMTgwLFxuICAgICAgMTA4LFxuICAgICAgNjAsXG4gICAgICAyMTEsXG4gICAgICA0MixcbiAgICAgIDEzNSxcbiAgICAgIDIyLFxuICAgICAgMTYxLFxuICAgICAgNTgsXG4gICAgICAzLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMjQ4LFxuICAgICAgNzMsXG4gICAgICAxNzUsXG4gICAgICAyMjMsXG4gICAgICAyMCxcbiAgICAgIDAsXG4gICAgICAyMDYsXG4gICAgICAyMTUsXG4gICAgICA1LFxuICAgICAgMjM2LFxuICAgICAgNTUsXG4gICAgICA3NSxcbiAgICAgIDIzMyxcbiAgICAgIDEwNixcbiAgICAgIDczLFxuICAgICAgMTEwLFxuICAgICAgNDksXG4gICAgICAxNzcsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzNFhHMVY5RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0Nzc4Nzc5ODozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxODgxNzUyMzc1NTUxOjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09EcGtyb0JFT21WK3JvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnNxbU42czhMN0YwV3UzZmQ3YmQ3SSt2emJjR0NWS1BaWFB3aUJVTGNDMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwY2tuQlU1M29qdFVyUHY0WngrTEFYT3JWTjVJaFcwRkMydDMwL0pUQkw4bWUrYWNkREg5VmwvaXdLSWM1d0RGdDJmMVdnM1ZRU3lRa1ZtbE9SbXBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNeVNWNDNHZG92bmkyQTlkeG51SVhwck1TSnJiRytGd0duU2RUWWVEenVSZ0Q2QjVvampReTBhQVI3REtSdWVFcStZbDJ6ZlpQUklFbHdXZzJwVlNDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ3Nzg3Nzk4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyNDkxOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFV2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVXZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ferryloy",
  packname: process.env.PACK_NAME || "kaneki",
  botname : process.env.BOT_NAME  || "kaneki MD",
  ownername:process.env.OWNER_NAME|| "Ferryloy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
