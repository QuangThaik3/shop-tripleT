
function check() {
    const checkShop = document.querySelector('.check-shop'); 
    const shopMain = document.querySelector('.shop-main'); 
    var tbody = document.getElementById('cart-items'); 
    var rowCount = tbody.rows.length;
    if (rowCount > 0) {
      checkShop.style.display = 'none';
      shopMain.style.display = 'block';
    } else {
      checkShop.style.display = 'block';
      shopMain.style.display = 'none';
    }
  }
  
    
    function checkStorage() {
      if (localStorage.getItem('cartItems')) {
        var cartItems = JSON.parse(localStorage.getItem('cartItems'));
        var tbody = document.getElementById('cart-items');
  
        
        tbody.innerHTML = '';
  
        
        cartItems.forEach(function (item) {
          if(item.title.length > 0){
            const row = document.createElement("tr");
  
          row.innerHTML = `<td class="shop-picture">
          <a href="#"><img src="${item.imgSrc}"></a>
      </td>
      <td class="shop-product">
          <a href="#">${item.h2Value}</a>
          <div class="attributes">
              Hình thức: <span class="hinhthuc">${item.labelValue}</span>
              <br>
              Khu vực: <span class="khuvuc">${item.selectValue}</span>
              <br>
              Màu sắc: <span class="mausac">${item.title}</span>
          </div>
          <div class="product-item">
              <a href="#">Sửa</a>
          </div>
      </td>
      <td class="shop-price">
          <label>Giá bán:</label>
          <span>${item.price}</span><sup>đ</sup>
      </td>
      <td class="shop-count">
          <label>Số lượng:</label>
          <input type="text" value="${item.count}">
      </td>
      <td class="shop-remove">
          <button type="button" class="remove-btn"></button>
      </td>`
  
      tbody.appendChild(row);
          }else{
            const row = document.createElement("tr");
  
          row.innerHTML = `<td class="shop-picture">
          <a href="#"><img src="${item.imgSrc}"></a>
      </td>
      <td class="shop-product">
          <a href="#">${item.h2Value}</a>
          <div class="attributes">
              Hình thức: <span class="hinhthuc">${item.labelValue}</span>
              <br>
              Khu vực: <span class="khuvuc">${item.selectValue}</span>
          </div>
          <div class="product-item">
              <a href="#">Sửa</a>
          </div>
      </td>
      <td class="shop-price">
          <label>Giá bán:</label>
          <span>${item.price}</span><sup>đ</sup>
      </td>
      <td class="shop-count">
          <label>Số lượng:</label>
          <input type="text" value="${item.count}">
      </td>
      <td class="shop-remove">
          <button type="button" class="remove-btn"></button>
      </td>`
  
      tbody.appendChild(row);
          }
        });
      }
     
    }
    function mainProduct(e){
      if(e.classList.contains('option-main')){
        window.location.href = "index.html";
      }
    }
  
    function deleteProduct(e) {
      if (e.classList.contains('remove-btn')) {
        var row = e.parentElement.parentElement;
        var imgSrc = row.querySelector('.shop-picture img').getAttribute('src');
        var h2Value = row.querySelector('.shop-product a').textContent;
        var labelValue = row.querySelector('.attributes .hinhthuc').textContent;
        var selectValue = row.querySelector('.attributes .khuvuc').textContent;
        var title = row.querySelector('.attributes .mausac')?.textContent;
    
        var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    
        cartItems = cartItems.filter(function (item) {
          var isImgSrcMatch = item.imgSrc === imgSrc;
          var isH2ValueMatch = item.h2Value === h2Value;
          var isLabelValueMatch = item.labelValue === labelValue;
          var isSelectValueMatch = item.selectValue === selectValue;
          var isTitleMatch = item.title === title || (!item.title && !title);
    
          return !(isImgSrcMatch && isH2ValueMatch && isLabelValueMatch && isSelectValueMatch && isTitleMatch);
        });
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        const cartCount = document.querySelector('.cart-count');
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let count = 0;
        for (let i = 0; i < cartItems.length; i++) {
          count += parseInt(cartItems[i].count);
        }
        cartCount.innerHTML = count;
    
        row.remove();
        calculateTotal();
        check();
      }
    }
    
    
      
      
    var optionMainButtons = document.querySelector('.option-main');
    optionMainButtons.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  
    var optionExtraButtons = document.querySelector('.option-extra');
    optionExtraButtons.addEventListener('click', function (e) {
      e.preventDefault();
    
        var tbody = document.getElementById('cart-items');
        var rows = tbody.getElementsByTagName('tr');
        var cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems = [];
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var imgSrc = row.querySelector('.shop-picture img').getAttribute('src');
          var h2Value = row.querySelector('.shop-product a').textContent;
          var price = row.querySelector('.shop-price span').textContent;
          var titleElement = row.querySelector('span.mausac');
          var title = titleElement ? titleElement.textContent : '';
          var labelValue = row.querySelector('span.hinhthuc').textContent;
          var selectValue = row.querySelector('span.khuvuc').textContent;
          var count = row.querySelector('.shop-count input').value;
      
          if(count > 0){
            var product = {
                imgSrc: imgSrc,
                h2Value: h2Value,
                title: title,
                labelValue: labelValue,
                selectValue: selectValue,
                price: price,
                count: count
          };
          cartItems.push(product);
          }
        }
      
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        const cartCount = document.querySelector('.cart-count');
  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let countt = 0;
  for (let i = 0; i < cartItems.length; i++) {
    countt += parseInt(cartItems[i].count); // Sửa lại thành parseInt(cartItems[i].count)
  }
  cartCount.innerText = countt;
  
       checkStorage();
       check();
       calculateTotal();
    });
    
    var inputCompany = document.querySelector('#inputs-company');
    var cartCompany = document.querySelector('.cart-company');
    inputCompany.addEventListener('click',() => {
      if(inputCompany.checked){
        cartCompany.style.display = 'block';
      }else{
        cartCompany.style.display = 'none';
      }
    })
  
    var tenInput = document.getElementById('cart-ten');
    var telInput = document.getElementById('cart-tel');
    var emailInput = document.getElementById('cart-email');
    var receiveRadios = document.querySelectorAll('.receive-radio');
    var addressInput = document.getElementById('address-input');
    var paymentRadios = document.querySelectorAll('.payment-radio');
    var termsCheckbox = document.getElementById('terms-checkbox');
    var shopTotal = document.getElementById('shop-total');
    var modal = document.getElementById('my-modal');
  
    shopTotal.addEventListener('click',(e) => {
      e.preventDefault();
  
      var ten = tenInput.value.trim();
      var tel = telInput.value.trim();
      var email = emailInput.value.trim();
      var receiveChecked = Array.from(receiveRadios).some(function(radio) {
        return radio.checked;
      });
      var address = addressInput.value.trim();
      var paymentChecked = Array.from(paymentRadios).some(function(radio) {
        return radio.checked;
      });
      var termsChecked = termsCheckbox.checked;
  
      if (isValidTen(ten) && isValidTel(tel) && isValidEmail(email) && receiveChecked && address && paymentChecked && termsChecked) {
        modal.style.display = 'block';
        var cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        const cartCount = document.querySelector('.cart-count');
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let count = 0;
        for (let i = 0; i < cartItems.length; i++) {
          count += parseInt(cartItems[i].count);
        }
        cartCount.innerHTML = count;
        checkStorage();
        check();
      }else {
        alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản.');
      }
  
  
    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return regex.test(email);
    }
    function isValidTel(tel){
      const regex = /^0\d{9}$/;
      return regex.test(tel);
    }
    function isValidTen(ten){
      return ten.length > 0;
    }
  });
  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
    document.addEventListener('click', function (e) {
      var target = e.target;
      if (target.classList.contains('remove-btn')) {
        deleteProduct(target);
      }
    });
  
    function calculateTotal() {
      var tbody = document.getElementById('cart-items');
      var rows = tbody.getElementsByTagName("tr");
    
      var total = 0;
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var priceText = row.querySelector(".shop-price span").textContent;
        var price = parseInt(priceText.replace(/\D/g, ''));   
        var countInput = row.querySelector(".shop-count input");
        var count = parseInt(countInput.value);
        total += price * count;
      }
    
      var extraSpan = document.querySelector(".extra span");
      extraSpan.textContent = total.toLocaleString("vi-VN") + "đ";
      var mainSpan = document.querySelector(".main span");
      mainSpan.textContent = total.toLocaleString("vi-VN") + "đ";
    }
  
    window.onload = function () {
      checkStorage();
      check();
      calculateTotal();
  
      document.getElementById('cart-ten').value = localStorage.getItem("ten");
      document.getElementById('cart-tel').value = localStorage.getItem("sdt");
      document.getElementById('cart-email').value = localStorage.getItem("email");
  
    };
     
    
  