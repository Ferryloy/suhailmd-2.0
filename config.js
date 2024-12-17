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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_33_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlRkdFZEYTM1VWRRZ09Ha1ZkM2FDUzN4a3N2UTJQOHBuRVZna25RSFh0UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZFlpR3NCRzRSeXV5QS1YWk1Eanp1d1wiLFxuICBcInBob25lSWRcIjogXCIzMTMzOTBhMi1kNzYzLTRjODUtOTRmYi05ZDMwYTU3ZjQzOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTM3LFxuICAgICAgODgsXG4gICAgICAyMTMsXG4gICAgICA0NCxcbiAgICAgIDE0LFxuICAgICAgMjA2LFxuICAgICAgOTQsXG4gICAgICA1OSxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDU2LFxuICAgICAgMTA1LFxuICAgICAgMTkwLFxuICAgICAgMTcyLFxuICAgICAgMTYyLFxuICAgICAgMjA4LFxuICAgICAgNjEsXG4gICAgICA2MyxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAzOSxcbiAgICAgIDE2NixcbiAgICAgIDEwNixcbiAgICAgIDI1MixcbiAgICAgIDIwNCxcbiAgICAgIDcwLFxuICAgICAgMTYyLFxuICAgICAgMTUyLFxuICAgICAgMjA0LFxuICAgICAgMTQ1LFxuICAgICAgMTU0LFxuICAgICAgNDUsXG4gICAgICAyMTcsXG4gICAgICA2OSxcbiAgICAgIDI2LFxuICAgICAgNzEsXG4gICAgICAyNDUsXG4gICAgICAxMTUsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWThKR1FUNUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzc4ODg1ODE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5ODQ3NTUzMjI0NzkwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lLek9nREVMZjRoN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQeE8yankxY2hHM0VCNXkrM1MvQnJwVnloQTBXWlJzZUc2VWNnZ1UraEV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJ6QXk3N2tRak16eGFBMUVyRmd6QmVjSWpRcCt6eUtFY01UL1NaUEFjbmd5bXE2MW1xdW8rWWpMNldqdDh4d2JFZ1BVTlZCMXBaVlcxaGRJbnhqaURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVuMGVDRm1jeGlmSjc1UmJFelYwNkZyR0JFSHlDOEtzZGN4L1hSRTZMRU5sVjdoby9NZ2FLUHE5VWhyN2VtMjJvdDN4NjQxUXVwNzlYUE1PT3NHcWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzc4ODg1ODE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0NzQ4MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBejlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6OS5qc29uIjogIntcImtleURhdGFcIjpcIm5aZ29tdmVoeVBPMWdUVjVFTXhNNFlWVTNPVXQ2VHJDOXV4Vlk2eUJ0SlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNDY1NjY4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NDc0ODE5MDc2XCJ9Igp9"

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
