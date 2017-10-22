var Game_Over = {
    create: function() {
        game.stage.backgroundColor = bgColor;
        
		var playButton = Utils.createGraphicsButton(290, 175, 220, 50, bgColor, 1);
		game.add.text(400, 200, strings.btnPlayAgain, {font: "35px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		playButton.events.onInputDown.add(this.startGame, this);

		var homeButton = Utils.createGraphicsButton(350, 270, 100, 40, bgColor, 1);
		game.add.text(400, 290, strings.btnHome, {font: "35px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		homeButton.events.onInputDown.add(this.Home, this);

        game.add.text(275, 350, strings.yourScore + ": ", { font: "35px Courier", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 350, score, { font: "35px Courier", fontWeight: "bold", fill: "#FFF" });
        
        if(score > parseInt(localStorage.getItem("bestScore"))) {
            localStorage.setItem("bestScore", score);
        }

        game.add.text(275, 400, strings.bestScore + ": ", { font: "35px Courier", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 400, localStorage.getItem("bestScore"), { font: "35px Courier", fontWeight: "bold", fill: "#FFF" });
    },

    startGame: function () {
        this.state.start('Game');
    },

    Home: function () {
        this.state.start('Menu');
    }
};