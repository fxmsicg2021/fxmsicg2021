var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1, 

    breakpoints: {
        1199: {
            slidesPerView: 4,
            spaceBetween: 0,
            slidesPerGroup: 4, 
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3, 
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2, 
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2, 
        }
    },

    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});