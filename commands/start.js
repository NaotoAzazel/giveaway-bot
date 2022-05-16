const gc = require('../Client/client');
const ms = require('ms');

module.exports = {
  name: 'start',
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first();
    let time = args[1]
    time = ms(time)

    gc.start({
      channel,
      hostedBy: message.author,
      prize: args.slice(3).join(" "),
      time,
      winners: parseInt(args[2])
    })
    message.channel.send('<@&975690587472805898>')
  }
}
