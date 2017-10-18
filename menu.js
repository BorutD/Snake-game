var Menu = {
    preload: function () {
        game.load.image('play', 'images/Buttons/play_game.png');
        game.load.image('settings', 'images/Buttons/settings.png');
        game.load.image('instructions', 'images/Buttons/instructions.png');
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

        // Title
        var titleStyle = {font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, "SNAKE GAME", titleStyle);
        title.anchor.set(0.5);
        
        // Play button
        playButton = game.add.button(400, 300, 'play', this.startGame, this);
        playButton.anchor.set(0.5);

        // Settings button
        settingsButton = game.add.button(400, 400, 'settings', this.settings, this);
        settingsButton.anchor.set(0.5);

        // Instructions button
        instructionsButton = game.add.button(400, 500, 'instructions', this.instructions, this);
        instructionsButton.anchor.set(0.5);
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