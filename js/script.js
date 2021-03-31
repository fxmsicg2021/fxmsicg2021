// Swiper script
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

// Collapsible script
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}