document.addEventListener('DOMContentLoaded', () => {
    const thumbnailsSlider = new Swiper('.custom-featured-product__featured-thumbs', {
        slidesPerView: 'auto',
        enabled: false,
        mousewheel: {
            enabled: true,
            releaseOnEdges: true,
            forceToAxis: true
        },
        freeMode: {
            enabled: true
        },
        breakpoints: {
            769: {
                enabled: true
            }
        }
    });

    new Swiper('.custom-featured-product__featured-slider', {
        slidesPerView: 'auto',
        thumbs: {
            swiper: thumbnailsSlider,
        },
        navigation: {
            prevEl: ".custom-featured-product__featured-slider .featured-slider__prev",
            nextEl: ".custom-featured-product__featured-slider .featured-slider__next"
        },
        pagination: {
            el: ".featured-slider__pagination",
        },
        mousewheel: {
            enabled: true,
            releaseOnEdges: true,
            forceToAxis: true
        }
    })
});