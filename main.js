window.onload = function(){
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menu');
    var close = document.getElementById('close');

    burger.onclick = function () {
        menu.classList.add('open');
    };
    close.onclick = function () {
        menu.classList.remove('open');
    };
};