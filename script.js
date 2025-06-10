     var swiper = new Swiper(".mySwiper", {
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
             breakpoints: {
          30: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          
        },
        });

        function Click(){
     const showdata=document.getElementById('manlist');
     showdata.classList.toggle('tag');

       const cicon = document.querySelector('.menuicon i');
             cicon.classList.toggle('fa-x')
        }