window.onscroll = function() {

    scrollfunction();

}

var nav = document.getElementById('navbar');
var scrolSize = nav.offsetTop;

function scrollfunction() {

    if (window.scrollY >= scrolSize) {

        nav.classList.add('navJS-code');

    }
    if (window.scrollY == scrolSize) {

        nav.classList.remove('navJS-code');

    }

}




function slideup() {

    document.getElementById("sear").classList.toggle("tolg");


}