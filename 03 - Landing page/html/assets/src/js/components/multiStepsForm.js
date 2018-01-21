var multiStepsForm = function(context) {
    var container = $(context);

    if (!container.length) {
        return false;
    }

    var stepItems = container.find('.step-item'),
        tabItems = container.find('.tabs button');

    var setStepHeight = function() { // get the taller step height and set it on the others steps
        var len = stepItems.length,
            i = 0;
        var maxHeight = 0;

        for (; i < len; i += 1) {
            var current = $(stepItems[i]),
                currentHeight = 0;

            current.height('auto');

            if (current.hasClass('hide')) {
                currentHeight = current.removeClass('hide').height();
                current.addClass('hide');
            } else {
                currentHeight = current.height();
            }

            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        }

        stepItems.height(maxHeight);
    };

    var setIndex = function(element) { // set index on element(s)
        var len = element.length,
            i = 0;

        for (; i < len; i += 1) {
            var current = $(element[i]);
            current.attr('data-index', i);
        }
    };

    var isCurrentStepValid = function() {
        //check valid fields
        //optional for exercice

        //HIRE ME IF YOU WANT TO SEE MORE :-)
        return true;
    };

    var updateTabsNavigation = function(currentStep) { // function to toggle class 'active', 'done' on tabs navigation
        var currentStepIndex = parseInt(currentStep.attr('data-index'), 10);

        var len = tabItems.length,
            i = 0;

        for (; i < len; i += 1) {
            var currentTab = $(tabItems[i]);
            if (i < currentStepIndex) {
                currentTab.removeClass('active').addClass('done');
            } else if (i === currentStepIndex) {
                currentTab.addClass('active').removeClass('done');
            } else {
                currentTab.removeClass('active done');
            }
        }
    };

    var goToStep = function(currentStep, nextStep) { // function to hide current step / show target one
        currentStep.addClass('hide');
        nextStep.removeClass('hide');

        $('html, body').animate({
            scrollTop: container.offset().top - 20
        }, 500);

        updateTabsNavigation(nextStep);
    };

    var addClickTab = function() { // on tab click event
        tabItems.on('click', function(event) {
            event.preventDefault();
            var nextStepIndex = $(this).attr('data-index');
            var currentStepIndex = tabItems.filter('.active').attr('data-index');

            goToStep($(stepItems[currentStepIndex]), $(stepItems[nextStepIndex]));
        });
    };

    var addClickEvent = function() { // on next button click event
        var nextButtons = container.find('.next');

        nextButtons.on('click', function(event) {
            event.preventDefault();

            var currentStep = $(this).closest('.step-item');

            if (!isCurrentStepValid) {
                return false;
            }

            var nextStepIndex = parseInt(currentStep.attr('data-index'), 10) + 1;
            var nextStep = $(stepItems[nextStepIndex]);

            goToStep(currentStep, nextStep);

        });
    };

    setStepHeight();
    setIndex(stepItems);
    setIndex(tabItems);
    addClickEvent();
    addClickTab();
    $(window).on('resize', function() {
        setStepHeight();
    });


};

multiStepsForm('.js-multi-steps-form');