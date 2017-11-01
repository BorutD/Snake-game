var strings = {};
var bgColor;

var Menu = {
	preload: function () {
		game.load.script('Utils', 'Utils.js');
	},

	create: function () {
		if (localStorage.getItem("snakeColor") == null) {
			localStorage.setItem("snakeColor", "black");
		}
		if (localStorage.getItem("foodColor") == null) {
			localStorage.setItem("foodColor", "black");
		}
		if (localStorage.getItem("bg_color") == null) {
			localStorage.setItem("bg_color", "#1AB0D2");
		}
		if (localStorage.getItem("level") == null) {
			localStorage.setItem("level", "Easy");
		}
		if (localStorage.getItem("bestScoreEasy") == null) {
			localStorage.setItem("bestScoreEasy", "0");
		}
		if (localStorage.getItem("bestScoreMedium") == null) {
			localStorage.setItem("bestScoreMedium", "0");
		}
		if (localStorage.getItem("bestScoreHard") == null) {
			localStorage.setItem("bestScoreHard", "0");
		}
		if (localStorage.getItem("bestScoreImpossible") == null) {
			localStorage.setItem("bestScoreImpossible", "0");
		}

		bgColor = localStorage.getItem("bg_color");
		game.stage.backgroundColor = bgColor;
		// bgColor = bgColor.replace(bgColor[0], "0x");

		// Title
		var titleStyle = { font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(400, 100, strings.snakeGame, titleStyle);
		title.anchor.set(0.5);

		// Play button
		var playButton = Utils.createGraphicsButton(340, 275, 120, 50, bgColor, 1);
		game.add.text(400, 300, strings.btnPlay, { font: "45px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		playButton.events.onInputDown.add(this.startGame, this);

		// Settings button
		var settingsButton = Utils.createGraphicsButton(290, 375, 220, 50, bgColor, 1);
		game.add.text(400, 400, strings.settings, { font: "45px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		settingsButton.events.onInputDown.add(this.settings, this);

		// Instructions button
		var instructionsButton = Utils.createGraphicsButton(235, 475, 330, 50, bgColor, 1);
		game.add.text(400, 500, strings.instructions, { font: "45px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		instructionsButton.events.onInputDown.add(this.instructions, this);
	},

	startGame: function () {
		this.state.start('Game');
	},

	settings: function () {
		this.state.start('Settings');
	},

	instructions: function () {
		this.state.start('Instructions');
	}
};