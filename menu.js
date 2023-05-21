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
var offset = 765;
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
