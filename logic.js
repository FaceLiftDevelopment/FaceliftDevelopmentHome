var height = 0;
var width = 0;

var name = "";
var email = "";
var subject = "";
var message = "";
var number = "";


$(document).ready(function () {
  console.log("ready!");
  width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  console.log(height);
  // Hide navbar
  $("#navbar").hide();

  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash - 50;
      });
    } // End if
  });

});

$(window).scroll(function () {
  if ($(this).scrollTop() > height - 100) {
    $("#navbar").fadeIn();
  } else {
    $("#navbar").fadeOut();
  }
});

$("#submit-message").click(function() {
  console.log("clicked")
  name = $("#your-name").val();
  email = $("#your-email").val();
  number = $("#your-number").val();
  subject = $("#your-subject").val();
  message = $("#your-message").val();
  console.log(name);
  console.log(email);
  console.log(subject);
  console.log(message);
});