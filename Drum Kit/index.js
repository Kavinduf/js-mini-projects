for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document
		.querySelectorAll("button")
		[i].addEventListener("click", function () {
			alert("you clicked me");
		});
}
