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



  function Changem(){
    document.querySelector('.containerM').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }


  function Changet(){
    document.querySelector('.containerT').style.display = 'flex';
    document.querySelector('.containerM').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }

  function Changew(){
    document.querySelector('.containerW').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerM').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }

  function Changeth(){
    document.querySelector('.containerTH').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerM').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }

  function Changef(){
    document.querySelector('.containerF').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerM').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }

  function Changes(){
    document.querySelector('.containerS').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerM').style.display = 'none';
    document.querySelector('.containerSU').style.display = 'none';
  }

  function Changesu(){
    document.querySelector('.containerSU').style.display = 'flex';
    document.querySelector('.containerT').style.display = 'none';
    document.querySelector('.containerW').style.display = 'none';
    document.querySelector('.containerTH').style.display = 'none';
    document.querySelector('.containerF').style.display = 'none';
    document.querySelector('.containerS').style.display = 'none';
    document.querySelector('.containerM').style.display = 'none';
  }


  let btnDone1 = document.querySelector('#done1');
  let btnDone2 = document.querySelector('#done2');
  let btnDone3 = document.querySelector('#done3');
  let btnDone4 = document.querySelector('#done4');
  let btnDone5 = document.querySelector('#done5');
  let btnDone6 = document.querySelector('#done6');
  let btnDone7 = document.querySelector('#done7');
  let btnDone8 = document.querySelector('#done8');
  let btnDone9 = document.querySelector('#done9');
  let btnDone11 = document.querySelector('#done11');
  let btnDone12 = document.querySelector('#done12');
  let btnDone13 = document.querySelector('#done13');
  let btnDone14 = document.querySelector('#done14');
  let btnDone15 = document.querySelector('#done15');
  let btnDone16 = document.querySelector('#done16');
  let btnDone17 = document.querySelector('#done17');
  let btnDone18 = document.querySelector('#done18');
  let btnDone19 = document.querySelector('#done19');
  let btnDone21 = document.querySelector('#done21');
  let btnDone22 = document.querySelector('#done22');
  let btnDone23 = document.querySelector('#done23');
  let btnDone24 = document.querySelector('#done24');
  let btnDone25 = document.querySelector('#done25');
  let btnDone26 = document.querySelector('#done26');
  let btnDone27 = document.querySelector('#done27');
  let btnDone28 = document.querySelector('#done28');
  let btnDone29 = document.querySelector('#done29');
  let btnDone31 = document.querySelector('#done31');
  let btnDone32 = document.querySelector('#done32');
  let btnDone33 = document.querySelector('#done33');
  let btnDone34 = document.querySelector('#done34');
  let btnDone35 = document.querySelector('#done35');
  let btnDone36 = document.querySelector('#done36');
  let btnDone37 = document.querySelector('#done37');
  let btnDone38 = document.querySelector('#done38');
  let btnDone39 = document.querySelector('#done39');
  let btnDone41 = document.querySelector('#done41');
  let btnDone42 = document.querySelector('#done42');
  let btnDone43 = document.querySelector('#done43');
  let btnDone44 = document.querySelector('#done44');
  let btnDone45 = document.querySelector('#done45');
  let btnDone46 = document.querySelector('#done46');
  let btnDone47 = document.querySelector('#done47');
  let btnDone48 = document.querySelector('#done48');
  let btnDone49 = document.querySelector('#done49');
  let btnDone51 = document.querySelector('#done51');
  let btnDone52 = document.querySelector('#done52');
  let btnDone53 = document.querySelector('#done53');
  let btnDone54 = document.querySelector('#done54');
  let btnDone55 = document.querySelector('#done55');
  let btnDone56 = document.querySelector('#done56');
  let btnDone57 = document.querySelector('#done57');
  let btnDone58 = document.querySelector('#done58');
  let btnDone59 = document.querySelector('#done59');
  let btnDone61 = document.querySelector('#done61');
  let btnDone62 = document.querySelector('#done62');
  let btnDone63 = document.querySelector('#done63');
  let btnDone64 = document.querySelector('#done64');
  let btnDone65 = document.querySelector('#done65');
  let btnDone66 = document.querySelector('#done66');
  let btnDone67 = document.querySelector('#done67');
  let btnDone68 = document.querySelector('#done68');
  let btnDone69 = document.querySelector('#done69');


  btnDone1.addEventListener('click', () => btnDone1.style.backgroundColor ='#000');
  btnDone2.addEventListener('click', () => btnDone2.style.backgroundColor ='#000');
  btnDone3.addEventListener('click', () => btnDone3.style.backgroundColor ='#000');
  btnDone4.addEventListener('click', () => btnDone4.style.backgroundColor ='#000');
  btnDone5.addEventListener('click', () => btnDone5.style.backgroundColor ='#000');
  btnDone6.addEventListener('click', () => btnDone6.style.backgroundColor ='#000');
  btnDone7.addEventListener('click', () => btnDone7.style.backgroundColor ='#000');
  btnDone8.addEventListener('click', () => btnDone8.style.backgroundColor ='#000');
  btnDone9.addEventListener('click', () => btnDone9.style.backgroundColor ='#000');
  btnDone11.addEventListener('click', () => btnDone11.style.backgroundColor ='#000');
  btnDone12.addEventListener('click', () => btnDone12.style.backgroundColor ='#000');
  btnDone13.addEventListener('click', () => btnDone13.style.backgroundColor ='#000');
  btnDone14.addEventListener('click', () => btnDone14.style.backgroundColor ='#000');
  btnDone15.addEventListener('click', () => btnDone15.style.backgroundColor ='#000');
  btnDone16.addEventListener('click', () => btnDone16.style.backgroundColor ='#000');
  btnDone17.addEventListener('click', () => btnDone17.style.backgroundColor ='#000');
  btnDone18.addEventListener('click', () => btnDone18.style.backgroundColor ='#000');
  btnDone19.addEventListener('click', () => btnDone19.style.backgroundColor ='#000');
  btnDone21.addEventListener('click', () => btnDone21.style.backgroundColor ='#000');
  btnDone22.addEventListener('click', () => btnDone22.style.backgroundColor ='#000');
  btnDone23.addEventListener('click', () => btnDone23.style.backgroundColor ='#000');
  btnDone24.addEventListener('click', () => btnDone24.style.backgroundColor ='#000');
  btnDone25.addEventListener('click', () => btnDone25.style.backgroundColor ='#000');
  btnDone26.addEventListener('click', () => btnDone26.style.backgroundColor ='#000');
  btnDone27.addEventListener('click', () => btnDone27.style.backgroundColor ='#000');
  btnDone28.addEventListener('click', () => btnDone28.style.backgroundColor ='#000');
  btnDone29.addEventListener('click', () => btnDone29.style.backgroundColor ='#000');
  btnDone31.addEventListener('click', () => btnDone31.style.backgroundColor ='#000');
  btnDone32.addEventListener('click', () => btnDone32.style.backgroundColor ='#000');
  btnDone33.addEventListener('click', () => btnDone33.style.backgroundColor ='#000');
  btnDone34.addEventListener('click', () => btnDone34.style.backgroundColor ='#000');
  btnDone35.addEventListener('click', () => btnDone35.style.backgroundColor ='#000');
  btnDone36.addEventListener('click', () => btnDone36.style.backgroundColor ='#000');
  btnDone37.addEventListener('click', () => btnDone37.style.backgroundColor ='#000');
  btnDone38.addEventListener('click', () => btnDone38.style.backgroundColor ='#000');
  btnDone39.addEventListener('click', () => btnDone39.style.backgroundColor ='#000');
  btnDone41.addEventListener('click', () => btnDone41.style.backgroundColor ='#000');
  btnDone42.addEventListener('click', () => btnDone42.style.backgroundColor ='#000');
  btnDone43.addEventListener('click', () => btnDone43.style.backgroundColor ='#000');
  btnDone44.addEventListener('click', () => btnDone44.style.backgroundColor ='#000');
  btnDone45.addEventListener('click', () => btnDone45.style.backgroundColor ='#000');
  btnDone46.addEventListener('click', () => btnDone46.style.backgroundColor ='#000');
  btnDone47.addEventListener('click', () => btnDone47.style.backgroundColor ='#000');
  btnDone48.addEventListener('click', () => btnDone48.style.backgroundColor ='#000');
  btnDone49.addEventListener('click', () => btnDone49.style.backgroundColor ='#000');
  btnDone51.addEventListener('click', () => btnDone51.style.backgroundColor ='#000');
  btnDone52.addEventListener('click', () => btnDone52.style.backgroundColor ='#000');
  btnDone53.addEventListener('click', () => btnDone53.style.backgroundColor ='#000');
  btnDone54.addEventListener('click', () => btnDone54.style.backgroundColor ='#000');
  btnDone55.addEventListener('click', () => btnDone55.style.backgroundColor ='#000');
  btnDone56.addEventListener('click', () => btnDone56.style.backgroundColor ='#000');
  btnDone57.addEventListener('click', () => btnDone57.style.backgroundColor ='#000');
  btnDone58.addEventListener('click', () => btnDone58.style.backgroundColor ='#000');
  btnDone59.addEventListener('click', () => btnDone59.style.backgroundColor ='#000');
  btnDone61.addEventListener('click', () => btnDone61.style.backgroundColor ='#000');
  btnDone62.addEventListener('click', () => btnDone62.style.backgroundColor ='#000');
  btnDone63.addEventListener('click', () => btnDone63.style.backgroundColor ='#000');
  btnDone64.addEventListener('click', () => btnDone64.style.backgroundColor ='#000');
  btnDone65.addEventListener('click', () => btnDone65.style.backgroundColor ='#000');
  btnDone66.addEventListener('click', () => btnDone66.style.backgroundColor ='#000');
  btnDone67.addEventListener('click', () => btnDone67.style.backgroundColor ='#000');
  btnDone68.addEventListener('click', () => btnDone68.style.backgroundColor ='#000');
  btnDone69.addEventListener('click', () => btnDone69.style.backgroundColor ='#000');







  // let btnDone01 = document.querySelector('.button2');
  // let btnDone02 = document.querySelector('#done02');
  // let btnDone03 = document.querySelector('#done03');
  // let btnDone04 = document.querySelector('#done04');
  // let btnDone05 = document.querySelector('#done05');
  // let btnDone06 = document.querySelector('#done06');
  // let btnDone07 = document.querySelector('#done07');
  // let btnDone08 = document.querySelector('#done08');
  // let btnDone09 = document.querySelector('#done09');
  // let btnDone011 = document.querySelector('#done011');
  // let btnDone012 = document.querySelector('#done012');
  // let btnDone013 = document.querySelector('#done013');
  // let btnDone014 = document.querySelector('#done014');
  // let btnDone015 = document.querySelector('#done015');
  // let btnDone016 = document.querySelector('#done016');
  // let btnDone017 = document.querySelector('#done017');
  // let btnDone018 = document.querySelector('#done018');
  // let btnDone019 = document.querySelector('#done019');
  // let btnDone021 = document.querySelector('#done021');
  // let btnDone022 = document.querySelector('#done022');
  // let btnDone023 = document.querySelector('#done023');
  // let btnDone024 = document.querySelector('#done024');
  // let btnDone025 = document.querySelector('#done025');
  // let btnDone026 = document.querySelector('#done026');
  // let btnDone027 = document.querySelector('#done027');
  // let btnDone028 = document.querySelector('#done028');
  // let btnDone029 = document.querySelector('#done029');
  // let btnDone031 = document.querySelector('#done031');
  // let btnDone032 = document.querySelector('#done032');
  // let btnDone033 = document.querySelector('#done033');
  // let btnDone034 = document.querySelector('#done034');
  // let btnDone035 = document.querySelector('#done035');
  // let btnDone036 = document.querySelector('#done036');
  // let btnDone037 = document.querySelector('#done037');
  // let btnDone038 = document.querySelector('#done038');
  // let btnDone039 = document.querySelector('#done039');
  // let btnDone041 = document.querySelector('#done041');
  // let btnDone042 = document.querySelector('#done042');
  // let btnDone043 = document.querySelector('#done043');
  // let btnDone044 = document.querySelector('#done044');
  // let btnDone045 = document.querySelector('#done045');
  // let btnDone046 = document.querySelector('#done046');
  // let btnDone047 = document.querySelector('#done047');
  // let btnDone048 = document.querySelector('#done048');
  // let btnDone049 = document.querySelector('#done049');
  // let btnDone051 = document.querySelector('#done051');
  // let btnDone052 = document.querySelector('#done052');
  // let btnDone053 = document.querySelector('#done053');
  // let btnDone054 = document.querySelector('#done054');
  // let btnDone055 = document.querySelector('#done055');
  // let btnDone056 = document.querySelector('#done056');
  // let btnDone057 = document.querySelector('#done057');
  // let btnDone058 = document.querySelector('#done058');
  // let btnDone059 = document.querySelector('#done059');
  // let btnDone061 = document.querySelector('#done061');
  // let btnDone062 = document.querySelector('#done062');
  // let btnDone063 = document.querySelector('#done063');
  // let btnDone064 = document.querySelector('#done064');
  // let btnDone065 = document.querySelector('#done065');
  // let btnDone066 = document.querySelector('#done066');
  // let btnDone067 = document.querySelector('#done067');
  // let btnDone068 = document.querySelector('#done068');
  // let btnDone069 = document.querySelector('#done069');


  // btnDone01.addEventListener('click', () => btnDone01.style.backgroundColor ='#000');
  // btnDone02.addEventListener('click', () => btnDone02.style.backgroundColor ='#000');
  // btnDone03.addEventListener('click', () => btnDone03.style.backgroundColor ='#000');
  // btnDone04.addEventListener('click', () => btnDone04.style.backgroundColor ='#000');
  // btnDone05.addEventListener('click', () => btnDone05.style.backgroundColor ='#000');
  // btnDone06.addEventListener('click', () => btnDone06.style.backgroundColor ='#000');
  // btnDone07.addEventListener('click', () => btnDone07.style.backgroundColor ='#000');
  // btnDone08.addEventListener('click', () => btnDone08.style.backgroundColor ='#000');
  // btnDone09.addEventListener('click', () => btnDone09.style.backgroundColor ='#000');
  // btnDone011.addEventListener('click', () => btnDone011.style.backgroundColor ='#000');
  // btnDone012.addEventListener('click', () => btnDone012.style.backgroundColor ='#000');
  // btnDone013.addEventListener('click', () => btnDone013.style.backgroundColor ='#000');
  // btnDone014.addEventListener('click', () => btnDone014.style.backgroundColor ='#000');
  // btnDone015.addEventListener('click', () => btnDone015.style.backgroundColor ='#000');
  // btnDone016.addEventListener('click', () => btnDone016.style.backgroundColor ='#000');
  // btnDone017.addEventListener('click', () => btnDone017.style.backgroundColor ='#000');
  // btnDone018.addEventListener('click', () => btnDone018.style.backgroundColor ='#000');
  // btnDone019.addEventListener('click', () => btnDone019.style.backgroundColor ='#000');
  // btnDone021.addEventListener('click', () => btnDone021.style.backgroundColor ='#000');
  // btnDone022.addEventListener('click', () => btnDone022.style.backgroundColor ='#000');
  // btnDone023.addEventListener('click', () => btnDone023.style.backgroundColor ='#000');
  // btnDone024.addEventListener('click', () => btnDone024.style.backgroundColor ='#000');
  // btnDone025.addEventListener('click', () => btnDone025.style.backgroundColor ='#000');
  // btnDone026.addEventListener('click', () => btnDone026.style.backgroundColor ='#000');
  // btnDone027.addEventListener('click', () => btnDone027.style.backgroundColor ='#000');
  // btnDone028.addEventListener('click', () => btnDone028.style.backgroundColor ='#000');
  // btnDone029.addEventListener('click', () => btnDone029.style.backgroundColor ='#000');
  // btnDone031.addEventListener('click', () => btnDone031.style.backgroundColor ='#000');
  // btnDone032.addEventListener('click', () => btnDone032.style.backgroundColor ='#000');
  // btnDone033.addEventListener('click', () => btnDone033.style.backgroundColor ='#000');
  // btnDone034.addEventListener('click', () => btnDone034.style.backgroundColor ='#000');
  // btnDone035.addEventListener('click', () => btnDone035.style.backgroundColor ='#000');
  // btnDone036.addEventListener('click', () => btnDone036.style.backgroundColor ='#000');
  // btnDone037.addEventListener('click', () => btnDone037.style.backgroundColor ='#000');
  // btnDone038.addEventListener('click', () => btnDone038.style.backgroundColor ='#000');
  // btnDone039.addEventListener('click', () => btnDone039.style.backgroundColor ='#000');
  // btnDone041.addEventListener('click', () => btnDone041.style.backgroundColor ='#000');
  // btnDone042.addEventListener('click', () => btnDone042.style.backgroundColor ='#000');
  // btnDone043.addEventListener('click', () => btnDone043.style.backgroundColor ='#000');
  // btnDone044.addEventListener('click', () => btnDone044.style.backgroundColor ='#000');
  // btnDone045.addEventListener('click', () => btnDone045.style.backgroundColor ='#000');
  // btnDone046.addEventListener('click', () => btnDone046.style.backgroundColor ='#000');
  // btnDone047.addEventListener('click', () => btnDone047.style.backgroundColor ='#000');
  // btnDone048.addEventListener('click', () => btnDone048.style.backgroundColor ='#000');
  // btnDone049.addEventListener('click', () => btnDone049.style.backgroundColor ='#000');
  // btnDone051.addEventListener('click', () => btnDone051.style.backgroundColor ='#000');
  // btnDone052.addEventListener('click', () => btnDone052.style.backgroundColor ='#000');
  // btnDone053.addEventListener('click', () => btnDone053.style.backgroundColor ='#000');
  // btnDone054.addEventListener('click', () => btnDone054.style.backgroundColor ='#000');
  // btnDone055.addEventListener('click', () => btnDone055.style.backgroundColor ='#000');
  // btnDone056.addEventListener('click', () => btnDone056.style.backgroundColor ='#000');
  // btnDone057.addEventListener('click', () => btnDone057.style.backgroundColor ='#000');
  // btnDone058.addEventListener('click', () => btnDone058.style.backgroundColor ='#000');
  // btnDone059.addEventListener('click', () => btnDone059.style.backgroundColor ='#000');
  // btnDone061.addEventListener('click', () => btnDone061.style.backgroundColor ='#000');
  // btnDone062.addEventListener('click', () => btnDone062.style.backgroundColor ='#000');
  // btnDone063.addEventListener('click', () => btnDone063.style.backgroundColor ='#000');
  // btnDone064.addEventListener('click', () => btnDone064.style.backgroundColor ='#000');
  // btnDone065.addEventListener('click', () => btnDone065.style.backgroundColor ='#000');
  // btnDone066.addEventListener('click', () => btnDone066.style.backgroundColor ='#000');
  // btnDone067.addEventListener('click', () => btnDone067.style.backgroundColor ='#000');
  // btnDone068.addEventListener('click', () => btnDone068.style.backgroundColor ='#000');
  // btnDone069.addEventListener('click', () => btnDone069.style.backgroundColor ='#000');
