const Discord = require('discord.js');
const client = new Discord.Client();

console.log(Script By Ayman");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`Last Community
  **:rose: أفضل سيرفر
:cyclone: فيه أنفايت ريدوارد أسطوري

:black_small_square: 5 Invite - Bot Music :open_mouth:
:black_small_square: 10 Invite - Bot Broadcast :open_mouth:
:black_small_square: 15 Invite - System Bot :open_mouth:
:black_small_square: 3 Invite - Spofity Account :open_mouth: 
:black_small_square: 6 Invite - 5K Credit :money_mouth: :money_with_wings: 
:black_small_square: 12 Invite - 10K Credit :money_mouth: :money_with_wings: 

And More :scream_cat: :gem: :heart:
** 
https://discord.gg/vk5J2z4`)
}).catch(console.error)
})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`Last Community
 **:rose: أفضل سيرفر
:cyclone: فيه أنفايت ريدوارد أسطوري

:black_small_square: 5 Invite - Bot Music :open_mouth:
:black_small_square: 10 Invite - Bot Broadcast :open_mouth:
:black_small_square: 15 Invite - System Bot :open_mouth:
:black_small_square: 3 Invite - Spofity Account :open_mouth: 
:black_small_square: 6 Invite - 5K Credit :money_mouth: :money_with_wings: 
:black_small_square: 12 Invite - 10K Credit :money_mouth: :money_with_wings: 

And More :scream_cat: :gem: :heart:
**
https://discord.gg/vk5J2z4`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء