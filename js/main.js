// nav-icon

const navBtn = document.querySelector('.nav-icon-btn'),
    navIcon = document.querySelector('.nav-icon'),
    nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

// input-mask

var selector = document.querySelectorAll('[type="tel"]');
selector.forEach(item => {
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(item);
})

// lightbox

MediaBox('.mediabox');

// yandex-map

ymaps.ready(init);
function init() {

    var myMap = new ymaps.Map("map", {
        center: [59.943543, 30.338928],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Адрес',
        balloonContent: 'Наб. реки Фонтанки 10-15'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/map/marker.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');
    // myMap.controls.remove('rulerControl');
    // myMap.controls.remove('zoomControl');

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
}

