document.addEventListener('DOMContentLoaded', function(){

//  Глобальные переменные 

var client_width = document.documentElement.clientWidth; //     ширина окна


//  Бургер
document.querySelector('.burger').addEventListener('click', function(e){

    var burger = e.target;
    var menu = document.querySelector('.side-menu');

    if(!burger.classList.contains('_show')){
        burger.classList.add('_show');
        menu.classList.add('_show');
    } else {
        burger.classList.remove('_show');
        menu.classList.remove('_show');
    }

});



//  Scroll, если высота левого блока > 100vh
var left_block_cont = document.querySelector('.side__container');
var left_block_cont_height = 0;
var client_inner_height = window.innerHeight;

function add_scroll_or_not(){

    left_block_cont_height = window.getComputedStyle(left_block_cont).height;

    if(+client_inner_height < parseInt(left_block_cont_height, 10)){
        left_block_cont.classList.add('_scroll');
    } else {
        left_block_cont.classList.remove('_scroll');   
    }

};
add_scroll_or_not();



//  Показать дополнительные параметры фильтра
var show_filter_subs_btn = document.querySelector('.filter__show-sub');
var filter_subs = document.querySelector('.filter-sub');
show_filter_subs_btn.addEventListener('click', function(e){

    if(!filter_subs.classList.contains('_show')){
        filter_subs.classList.add('_show');
        show_filter_subs_btn.innerText = 'Скрыть';
    } else {
        filter_subs.classList.remove('_show');
        show_filter_subs_btn.innerText = 'Дополнительные параметры';
    }

    if(!left_block_cont.classList.contains('_scroll')){
      add_scroll_or_not();
    }
    
});



//  Показ фильтра для <768px
if(+client_width <= 768){

    var filter = document.querySelector('.filter');
    var filter_h = window.getComputedStyle(filter).height;
    var filter_patop = window.getComputedStyle(filter).paddingTop;
    var filter_pabot = window.getComputedStyle(filter).paddingBottom;
    var filter_mabot = window.getComputedStyle(filter).marginBottom;

    filter.setAttribute('style', 'height: 0; padding-top: 0; padding-bottom: 0; margin-bottom: 0;');

    var filter_hide_btn = document.querySelector('.filter__hide-btn');
    filter_hide_btn.addEventListener('click', function(){

        if(!filter_hide_btn.classList.contains('_show')){
            filter_hide_btn.classList.add('_show');
            filter_hide_btn.innerText = 'Скрыть фильтр';
            filter.setAttribute('style', 'height: ' + filter_h + '; ' + 'padding-top: ' + filter_patop + ';' + 'padding-bottom: ' + filter_pabot + ';' + 'margin-bottom: ' + filter_mabot + ';');

        } else {
            filter_hide_btn.classList.remove('_show');
            filter_hide_btn.innerText = 'Показать фильтр';
            filter.setAttribute('style', 'height: 0; padding-top: 0; padding-bottom: 0; margin-bottom: 0;');
        }

    });
    
}







//  END
});