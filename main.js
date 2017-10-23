var game;

game = new Phaser.Game(800, 600, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Settings', Settings);
game.state.add('Instructions', Instructions);
game.state.add('Game_Over', Game_Over);

$.getJSON('lang/lang.json', function(result) {
	if (result.Status && result.Status.ErrCode){
		console.log("Error getting lang.json");
	} else {
		strings = result.strings;
	}
});

game.state.start('Menu');