const WebSocket = require('ws');

let wss = null;
let wssConnected = false; //TODO: useful?

module.exports = {
  startDebuggerServer: (options, cb) => {
    if (wss) {
      return cb(null);
    }

    wss = new WebSocket.Server({ port: 3030 });
    wssConnected = false;

    wss.on('connection', function connection(ws) {
      wssConnected = true;
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);
      });

      ws.send('something', function ack(error) {
        if (error) {
          console.log('error while sending:', error);
        }
      });
    });
  },
  sendPlayCommand: cb => {
    cb('not implemented'); //TODO
  },
  sendPauseCommand: cb => {
    cb('not implemented'); //TODO
  },
};
