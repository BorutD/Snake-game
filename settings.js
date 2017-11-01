var snakeColor, foodColor, speed;
var Settings = {
	create: function () {
		game.stage.backgroundColor = localStorage.getItem("bg_color");

		var titleStyle = { font: "45px Courier", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(400, 100, strings.settings, titleStyle);
		title.anchor.set(0.5);

		// Select Snake Color
		var textStyle = { font: "25px Courier", fontWeight: "bold", fill: "#FFF" };
		selectSnakeColor = game.add.text(450, 200, strings.snakeColorSelect + ": ", textStyle);
		selectSnakeColor.anchor.set(1.0);

		var snakeWhite = Utils.createGraphicsButton(460, 172, 19, 19, 0xFFFFFF, 1);
		snakeWhite.events.onInputDown.add(this.saveData, ["snakeColor", "white"]);

		var snakeBlack = Utils.createGraphicsButton(500, 172, 19, 19, 0x000000, 1);
		snakeBlack.events.onInputDown.add(this.saveData, ["snakeColor", "black"]);

		// Select Food Color
		selectFoodColor = game.add.text(450, 250, strings.foodColorSelect + ": ", textStyle);
		selectFoodColor.anchor.set(1.0);

		var foodWhite = Utils.createGraphicsButton(460, 222, 19, 19, 0xFFFFFF, 1);
		foodWhite.events.onInputDown.add(this.saveData, ["foodColor", "white"]);

		var foodBlack = Utils.createGraphicsButton(500, 222, 19, 19, 0x000000, 1);
		foodBlack.events.onInputDown.add(this.saveData, ["foodColor", "black"]);

		// Select Background Color
		selectBgColor = game.add.text(450, 300, strings.bgColorSelect + ": ", textStyle);
		selectBgColor.anchor.set(1.0);

		var bgBlue = Utils.createGraphicsButton(460, 272, 19, 19, 0x1AB0D2, 1);
		bgBlue.events.onInputDown.add(this.saveData, ["bg_color", "0x1AB0D2"]);

		var bgGreen = Utils.createGraphicsButton(500, 272, 19, 19, 0x19C20E, 1);
		bgGreen.events.onInputDown.add(this.saveData, ["bg_color", "0x19C20E"]);

		var bgRed = Utils.createGraphicsButton(540, 272, 19, 19, 0xF23810, 1);
		bgRed.events.onInputDown.add(this.saveData, ["bg_color", "0xF23810"]);

		// Select Level
		selectLevel = game.add.text(450, 350, strings.levelSelect + ": ", textStyle);
		selectLevel.anchor.set(1.0);

		var levelEasy = Utils.createGraphicsButton(510, 315, 80, 30, bgColor, 1);
		game.add.text(550, 330, strings.btnEasy, { font: "30px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		levelEasy.events.onInputDown.add(this.saveData, ["level", "Easy"]);

		var levelMedium = Utils.createGraphicsButton(490, 365, 120, 30, bgColor, 1);
		game.add.text(550, 380, strings.btnMedium, { font: "30px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		levelMedium.events.onInputDown.add(this.saveData, ["level", "Medium"]);

		var levelHard = Utils.createGraphicsButton(510, 415, 80, 30, bgColor, 1);
		game.add.text(550, 430, strings.btnHard, { font: "30px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		levelHard.events.onInputDown.add(this.saveData, ["level", "Hard"]);

		var levelImpossible = Utils.createGraphicsButton(460, 465, 185, 30, bgColor, 1);
		game.add.text(550, 480, strings.btnImpossible, { font: "30px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		levelImpossible.events.onInputDown.add(this.saveData, ["level", "Impossible"]);

		// Back button
		var btnBack = Utils.createGraphicsButton(90, 510, 80, 30, bgColor, 1);
		game.add.text(130, 528, strings.btnBack, { font: "30px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
		btnBack.events.onInputDown.add(this.goBack, this);
	},

	saveData: function () {
		localStorage.setItem(this[0], this[1]);
	},

	goBack: function () {
		this.state.start('Menu');
	}
}