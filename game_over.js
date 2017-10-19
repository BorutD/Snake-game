var Game_Over = {
    preload: function() {
        game.load.image('play_again', 'images/Buttons/play_again.png');
        game.load.image('home', 'images/Buttons/home.png');
    },
    create: function() {
        game.stage.backgroundColor = localStorage.getItem("bg_color");
        
        playButton = game.add.button(400, 200, 'play_again', this.startGame, this);
        playButton.anchor.set(0.5);
        homeButton = game.add.button(400, 300, 'home', this.Home, this);
        homeButton.anchor.set(0.5);

        game.add.text(285, 350, "Your score: ", { font: "30px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 350, score, { font: "30px Courier New", fontWeight: "bold", fill: "#FFF" });
        
        if(score > parseInt(localStorage.getItem("bestScore"))) {
            localStorage.setItem("bestScore", score);
        }

        game.add.text(285, 400, "Best score: ", { font: "30px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"});
        game.add.text(510, 400, localStorage.getItem("bestScore"), { font: "30px Courier New", fontWeight: "bold", fill: "#FFF" });
    },

    startGame: function () {
        this.state.start('Game');
    },

    Home: function () {
        this.state.start('Menu');
    }
};