var snake, food, squareSize, score, speed, snakeColor, foodColor,
	updateDelay, direction, new_direction, levels, level,
	addNew, cursors, scoreTextValue, speedTextValue, textStyle_Key,
	textStyle_Value, spaceKey, title, gamePaused;

var Game = {
	preload: function () {
		game.load.image('black', 'images/square_black.png');
		game.load.image('white', 'images/square_white.png');
	},

	create: function () {
		game.stage.backgroundColor = localStorage.getItem("bg_color");

		var titleStyle = { font: "20px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(400, 50, strings.spacePause, titleStyle);
		title.anchor.set(0.5);

		snake = [];
		food = {};
		squareSize = 20;
		score = 0;
		updateDelay = 0;
		direction = 'right';
		new_direction = null;
		addNew = false;

		levels = { "Easy": 2, "Medium": 4, "Hard": 6, "Impossible": 8 };
		level = localStorage.getItem("level");

		if (localStorage.getItem('snakeColor') === null) {
			snakeColor = "black";
		} else {
			snakeColor = localStorage.getItem('snakeColor');
		}
		if (localStorage.getItem('foodColor') === null) {
			foodColor = "black";
		} else {
			foodColor = localStorage.getItem('foodColor');
		}

		cursors = game.input.keyboard.createCursorKeys();

		for (var i = 0; i < 5; i++) {
			snake[i] = game.add.sprite(400 + i * squareSize, 300, snakeColor);
		}
		this.createFood();

		style = { font: "20px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };

		// Score
		game.add.text(550, 20, strings.score + ": ", style);
		scoreTextValue = game.add.text(660, 20, score, style);
		// Level
		game.add.text(550, 50, strings.level + ": ", style);
		speedTextValue = game.add.text(630, 50, level, style);

		spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		gamePaused = false;
	},

	update: function () {
		if (spaceKey.isDown && gamePaused == false) {
			gamePaused = true;
		} else if (spaceKey.isDown && gamePaused == true) {
			gamePaused = false;
		}

		if (!gamePaused) {
			if (cursors.right.isDown && direction != 'left') {
				new_direction = 'right';
			} else if (cursors.left.isDown && direction != 'right') {
				new_direction = 'left';
			} else if (cursors.up.isDown && direction != 'down') {
				new_direction = 'up';
			} else if (cursors.down.isDown && direction != 'up') {
				new_direction = 'down';
			}

			updateDelay++;

			if (updateDelay % (10 - levels[level]) == 0) {
				var firstCell = snake[snake.length - 1],
					lastCell = snake.shift(),
					oldLastCellx = lastCell.x,
					oldLastCelly = lastCell.y;

				if (new_direction) {
					direction = new_direction;
					new_direction = null;
				}

				if (direction == 'right') {
					lastCell.x = firstCell.x + 20;
					lastCell.y = firstCell.y;
				} else if (direction == 'left') {
					lastCell.x = firstCell.x - 20;
					lastCell.y = firstCell.y;
				} else if (direction == 'up') {
					lastCell.x = firstCell.x;
					lastCell.y = firstCell.y - 20;
				} else if (direction == 'down') {
					lastCell.x = firstCell.x;
					lastCell.y = firstCell.y + 20;
				}

				snake.push(lastCell);
				firstCell = lastCell;

				if (addNew) {
					snake.unshift(game.add.sprite(oldLastCellx, oldLastCelly, snakeColor));
					addNew = false;
				}
				this.foodCollision();
				this.selfCollision(firstCell);
				this.wallCollision(firstCell);
			}
		}
	},

	createFood: function () {
		var randomX = Math.floor(Math.random() * 40) * squareSize;
		var randomY = Math.floor(Math.random() * 30) * squareSize;

		food = game.add.sprite(randomX, randomY, foodColor);
	},

	foodCollision: function () {
		for (var i = 0; i < snake.length; i++) {
			if (snake[i].x == food.x && snake[i].y == food.y) {
				addNew = true;
				food.destroy();
				this.createFood();
				score++;
				scoreTextValue.text = score.toString();
			}
		}
	},

	selfCollision: function (head) {
		for (var i = 0; i < snake.length - 1; i++) {
			if (head.x == snake[i].x && head.y == snake[i].y) {
				game.state.start('Game_Over');
			}
		}
	},

	wallCollision: function (head) {
		if (head.x >= 800 || head.x < 0 || head.y >= 600 || head.y < 0) {
			game.state.start('Game_Over');
		}
	}
};