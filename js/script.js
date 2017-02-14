// Code to move square
$(document).ready(function(){
    $('#square').click(function(){
        $("#square").animate({
            left: '+=10px'
    });
  })
  document.title = "Changing the title"
  // document.body.style.backgroundColor = "green"
  document.getElementById('headline').innerHTML = "This is a test"
  var getElementById = document.getElementById('headline');
  getElementById.innerHTML = "This is ANOTHER test";
  var listItems = document.getElementById('our-list').getElementsByTagName('li')
  // listItems[3].innerHTML = "Hello World";

  for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activatedItem);
  }
  function activatedItem() {
    alert("click detected");
  };
  // Code to hide X and toggle answers
  $(".ui-message").append('<span class="ui-close">X</span>')
  $(".ui-close").click(function() {
    $(this).parents(".ui-message").fadeOut();
  });
  // Code to slideToggle answers of questions //
  $(".answer").hide();
  $("h4").click(function() {
    $(this).next(".answer").slideToggle();
  });
  $("h4").addClass("faq-question");

  // alert(scrollPos);
  $(".red").click(function() {
    $(".red").hide();
  });
  $(".blue").click(function() {
    $(".blue").slideUp();
  });
  //// PROMPT CUSTOME NAME GREETING //////
  // var name = prompt("what is your name?");

  // Change color of element from Javascript
  // document.getElementById('footer').style.color = "blue";
  $("#footer").append(name);
  $("#footer").click(function() {
    $("#footer").slideUp();
  });

  ///////// CLOCK CODE //////////////////////
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  $(".clock").append(currentTimeString);
});
