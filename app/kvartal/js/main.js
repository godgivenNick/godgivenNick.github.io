document.addEventListener('DOMContentLoaded', function(){

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

});