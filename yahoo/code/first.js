$(document).ready(function () {
    let a = $(".text-center").html();
    console.log(a);

    $("#list").css("color", "green");
    $("li:even").css("color", "red");
    // $("ul li").css("border","2px solid black");

    $("h1,h2,h3").css("color","red");
    // $("h1,h2,h3").css("bg-color","green");
    // $("h1 h2 h3").css("bg-color","green");

    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            $("ul li:eq(" + i + ")").css("border", "2px solid black");
        }
    }
});