$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $('#navbar').removeClass('navbar-transparent')
        } else {
            $('#navbar').addClass('navbar-transparent')
        }
    })
})