;(function (){
    var capchaRandom = function (){
        var capcha = document.querySelector('.capcha-number');
        var num;
        while(true) {
            num = Math.floor(Math.random()*1000000);
            if (num>99999) {
                capcha.innerHTML = num;
                break;
            }
        }
        return num;
    };
    capchaRandom();
    var reload = document.querySelector('.capcha-reload');
    reload.addEventListener('click', capchaRandom);
    reload.removeEventListener('mouseleave', capchaRandom);
}());