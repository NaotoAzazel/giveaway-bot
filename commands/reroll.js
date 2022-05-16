const gc = require('../Client/client');

module.exports = {
  name: 'reroll',
  run: async(client, message, args) => {  
    // if(isNaN(args[0])) return;
    gc.reroll(args[0]);
  }
}
