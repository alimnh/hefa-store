const figure = document.querySelector('.figure');
const jumbopict = document.querySelector('.jumbopict');
const thumbpict = document.querySelectorAll('thumbpict');

figure.addEventListener('click', function(e) {

    ///cek apakah yang di klik adalah thumb
    if(e.target.className == 'thumbpict'){
        jumbopict.src = e.target.src;
        jumbopict.classList.add('img-fluid');
        jumbopict.classList.add('fade');
        setTimeout(function() {
            jumbopict.classList.remove('fade');
        }, 300);
    }

});