var strings = {};
var Menu = {
    preload: function () {
		game.load.script('Utils', 'Utils.js');
    },

    create: function () {
        if(localStorage.getItem("snakeColor") == null) {
            localStorage.setItem("snakeColor", "black");
        } 
        if(localStorage.getItem("foodColor") == null) {
            localStorage.setItem("foodColor", "black");
        } 
        if(localStorage.getItem("bg_color") == null) {
            localStorage.setItem("bg_color", "#1AB0D2");
        }
        if(localStorage.getItem("level") == null) {
            localStorage.setItem("level", "Easy");
        }
        if(localStorage.getItem("bestScore") == null) {
            localStorage.setItem("bestScore", "0");
        }
        
		game.stage.backgroundColor = localStorage.getItem("bg_color");
		
		this.getLanguage();

        // Title
        var titleStyle = {font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, "SNAKE GAME", titleStyle);
        title.anchor.set(0.5);
        
        // Play button
		var playButton = Utils.createGraphicsButton(340, 275, 120, 50, 0x1AB0D2, 1);
		game.add.text(400, 300, "Play", {font: "45px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		playButton.events.onInputDown.add(this.startGame, this);

        // Settings button
		var settingsButton = Utils.createGraphicsButton(290, 375, 220, 50, 0x1AB0D2, 1);
		game.add.text(400, 400, "Settings", {font: "45px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		settingsButton.events.onInputDown.add(this.settings, this);

        // Instructions button
		var instructionsButton = Utils.createGraphicsButton(235, 475, 330, 50, 0x1AB0D2, 1);
		game.add.text(400, 500, "Instructions", {font: "45px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
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
	},
	
	getLanguage: function () {
		$.getJSON('lang/lang.json', function(result) {
			if (result.Status && result.Status.ErrCode){
				console.log("Error getting lang.json");
			} else {
				strings = result;
			}
		});
	}
};