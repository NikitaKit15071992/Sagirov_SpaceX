$('.header__burger').on('click', function(){
    $('.mobileMenu').addClass('mobileMenu--show');
});

$('.mobileMenu__close').on('click', function(){
    $('.mobileMenu').removeClass('mobileMenu--show');
});