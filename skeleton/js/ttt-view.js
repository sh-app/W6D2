class View {
  constructor(game, $el) {
    this.game = game;
    (this.setupBoard($el));
    this.bindEvents();
  }

  bindEvents() {
    let $li = $('li');
    $li.on('click', (e) => {
      const mark = this.game.currentPlayer;
      const square = e.currentTarget;
      const $square = $(square);
      $square.removeClass("unclicked");
      $square.addClass("clicked");
      $square.addClass(`${mark}`);
      $square.text(`${mark}`);
      this.makeMove($square.data("pos"));
    });
    $li.hover((e) => {
      const square = e.currentTarget;
      const $square = $(square);
      $square.addClass("hover");
    }, (e) => {
      const square = e.currentTarget;
      const $square = $(square);
      $square.removeClass("hover");
    });
  }

  makeMove($square) {
    this.game.playMove($square);
  }

  setupBoard($el) {


    // sets the textContent property
    // $li.text(coolThings[i]);
    // $li.attr("float");

    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      //width
      for (let j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $ul.append($li);
        $li.addClass("box");
        $li.addClass("unclicked");
        $li.data("pos", [i, j]);
      }
      $el.append($ul);
    }
  }
}

module.exports = View;
