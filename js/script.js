$(document).ready(function() {

	$(".ui-message").append('<span class="ui-close">X</span>') // manipulating the dom

	$(".ui-close").click(function() { // event handling
		// $(".ui-message").hide();
		$(this).parents(".ui-message").fadeOut(); // traversing the dom
		// It can be written as parent too without the s.
	});
});

$(document).ready(function(){
    $('#square').click(function(){
        $(this).animate({
            left: '+=10px'
    });
  })
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

$(document).ready(function() {
	$(".ui-message").append('<span class="ui-close">X</span>')
	$(".ui-close").click(function() {
		$(this).parents(".ui-message").fadeOut();
	});
	$(".answer").hide();
	$("h4").click(function() {
		$(this).next(".answer").slideToggle();
	})
	$("h4").addClass("faq-question");
});
