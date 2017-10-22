var Instructions = {
    create: function() {
        var titleStyle = {font: "45px Courier New", fontWeight: "bold", fill: "#FFF", align: "center"};
        title = game.add.text(400, 100, strings.instructions, titleStyle);
		title.anchor.set(0.5);
		
		// Back button
		var btnBack = Utils.createGraphicsButton(90, 510, 80, 30, bgColor, 1);
		game.add.text(130, 528, strings.btnBack, {font: "30px Courier", fontWeight: "bold", fill: "#FFF"}).anchor.set(0.5);
		btnBack.events.onInputDown.add(this.goBack, this);
    },

    goBack: function() {
        this.state.start('Menu');
	}
}