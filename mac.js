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
