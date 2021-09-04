$(document).ready(function () {
    $('.js-main-menu-btn').on('click', function () {
        if ($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
        } else {
            $('.js-header').addClass('active');
        }
    })
});