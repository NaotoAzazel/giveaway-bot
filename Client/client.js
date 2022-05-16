const client = require('../index');
const { GiveawayClient } = require('reconlx');
const { mongooseConnectionString } = require('../config.json');

const giveaway = new GiveawayClient({
  client: client,
  defaultColor: 'BLUE',
  emoji: "🎅",
  mongooseConnectionString: mongooseConnectionString,
});

module.exports = giveaway;