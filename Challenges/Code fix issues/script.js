document.addEventListener("DOMContentLoaded", function (event) {
    var items = document.querySelectorAll('.item');

    // replace var with let to fix this issue!
    /*
    for (let i = 0; i < items.length; i++) {
        var element = items[i];
        element.addEventListener('click', function (_) {
            console.log('You clicked on button # ' + i);
        });
    }
    */

    // using immediately invoked function expression
    for (var i = 0; i < items.length; i++) {
        var element = items[i];

        (function (i) {
            element.addEventListener('click', function (_) {
                console.log('You clicked on button # ' + i);
            });
        })(i);
    }

    // using helper function
    /*
    function addClickListener(element, i) {
        element.addEventListener('click', function (_) {
            console.log('You clicked on button # ' + i);
        });
    }
    
    for (var i = 0; i < items.length; i++) {
        var element = items[i];

        addClickListener(element, i);
    }
    */

});