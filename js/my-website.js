
function myFunction(){
    var x = document.getElementById("subH");
    if (x.innerHTML === "TO DESIGN"){
        x.innerHTML = "TO CODE";
    }else{
        x.innerHTML = "TO DESIGN";
    }
}
$("#main-header");
$(".subheader").click(function(){
    $("#jumbotron-container").slideToggle("slow");
});

$(".prismGrid").hide();
$(".subheader").click(function () {
    $(".prismGrid").slideToggle("slow")
});

$(".main-contain").hide();
$(".b1").click(function() {
    $(".prismGrid").animate({right: '250px'});
    $(".jumbotron-fluid").toggle("slow", "swing");
    $(".main-contain").slideToggle("slow");
    $(".b1, .b4").fadeOut();

});

$(".b2").click(function() {
    $(".b2").toggleClass("b2a");
    $(".jumbotron-fluid").toggle("slow", "swing");
});

$(".b3").click(function() {
    $(".prismGrid").animate({left: '250px'});
    $(".jumbotron-fluid").toggle("slow", "swing");
    $(".main-contain").slideToggle("slow");
    $(".b3, .b6").fadeOut();
});

$(".b4").click(function() {
    $(".b4").toggleClass("b6A");
    $(".main-contain").slideToggle("slow");
    // $(".jumbotron-fluid").toggle("slow", "swing");
});

$(".image").hide();
$(".b5").click(function() {
    $(".b5").toggleClass("b5a");
    $(".image").toggle("slow");
    // $(".jumbotron-fluid").toggle("slow", "swing");
});
$(".ba5").click(function() {
    $(this).toggleClass("b5");
    $(".image").toggle("slow");
    // $(".jumbotron-fluid").toggle("slow", "swing");
});

$(".b6").click(function() {
    $(".b6").toggleClass("b6A");
    $(".main-contain").slideToggle("slow");
    // $(".jumbotron-fluid").toggle("slow", "swing");
});

$(".image").click(function () {
    $(this).hide();
});


