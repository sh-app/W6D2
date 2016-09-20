class HanoiView {
  constructor(game, $el) {
    this.towers = game.towers;
    this.game = game;
    this.$el = $el;
    this.setupTowers($el);
    this.clickTower();
  }

  clickTower() {
    let moves = [];
    $('li').on('click', (e) => {
      let tower = e.currentTarget;
      let $tower = $(tower);
      moves.push($tower.data('pos'));
      console.log(`${moves}`);
    });
    if (moves.length === 2) {
      this.game.move(moves[0], moves[1]);
      moves = [];
      console.log(`${moves}`);
    }
    // this.setupTowers(this.$el);
  }

  setupTowers($el) {
    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      for (let j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $ul.append($li);
        let disk = this.towers[i][j];
        $li.data("pos", i);
        $li.addClass('box');
        $li.addClass(`disk${disk}`);
      }
      $el.append($ul);
    }
  }

  render(towers) {
  }
}

module.exports = HanoiView;
