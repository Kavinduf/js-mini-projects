
//Detecting button press
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonInnerHtml = this.innerHTML;
		selectPress(buttonInnerHtml);
	});
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
	selectPress(event.key);
})


function selectPress(keypress){
	switch (keypress) {
	 case "w":
		 var audio = new Audio ("sounds/tom-1.mp3")
		 audio.play();
	 break;
	 case "a":
		 var audio = new Audio ("sounds/tom-2.mp3")
		 audio.play();
	 break;
	 case "s":
		 var audio = new Audio ("sounds/tom-2.mp3")
		 audio.play();
	 break;
	 case "d":
		 var audio = new Audio ("sounds/tom-4.mp3")
		 audio.play();
	 break;
	 case "j":
		 var audio = new Audio ("sounds/snare.mp3")
		 audio.play();
	 break;
	 case "k":
		 var audio = new Audio ("sounds/crash.mp3")
		 audio.play();
	 break;
	 case "l":
		 var audio = new Audio ("sounds/kick-bass.mp3")
		 audio.play();
	 break;
	 default: console.log(buttonInnerHtml)
		 break;
	}
}
