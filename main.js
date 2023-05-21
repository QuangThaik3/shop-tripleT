function cartCount() {
  const cartCount = document.querySelector('.cart-count');
  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let count = 0;
  for (let i = 0; i < cartItems.length; i++) {
    count += parseInt(cartItems[i].count);
  }
  cartCount.innerHTML = count;
}

cartCount();



const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const slides_s = document.querySelectorAll('.slide-s');
const next_s = document.querySelector('#next-s');
const prev_s = document.querySelector('#prev-s');
const auto = true;
const intervalTime = 5000;
let slideInterval;
var offset = 765;

const nextSlide = () => {

  const current = document.querySelector('.current');

  current.classList.remove('current');

  if (current.nextElementSibling) {

    current.nextElementSibling.classList.add('current');
  } else {

    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {

  const current = document.querySelector('.current');

  current.classList.remove('current');

  if (current.previousElementSibling) {

    current.previousElementSibling.classList.add('current');
  } else {

    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
  clearTimeout(transitionDelay);
    
    if (auto) {
      clearInterval(slideInterval);
      transitionDelay = setTimeout(() => {
        slideInterval = setInterval(nextSlide, intervalTime);
      }, intervalTime);
    }
})

prev.addEventListener('click', e => {
  prevSlide();
  clearTimeout(transitionDelay);
    
    if (auto) {
      clearInterval(slideInterval);
      transitionDelay = setTimeout(() => {
        slideInterval = setInterval(nextSlide, intervalTime);
      }, intervalTime);
    }
})

const nextSlide_s = () => {

  const current = document.querySelector('.current-s');

  current.classList.remove('current-s');

  if (current.nextElementSibling) {

    current.nextElementSibling.classList.add('current-s');
  } else {

    slides_s[0].classList.add('current-s');
  }
  setTimeout(() => current.classList.remove('current-s'));
};

const prevSlide_s = () => {

  const current = document.querySelector('.current-s');

  current.classList.remove('current-s');

  if (current.previousElementSibling) {

    current.previousElementSibling.classList.add('current-s');
  } else {

    slides_s[slides.length - 1].classList.add('current-s');
  }
  setTimeout(() => current.classList.remove('current-s'));
};

next_s.addEventListener('click', e => {

  nextSlide_s();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide_s, intervalTime);
  }
})

prev_s.addEventListener('click', e => {
  prevSlide_s();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide_s, intervalTime);
  }
})

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
  slideInterval = setInterval(nextSlide_s, intervalTime);
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > offset) {
    document.querySelector('.up').classList.add('active');
  } else {
    document.querySelector('.up').classList.remove('active');
  }
}

const phone = document.querySelector('.phone');
const time = document.querySelector('.times');
const boxchat = document.querySelector('.box-chat');
const container = document.querySelector('.container');

phone.addEventListener('click', e => {
  e.preventDefault();
  showChat();
})
time.addEventListener('click', e => {
  e.preventDefault();
  closeChat();
})

function showChat() {
  boxchat.style.display = 'block';
  container.style.display ='block';
}

function closeChat() {
  boxchat.style.display = 'none';
  container.style.display = 'none';
}

const nextButton = document.getElementById('chatNext');
const prevButton = document.getElementById('chatPrev');
const rightButton = document.getElementById('chatRight');
const exitButton = document.getElementById('chatExit');
const alignButton = document.getElementById('chatAlign');
const userTen = document.getElementById('userTen');
const userSdt = document.getElementById('userSdt');


nextButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

rightButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
})

prevButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

alignButton.addEventListener('click', () => {
  if(userTen.value.length > 0 && userSdt.value.length > 0){
	container.classList.add("left-panel-active");
  inputMess();
  }
});

exitButton.addEventListener('click', () => {
	container.classList.remove("left-panel-active");
	container.classList.remove("right-panel-active");
});

const inputMess = () => {
    let userTen =  document.getElementById('userTen').value;
    let userSdt = document.getElementById('userSdt').value;
    let userHtml = `<p><span>Tên : ${userTen}</span></p>
                    <p><span>Điện thoại : ${userSdt}</span></p>`;             
    document.querySelector('.chat-you').innerHTML = userHtml;        
}

const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const sliderWrapper_s = document.querySelector('.slider-wrapper-s');
const slider_s = document.querySelector('.slider-s');

function setSliderHeight() {
  const sliderWidth = sliderWrapper.offsetWidth;
  const Size = 1920 / 600; // Tỉ lệ chiều rộng và chiều cao của ảnh gốc
  const sliderHeight = sliderWidth / Size ;
  sliderWrapper.style.height = `${sliderHeight}px`;
  // Lấy các slide và tính toán lại tỉ lệ kích thước nền của từng ảnh
  const sliderWidth_s = sliderWrapper_s.offsetWidth;
  const Size_s = 1920 / 1920; // Tỉ lệ chiều rộng và chiều cao của ảnh gốc
  const sliderHeight_s = sliderWidth_s / Size_s ;
  sliderWrapper_s.style.height = `${sliderHeight_s}px`;

  slides.forEach(slide => {
    const imgWidth = slide.offsetWidth;
    const imgHeight = slide.offsetHeight;
    const imgSize = imgWidth / imgHeight;
    const slideSize = sliderWrapper.offsetWidth / sliderWrapper.offsetHeight;

    if (imgSize > slideSize) {
      slide.style.backgroundSize = 'auto 100%';
    } else {
      slide.style.backgroundSize = '100% auto';
    }
  });
}

// Gọi hàm tính toán chiều cao của slider khi tải trang hoặc thay đổi kích thước cửa sổ
window.addEventListener('load', setSliderHeight);
window.addEventListener('resize', setSliderHeight);

const sliderButtons = document.querySelectorAll('.slide-button');

for(let i =0;i< sliderButtons.length;i++){
  sliderButtons[i].addEventListener('click',() => {
    if (auto) {
      clearInterval(slideInterval);
      transitionDelay = setTimeout(() => {
        slideInterval = setInterval(nextSlide, intervalTime);
      }, intervalTime);
    }
    for(let j=0;j<slides.length;j++){
      slides[j].classList.remove('current');
    }
    const slideNumber = parseInt(sliderButtons[i].getAttribute('data'));
    slides[slideNumber - 1].classList.add('current');
  })
}

const sliderButtons_s = document.querySelectorAll('.slide-button-s');

for(let i =0;i< sliderButtons.length;i++){
  sliderButtons_s[i].addEventListener('click',() => {
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    for(let j=0;j<slides.length;j++){
      slides_s[j].classList.remove('current-s');
    }
    const slideNumber = parseInt(sliderButtons[i].getAttribute('data'));
    slides_s[slideNumber - 1].classList.add('current-s');
  })
}

const menuBtn = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.menu-close');
const menuMain = document.querySelector('.menu-main');

menuBtn.addEventListener('click', function() {
  menuBtn.style.display = 'none';
  menuClose.style.display = 'block';
  menuMain.classList.add('show');
});

menuClose.addEventListener('click', function() {
  menuBtn.style.display = 'block';
  menuClose.style.display = 'none';
  menuMain.classList.remove('show');
});

window.addEventListener('resize', function() {
  if (this.innerWidth > 1000) {
    menuBtn.style.display = 'none';
    menuClose.style.display = 'none';
    menuMain.classList.remove('show');
  }
  else {
    menuBtn.style.display = 'block';
  }
});

const h4Thongtin = document.querySelector('#h4-thongtin');
const h4Chinhsach = document.querySelector('#h4-chinhsach');
const h4Diachi = document.querySelector('#h4-diachi');
const ulThongtin = document.querySelector('#ul-thongtin');
const ulChinhsach = document.querySelector('#ul-chinhsach');
const ulDiachi = document.querySelector('#ul-diachi');
let countThongtin = 0;
let countChinhsach = 0;
let countDiachi = 0;
let canClick = true;

window.addEventListener('resize', function() {
  if (this.innerWidth > 710) {
    ulChinhsach.style.display = 'block';
    ulThongtin.style.display = 'block';
    ulDiachi.style.display = 'block';
    canClick = false; // Cho phép kích hoạt sự kiện click
  } else {
    ulChinhsach.style.display = 'none';
    ulThongtin.style.display = 'none';
    ulDiachi.style.display = 'none';
    canClick = true; // Vô hiệu hóa sự kiện click
  }
});

h4Thongtin.addEventListener('click', function() {
  if (canClick) {
    countThongtin++;
    if (countThongtin % 2 !== 0) {
      ulThongtin.style.display = 'block';
    } else {
      ulThongtin.style.display = 'none';
    }
  }
});

h4Chinhsach.addEventListener('click', function() {
  if (canClick) {
    countChinhsach++;
    if (countChinhsach % 2 !== 0) {
      ulChinhsach.style.display = 'block';
    } else {
      ulChinhsach.style.display = 'none';
    }
  }
});

h4Diachi.addEventListener('click', function() {
  if (canClick) {
    countDiachi++;
    if (countDiachi % 2 !== 0) {
      ulDiachi.style.display = 'block';
    } else {
      ulDiachi.style.display = 'none';
    }
  }
});

const rightUser = document.querySelector('#right-user');
const bottomMenu = document.querySelector('.bottom-menu');

rightUser.addEventListener('mouseenter', () => {
  bottomMenu.style.display = 'block';
});

rightUser.addEventListener('mouseleave', () => {
  bottomMenu.style.display = 'none';
});

bottomMenu.addEventListener('mouseenter', () => {
  bottomMenu.style.display = 'block';
});

bottomMenu.addEventListener('mouseleave', () => {
  bottomMenu.style.display = 'none';
});



