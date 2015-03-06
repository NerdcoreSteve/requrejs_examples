require(["scripts/libraries/jquery-1.11.2.js"], function() {
    $(".some_button").click(function() { $(".some_paragraph").html("You changed the text!"); });
});
