const { UP_KEY, LEFT_KEY, DOWN_KEY, RIGHT_KEY, QUICK_CHAT1, QUICK_CHAT2 } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === UP_KEY) {
    connection.write('Move: up');
  }
  if (key === LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (key === QUICK_CHAT1) {
    connection.write('Say: HELLO!');
  }
  if (key === QUICK_CHAT2) {
    connection.write('Say: MOVE!');
  }
};

module.exports = {
  setupInput
};