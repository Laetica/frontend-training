var initCustomDropdown = function(select) {

    if (!$(select).length) {
        return false;
    }

    var label = $(select).attr('data-label');

    $('.country-select').dropdown({ //init plugin formstone dropdown
        label: label
    }).on('change', function() {
        $(this).closest('.fs-dropdown').addClass('value-selected');
        $(this).off('change');
    });
};

initCustomDropdown('.country-select');