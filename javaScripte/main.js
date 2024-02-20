// SLIDE SECTION

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grapCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const btns = document.querySelectorAll('.btn');
    const serviceTexts = document.querySelectorAll('.service-text');
    
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (serviceTexts[index].classList.contains('active')) {
          serviceTexts[index].classList.remove('active');
          btn.textContent = 'Read More';
        } else {
          serviceTexts[index].classList.add('active');
          btn.textContent = 'Read Less';
        }
      });
    });
