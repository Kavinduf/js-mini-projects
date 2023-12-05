// console.log($("h1").css("color"));

//change styles
// $("h1").css("color", "yellow");

//add class
// $("h1").addClass("big-title");
// $("h1").addClass("big-title margin-50");

//check class
// $("h1").hasClass("margin-50");

//change text
// $("h1").text("Bye");
// $("button").text("Dont click me");
// $("button").html("<em>Hello</em>");

//set attribute 
// $("a").attr("href", "https://www.yaho.com");

//Evenet listners
// $("h1").click(function(){
//   $("h1").css("color", "Purple");
// })

// $("button").click(function(){
//   $("h1").css("color", "green");
// })

// $("input").keypress(function(event){
//   console.log(event.key)
//   $("h1").text(event.key)
// })

//create elements using js
// $("h1").before("<button>Next</button>");
// $("h1").after("<button>Previous</button>");
// $("h1").prepend("<button>Prepend</button>");
// $("h1").append  ("<button>Append</button>");

// Create animation
// $("button").click(function(){
//   $("h1").hide();
// })

$("button").click(function(){
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();

  //can only be used with numerical values
  $("h1").animate({opacity: 0.5});
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})