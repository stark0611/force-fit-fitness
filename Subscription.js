var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
  });







  function changeM(){
    document.querySelector('.exerciseM').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }


  function changeT(){
    document.querySelector('.exerciseT').style.display = 'flex';
    document.querySelector('.exerciseM').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }

  function changeW(){
    document.querySelector('.exerciseW').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseM').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }

  function changeTH(){
    document.querySelector('.exerciseTH').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseM').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }

  function changeF(){
    document.querySelector('.exerciseF').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseM').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }

  function changeS(){
    document.querySelector('.exerciseS').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseM').style.display = 'none';
    document.querySelector('.exerciseSU').style.display = 'none';
  }

  function changeSU(){
    document.querySelector('.exerciseSU').style.display = 'flex';
    document.querySelector('.exerciseT').style.display = 'none';
    document.querySelector('.exerciseW').style.display = 'none';
    document.querySelector('.exerciseTH').style.display = 'none';
    document.querySelector('.exerciseF').style.display = 'none';
    document.querySelector('.exerciseS').style.display = 'none';
    document.querySelector('.exerciseM').style.display = 'none';
  }








  function changem(){
    document.querySelector('.exercisem').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }


  function changet(){
    document.querySelector('.exerciset').style.display = 'flex';
    document.querySelector('.exercisem').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }

  function changew(){
    document.querySelector('.exercisew').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisem').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }

  function changeth(){
    document.querySelector('.exerciseth').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exercisem').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }

  function changef(){
    document.querySelector('.exercisef').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisem').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }

  function changes(){
    document.querySelector('.exercises').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercisem').style.display = 'none';
    document.querySelector('.exercisesu').style.display = 'none';
  }

  function changesu(){
    document.querySelector('.exercisesu').style.display = 'flex';
    document.querySelector('.exerciset').style.display = 'none';
    document.querySelector('.exercisew').style.display = 'none';
    document.querySelector('.exerciseth').style.display = 'none';
    document.querySelector('.exercisef').style.display = 'none';
    document.querySelector('.exercises').style.display = 'none';
    document.querySelector('.exercisem').style.display = 'none';
  }