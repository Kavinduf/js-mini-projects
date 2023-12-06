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
gamePattern = [];
userClickPattern = [];


function nextSequence(){
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];

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
			var userChosenColor= $(this).attr("id");
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
})


function playSound(name){
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColor){
	$("." + currentColor).addClass("pressed");

	setTimeout(function () {
		$("." + currentColor).removeClass("pressed");
	}, 100);
}