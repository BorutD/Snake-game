var Game_Over = {
    create: function() {
        game.stage.backgroundColor = localStorage.getItem("bg_color");
        
		var playButton = Utils.createGraphicsButton(290, 175, 220, 50, 0x1AB0D2, 1);
		game.add.text(400, 200, "Play Again", {font: "35px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		playButton.events.onInputDown.add(this.startGame, this);

		var homeButton = Utils.createGraphicsButton(350, 270, 100, 40, 0x1AB0D2, 1);
		game.add.text(400, 290, "Home", {font: "35px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		homeButton.events.onInputDown.add(this.Home, this);

        game.add.text(275, 350, "Your score: ", { font: "35px Courier", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 350, score, { font: "35px Courier", fontWeight: "bold", fill: "#FFF" });
        
        if(score > parseInt(localStorage.getItem("bestScore"))) {
            localStorage.setItem("bestScore", score);
        }

        game.add.text(275, 400, "Best score: ", { font: "35px Courier", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 400, localStorage.getItem("bestScore"), { font: "35px Courier", fontWeight: "bold", fill: "#FFF" });
    },

    startGame: function () {
        this.state.start('Game');
    },

    Home: function () {
        this.state.start('Menu');
    }
};