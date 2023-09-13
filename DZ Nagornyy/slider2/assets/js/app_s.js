let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let images = document.querySelectorAll('.photo img');
let i = 0;

// функция для листалки назад
btnPrev.onclick = function() {
    
    images[i].className = '';

    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className='shown';
}

// функция для листалки вперед
btnNext.onclick = function() {
    
    images[i].className = '';

    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className='shown';

}



let timerId = setTimeout(function tick() {
    console.log('tick ');

    images[i].className = '';

    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className='shown';

    timerId = setTimeout(tick, 5000); // (*)
}, 0);
