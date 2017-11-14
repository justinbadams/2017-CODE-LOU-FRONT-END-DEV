// When button is clicked to sumit free estimate request will reaveal hidden span

// hide .request span saying thank you for your request
$(".thanks span").hide();
// add button over top
$(".thanks").append("<button>Submit Your Request</button>");

$("button").click(function(){
//on click  show span
    $(".thanks span").show();
//removes button
    $(this).remove();
});

