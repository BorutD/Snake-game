var Instructions = {
    preload: function() {
        game.load.image('go_back', 'images/Buttons/go_back.png');
    },

    create: function() {
        game.stage.backgroundColor = localStorage.getItem("bg_color");

        var titleStyle = {font: "20px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, "Instructions", titleStyle);
        title.anchor.set(0.5);

        // Go back button
        go_back = game.add.button(100, 550, 'go_back', this.goBack, this);
        go_back.anchor.set(0.5);
    },

    goBack: function() {
        this.state.start('Menu');
    }
}