$(document).ready(function () {

    console.log($);
    console.log(jQuery);

    // $('selector').action()//this is the syantax of jQuery
    // $('#id').action()//this is the syantax of jQuery
    // $('.class').action()//this is the syantax of jQuery

    $('h1').click(function () {
        console.log('clicked on');
        $('p').hide();//hide paragraph p
    });

    // click current selector  
    $('p').click(function () {
        $(this).hide()
    });

})

/*
There are 3 types of selector in jQuery
    - class selector // $('.class').action()
    - id selector // $('#id').action()
    - element selector // $('selector').action()
*/

$('#sup').click(function () {
    console.log('i am in id Supratim', this)
})

$('.suv').click(function () {
    console.log('i am in id Suvendu', this)
})