const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../../solution/game.js'); // require appropriate file


$( () => {
  const $ttt = $('figure.ttt');
  let game = new Game();
  let view = new View(game, $ttt);
  // Your code here
});
