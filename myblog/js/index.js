/**
 * Created by dell on 2017/3/5.
 */
$(function(){
    var sidebar = $('#side-bar'),
        mask = $('.mask'),
        show_bar = $('.show_bar'),
        gotop = $('.go-top');
    show_bar.on('click',function(){
        mask.fadeIn();
        sidebar.css('right',0);
    });
    mask.on('click',function(){
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    });
    gotop.on('click',function(){
        $('html,body').animate(
            {
                scrollTop:0
            },800)
    });
    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height()) {
            gotop.fadeIn();}
        else{
            gotop.fadeOut();
        }
    });
    $(window).trigger('scroll');


});