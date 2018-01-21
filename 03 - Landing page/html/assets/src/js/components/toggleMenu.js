var toggleMenu = function(trigger, target) { // Open/Close the mobile menu
    var nav = $(target),
        trigger = $(trigger),
        body = nav.closest('body');

    if (!trigger.length || !nav.length) { //check if navigation,
        return false;
    }

    trigger.on('click', function() {
        if (!nav.hasClass('opened') && !body.hasClass('menu-opened')) {
            trigger.addClass('active');
            nav.addClass('opened');
            body.addClass('menu-opened');
        } else {
            trigger.removeClass('active');
            nav.removeClass('opened');
            body.removeClass('menu-opened');
        }
    });
};

toggleMenu('.js-toggle-menu', 'header nav');