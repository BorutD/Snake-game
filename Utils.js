var Utils = {
	createGraphicsButton: function(x, y, width, height, fill, alpha) {
		var btn = game.add.graphics();
		btn.beginFill(fill, alpha);
		btn.drawRect(x, y, width, height);
		btn.endFill();
		btn.inputEnabled = true;
		btn.input.useHandCursor = true;

		return btn;
	}
}