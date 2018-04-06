gdjs.WebsocketDebuggerClient = function(runtimegame) {
  this._runtimegame = runtimegame;

  if (typeof WebSocket !== 'undefined') {
    this._ws = new WebSocket('ws://127.0.0.1:3030/', {
      origin: 'https://websocket.org', //TODO
    });

    this._ws.onopen = function open() {
      console.log('connected');
      ws.send('{"command": "dump", "payload": {"hello": "world"}}');
    };

    this._ws.onclose = function close() {
      console.log('disconnected');
    };

    this._ws.onerror = function errored(error) {
      console.log('errored', error);
    };

    this._ws.onmessage = function incoming(data) {
      console.log('Received', data);
    };
  } else {
    console.log("WebSocket is not defined, debugger won't work");
  }
};

gdjs.DebuggerClient = gdjs.WebsocketDebuggerClient; //Register the class to let the engine use it.
