//Game start

// var task = [];
// var buttonClicks = [];
// var gameStatus;
// var looping;

// if (gameStatus == "over" && looping == false) {
// 	gameStatus = "start";

// 	$("body").keypress(function () {
// 		looping = true;

// 		$("h1").text("Level 1");
// 		randomSelector();
// 	});
// }

// function randomSelector() {
// 	var random = Math.floor(Math.random() * 4);
// 	task.push(random);

// 	switch (random) {
// 		case 0:
// 			$(".green").fadeOut(100).fadeIn(100);
// 			break;
// 		case 1:
// 			$(".red").fadeOut(100).fadeIn(100);
// 			break;
// 		case 2:
// 			$(".yellow").fadeOut(100).fadeIn(100);
// 			break;
// 		case 3:
// 			$(".blue").fadeOut(100).fadeIn(100);
// 			break;
// 	}

// 	userClick();
// }

// function userClick() {
// 	$(".btn").click(function () {
// 		var click = $(this).attr("class");

// 		switch (click) {
// 			case "btn green":
// 				buttonClicks.push(0);
// 				break;
// 			case "btn red":
// 				buttonClicks.push(1);
// 				break;
// 			case "btn yellow":
// 				buttonClicks.push(2);
// 				break;
// 			case "btn blue":
// 				buttonClicks.push(3);
// 				break;
// 		}

// 		if (task == buttonClicks) {
// 			randomSelector();
// 		} else {
// 			console.log("over");
// 		}
// 	});
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var started = false;

// game start keypress function
$("body").keypress(function () {
	if (started == false) {
		started = true;
		nextSequence();
	}
});

function nextSequence() {
	level++;
	$("h1").text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	switch (randomChosenColor) {
		case "green":
			$(".green").fadeOut(50).fadeIn(50);
			playSound("green");
			break;
		case "red":
			$(".red").fadeOut(50).fadeIn(50);
			playSound("red");
			break;
		case "yellow":
			$(".yellow").fadeOut(50).fadeIn(50);
			playSound("yellow");
			break;
		case "blue":
			$(".blue").fadeOut(50).fadeIn(50);
			playSound("blue");
			break;
	}
}

$(".btn").click(function () {
	var userChosenColor = $(this).attr("id");
	userClickPattern.push(userChosenColor);

	animatePress(userChosenColor);

	switch (userChosenColor) {
		case "green":
			playSound("green");
			break;
		case "red":
			playSound("red");
			break;
		case "yellow":
			playSound("yellow");
			break;
		case "blue":
			playSound("blue");
			break;
	}

	var userArrayLength = userClickPattern.length - 1;
	checkAnswer(userArrayLength);
});

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] == userClickPattern[currentLevel]) {
		if (currentLevel == gamePattern.length - 1) {
			setTimeout(function () {
				userClickPattern = [];
				nextSequence();
			}, 1000);
		}
	} else {
		playSound("wrong");
		$("body").addClass("game-over");
		$("h1").text("Game Over");
		startOver();

		setTimeout(function () {
			$("body").removeClass("game-over");
			$("h1").text("Press Any Key to Restart");
		}, 200);
	}
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColor) {
	$("." + currentColor).addClass("pressed");

	setTimeout(function () {
		$("." + currentColor).removeClass("pressed");
	}, 100);
}

function startOver() {
	started = false;
	level = 0;
	gamePattern = [];
	userClickPattern = [];
}
