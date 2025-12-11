let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeRunning = 2000;

let runTimeOut;
let autoTime = 60000; // 3 minutos

nextDom.onclick = function(){
    showSlider('next');
    resetAutoSlider();
}

prevDom.onclick = function(){
    showSlider('prev');
    resetAutoSlider();
}

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// Auto slider
let autoSlider = setInterval(() => {
    showSlider('next');
}, autoTime);

// Reset auto slider al hacer clic
function resetAutoSlider() {
    clearInterval(autoSlider);
    autoSlider = setInterval(() => {
        showSlider('next');
    }, autoTime);
}
