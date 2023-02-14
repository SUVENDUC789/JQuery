
/*
     Event in jQuery
         - mouse event = click , double click , mouse leav , mouse enter
         - keyboard event = key press , key down , Media key status Map
         - form event = submit , change , focus , blur
         - document / window event = load , resize , scroll , unload 
*/

$(document).ready(function () {

    $('h1').click(function () {
        console.log('clicked on h1 element');
    });

    $('h2').dblclick(function () {
        console.log('clicked on h2 element');
    });

    $('p.enter').mouseenter(function () {
        console.log('Mouse Enter :');
    });

    $('p.enter').mouseleave(function () {
        console.log('Mouse Leav :');
    });

    $('p.hover').hover(function () {
        console.log('Mouse Hover :');
    });

    // hover method takes two parameter 
    $('.suv').hover(function () {
        console.log('Mouse Hover :');
    },
        function () {
            console.log('Thanks for comming');
        }

    );

    // Multiple mouse event call at a time 
    $('#sup').on(
        {
            click: function () {
                console.log('click ');
            },

            dblclick: function () {
                console.log('Double click ');
            }
        }
    );


    $('#time').hide(2000, function () {
        console.log('hidden');
    });

    $('#time').show(2000, function () {
        console.log('Show');
    });

    $('#buty').click(function () {
        $('#time').toggle(2000);
    })

    $('#buty').click(function () {
        $('#time').slideToggle(2000 / 2);
    })

    // Own try 
    // fadeIn(),
    // fadeOut(),
    // fadeToggle(),
    // fadeTo(),
});