
const productBlack = document.querySelector('#product-black');
const productSliver = document.querySelector('#product-sliver');
const productGod = document.querySelector('#product-god');
const img = document.querySelector('.product-content-left-big-img img');
console.log(img.src);

productBlack.addEventListener('change', function() {
    if (productBlack.checked) {
        img.src = "img/watch2-1.webp";
    }
});

productSliver.addEventListener('change', function() {
    if (productSliver.checked) {
        img.src = "img/watch2-2.webp";
    }
});

productGod.addEventListener('change', function() {
    if (productGod.checked) {
        img.src = "img/watch2-3.webp";
    }
});





const radioInputs = document.querySelectorAll('.product-content-right-product-color-img input[type="radio"]');
const listItemElements = document.querySelectorAll('.title-color');

radioInputs.forEach(function(input) {
input.addEventListener('change', function() {
listItemElements.forEach(function(listItem) {
  if (input.checked && listItem === input.closest('.title-color')) {
    listItem.classList.add('checked-value');
  } else {
    listItem.classList.remove('checked-value');
  }
});
});
});

const muaNgayButton = document.querySelector('#product-buy');
var modal = document.getElementById('my-modal');
muaNgayButton.addEventListener('click', function() {
  modal.style.display = 'block';
    const imgSrc = document.querySelector('.product-content-left-big-img img').src;
    const checkedInput = document.querySelector('.product-content-right-product-color-img input[type="radio"]:checked');
    const titleElement = checkedInput ? checkedInput.closest('.title-color').querySelector('.content-title') : null;
    const title = titleElement ? titleElement.getAttribute('title') : '';
    const price = document.querySelector('.product-content-right-product-price span').innerText;
    const h2Element = document.querySelector('.product-content-right-product-name h2');
    const h2Value = h2Element ? h2Element.innerText.trim() : '';
    const labelValue = document.querySelector('.cheater input[type="radio"]:checked + label').innerText;
    const selectElement = document.querySelector('.content-select select');
    const selectValue = selectElement ? selectElement.value : '';

    var cartItems = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }

    var existingItem = cartItems.find(function (item) {
      return item.imgSrc === imgSrc && item.title === title && item.price === price && item.h2Value === h2Value && item.labelValue === labelValue && item.selectValue === selectValue;
    });

    if (existingItem) {
      existingItem.count++;
    } else {
      cartItems.push({
        imgSrc: imgSrc,
        title: title,
        price: price,
        h2Value: h2Value,
        labelValue: labelValue,
        selectValue: selectValue,
        count: 1
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const cartCount = document.querySelector('.cart-count');
  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let count = 0;
  for (let i = 0; i < cartItems.length; i++) {
    count += parseInt(cartItems[i].count);
  }
  cartCount.innerHTML = count;
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

const ratingControl = document.getElementById('rating-control');
const textUser = document.getElementById('text-user');
const textProduct = document.getElementById('text-product');
const productShare = document.getElementById('product-share');
const userReviews = document.querySelector('.user-reviews');
const starTotal = 5;

function getDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; 
  var year = today.getFullYear();
  
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  var formattedDate = "- " + day + "/" + month + "/" + year;
  return formattedDate;
}

function getRatting(reviewElement) {
  const starsInner = reviewElement.querySelector('.stars-inner');
  const rating = reviewElement.dataset.rating;
  const starPercent = (rating / starTotal) * 100;
  const starRound = `${Math.round(starPercent/10)*10}%`;
  starsInner.style.width = starRound;
}

function createReviewElement(username, rating, content) {
  var date = getDate();
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('user-star');
  reviewElement.innerHTML = `
    <div class="user-date">
      <div>
        <img src="img/user.jpg">
      </div>
      <div>
        <strong>${username}</strong>
      </div>
      <div class="date">${date}</div>
    </div>
    <div class="stars-form">
      <div class="stars-outer">
        <div class="stars-inner"></div>
      </div>
    </div>
    <div class="user-share">${content}</div>
  `;
  reviewElement.dataset.rating = rating;
  return reviewElement;
}

function clearFormInputs() {
  ratingControl.value = '';
  textUser.value = '';
  textProduct.value = '';
}

productShare.addEventListener('click', (e) => {
  e.preventDefault();

  if (ratingControl.value <= 5 && textUser.value.length > 0 && textProduct.value.length > 0) {
    const rating = ratingControl.value;
    const username = textUser.value;
    const content = textProduct.value;

    const reviewElement = createReviewElement(username, rating, content);
    userReviews.appendChild(reviewElement);
    getRatting(reviewElement);

    clearFormInputs();
  } else {
    alert('Vui lòng nhập giá trị hợp lệ');
  }
});
