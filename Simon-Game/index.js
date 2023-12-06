//Game start

var task = [];
var buttonClicks = [];
var gameStatus;
var looping;

if (gameStatus == "over" && looping == false) {
	gameStatus = "start";

	$("body").keypress(function () {
		looping = true;

		$("h1").text("Level 1");
		randomSelector();
	});
}

function randomSelector() {
	var random = Math.floor(Math.random() * 4);
	task.push(random);

	switch (random) {
		case 0:
			$(".green").fadeOut(100).fadeIn(100);
			break;
		case 1:
			$(".red").fadeOut(100).fadeIn(100);
			break;
		case 2:
			$(".yellow").fadeOut(100).fadeIn(100);
			break;
		case 3:
			$(".blue").fadeOut(100).fadeIn(100);
			break;
	}

	userClick();
}

function userClick() {
	$(".btn").click(function () {
		var click = $(this).attr("class");

		switch (click) {
			case "btn green":
				buttonClicks.push(0);
				break;
			case "btn red":
				buttonClicks.push(1);
				break;
			case "btn yellow":
				buttonClicks.push(2);
				break;
			case "btn blue":
				buttonClicks.push(3);
				break;
		}

		if (task == buttonClicks) {
			randomSelector();
		} else {
			console.log("over");
		}
	});
}
