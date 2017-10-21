var Instructions = {
    create: function() {
		game.stage.backgroundColor = localStorage.getItem("bg_color");

        var titleStyle = {font: "45px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, "Instructions", titleStyle);
        title.anchor.set(0.5);

		// Back button
		var btnBack = Utils.createGraphicsButton(70, 500, 120, 50, 0x1AB0D2, 1);
		game.add.text(130, 528, "Go Back", {font: "30px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		btnBack.events.onInputDown.add(this.goBack, this);
    },

    goBack: function() {
        this.state.start('Menu');
	}
}