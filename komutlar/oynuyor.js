const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(' ');
    if (oyun.length < 1) return message.channel.send(new Discord.RichEmbed()
	  .setTitle('⍫ Place of King')
  .setThumbnail('https://cdn.discordapp.com/emojis/535458617739051009.gif?v=1')
	  .setDescription('Oynamak için herhangi bir oyun yazmalısın.')
	  .setColor('RANDOM').setTimestamp());
  message.delete();
  client.user.setActivity(oyun);
  message.channel.sendEmbed(new Discord.RichEmbed()
	  .setTitle('⍫ Place of King')
	  .setThumbnail('https://cdn.discordapp.com/emojis/535458617265225758.gif?v=1')
	  .setDescription(`Oyun ***${oyun}*** olarak değiştirildi.`)
	  .setColor('RANDOM').setTimestamp());
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oynuyoryaz',
  description: 'Botun oynadigi oyunu gösterir.',
  usage: 'oynuyoryaz <oyun ismi>'
};