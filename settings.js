var snakeColor, foodColor, speed;
var Settings = {
    preload: function() {
        game.load.image('square_black', 'images/square_black.png');
        game.load.image('square_white', 'images/square_white.png');
        game.load.image('easy', 'images/Speed/Easy.png');
        game.load.image('medium', 'images/Speed/Medium.png');
        game.load.image('hard', 'images/Speed/Hard.png');
        game.load.image('impossible', 'images/Speed/Impossible.png');
        game.load.image('go_back', 'images/Buttons/go_back.png');
        game.load.image('bg_blue', 'images/Background/bg_blue.png');
        game.load.image('bg_green', 'images/Background/bg_green.png');
        game.load.image('bg_red', 'images/Background/bg_red.png');
    },

    create: function() {
        game.stage.backgroundColor = localStorage.getItem("bg_color");

        var titleStyle = {font: "45px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, "Settings", titleStyle);
        title.anchor.set(0.5);

        // Select Snake Color
        var textStyle = {font: "25px Courier New", fontWeight: "bold", fill: "#FFF"};
        selectSnakeColor = game.add.text(450, 200, "Select color of the snake: ", textStyle);
        selectSnakeColor.anchor.set(1.0);

        snakeWhite = game.add.button(470, 182, 'square_white', this.saveData, ["snakeColor", "white"]);
        snakeWhite.anchor.set(0.5);
        snakeBlack = game.add.button(510, 182, 'square_black', this.saveData, ["snakeColor", "black"]);
        snakeBlack.anchor.set(0.5);

        // Select Food Color
        selectFoodColor = game.add.text(450, 250, "Select color of the food: ", textStyle);
        selectFoodColor.anchor.set(1.0);

        foodWhite = game.add.button(470, 232, 'square_white', this.saveData, ["foodColor", "white"]);
        foodWhite.anchor.set(0.5);
        foodBlack = game.add.button(510, 232, 'square_black', this.saveData, ["foodColor", "black"]);
        foodBlack.anchor.set(0.5);

        // Select Background Color
        selectBgColor = game.add.text(450, 300, "Select background color: ", textStyle);
        selectBgColor.anchor.set(1.0);

        bg_blue = game.add.button(470, 282, 'bg_blue', this.saveData, ["bg_color", "#1AB0D2"]);
        bg_blue.anchor.set(0.5);
        bg_green = game.add.button(510, 282, 'bg_green', this.saveData, ["bg_color", "#19C20E"]);
        bg_green.anchor.set(0.5);
        bg_red = game.add.button(550, 282, 'bg_red', this.saveData, ["bg_color", "#F23810"]);
        bg_red.anchor.set(0.5);

        // Select Level
        selectLevel = game.add.text(450, 350, "Select level: ", textStyle);
        selectLevel.anchor.set(1.0);

        easy = game.add.button(550, 330, 'easy', this.saveData, ["level", "Easy"]);
        easy.anchor.set(0.5);
        medium = game.add.button(550, 380, 'medium', this.saveData, ["level", "Medium"]);
        medium.anchor.set(0.5);
        hard = game.add.button(550, 430, 'hard', this.saveData, ["level", "Hard"]);
        hard.anchor.set(0.5);
        impossible = game.add.button(550, 480, 'impossible', this.saveData, ["level", "Impossible"]);
        impossible.anchor.set(0.5);

        // Go back button
        go_back = game.add.button(100, 550, 'go_back', this.goBack, this);
        go_back.anchor.set(0.5);
    },

    saveData: function() {
        localStorage.setItem(this[0], this[1]);
    },

    goBack: function() {
        this.state.start('Menu');
    }
}