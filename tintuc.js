$(document).ready(function() {
    $('#Review').click(function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
      
      var newInfo = [
        {
          link: 'https://shopdunk.com/review-ipad-pro-m2',
          text: 'Review iPad Pro M2: Chiến binh mạnh mẽ nhất dòng máy tính bảng',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016330_review-ipad-pro-m2_1600.png'
        },
        //1
        {
          link: 'https://shopdunk.com/dung-luong-pin-ipad-pro-m2',
          text: 'Đánh giá dung lượng pin iPad Pro M2: Hơn hẳn iPad Air 5!',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016329_dung-luong-pin-ipad-pro-m2_1600.jpeg'
        },
        //2
  
        //3
        {
          link: 'https://shopdunk.com/kich-thuoc-apple-watch-series-8',
          text: 'Tư vấn lựa chọn kích thước Apple Watch Series 8 phù hợp',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016094_thumbnail_1600.jpeg'
        },
        //4
        {
          link: 'https://shopdunk.com/macbook-air-m2-dung-chuot-gi',
          text: 'MacBook Air M2 dùng chuột gì tốt nhất? Top 8 sản phẩm đáng mua',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016003_concepto-macbook-pro-m2_1600.webp'
        },
  
        //5
        {
          link: 'https://shopdunk.com/ve-tren-ipad-gen-10',
          text: 'https://shopdunk.com/macbook-air-m2-dung-chuot-gi',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016325_cam-nhan-ve-thuc-te-tren-ipad-gen-10_1600.jpeg'
        },
  
        //6
        {
          link: 'https://shopdunk.com/apple-watch-series-8-bi-loi',
          text: '22 Trường hợp Apple Watch Series 8 bị lỗi và cách xử lý nhanh',
          imageSrc: 'https://shopdunk.com/images/uploaded/apple-watch-series-8-bi-loi/sua-loi-thong-dung-tren-apple-watch-series-8.jpeg'
        },
  
        //7
        {
          link: 'https://shopdunk.com/apple-watch-series-8-khong-cap-nhat-duoc',
          text: '4 Giải pháp khi Apple Watch Series 8 không cập nhật được phần mềm',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015656_thumbnail_1600.jpeg'
        },
        //8
        {
          link: 'https://shopdunk.com/apple-watch-series-8-nhanh-het-pin',
          text: 'Apple Watch Series 8 nhanh hết pin | Lỗi do pin hay người dùng?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015620_thumbnail_1600.jpeg'
        },
        {
          link: 'https://shopdunk.com/so-sanh-airpods-2-va-airpods-3',
          text: 'So sánh AirPods 2 và AirPods 3: Hơn 2 triệu, nên mua loại nào?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015428_thumbnail_1600.jpeg'
        },
        // Thêm các phần tử thông tin mới tương tự cho các phần tử còn lại
      ];
  
      $('.news-content').each(function(index) {
        var newLink = newInfo[index].link;
        var newText = newInfo[index].text;
        var newImageSrc = newInfo[index].imageSrc;
  
        $(this).find('a').attr('href', newLink);
        $(this).find('.news-feed a').text(newText);
        $(this).find('img').attr('src', newImageSrc);
      });
      var newHeaderText = 'Review Công Nghệ';
      $('.km').text(newHeaderText);
    });
  });
  $(document).ready(function() {
    $('#ThuThuat').click(function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  
      var newInfo = [
        {
          link: 'https://shopdunk.com/macbook-m2-khong-nhan-sac',
          text: 'Hướng dẫn chi tiết cách kết nối máy in với MacBook M2',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015852_macbook-air-m2-sac-pin_1600.jpeg'
        },
        //1
        {
          link: 'https://shopdunk.com/dung-luong-pin-ipad-pro-m2',
          text: 'Đánh giá dung lượng pin iPad Pro M2: Hơn hẳn iPad Air 5!',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016329_dung-luong-pin-ipad-pro-m2_1600.jpeg'
        },
        //2
  
        //3
        {
          link: 'https://shopdunk.com/quen-mat-khau-macbook-m2',
          text: 'Tư vấn lựa chọn kích thước Apple Watch Series 8 phù hợp',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015873_quen-mat-khau-macbook-m2_1600.jpeg'
        },
        //4
        {
          link: 'https://shopdunk.com/cach-reset-macbook-m2',
          text: 'MacBook Air M2 dùng chuột gì tốt nhất? Top 8 sản phẩm đáng mua',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015910_cach-reset-macbook-m2_1600.jpeg'
        },
  
        //5
        {
          link: 'https://shopdunk.com/macbook-air-m2-khong-len-man-hinh',
          text: 'Lỗi MacBook Air M2 không lên màn hình: Nguyên nhân và cách khắc phục ',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015993_0706_m2color_1600.jpeg'
        },
  
        //6
        {
          link: 'https://shopdunk.com/den-ban-phim-macbook-pro-m2',
          text: '22 Trường hợp Apple Watch Series 8 bị lỗi và cách xử lý nhanh',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016082_den-ban-phim-macbook-pro-m2_1600.jpeg'
        },
  
        //7
        {
          link: 'https://shopdunk.com/ve-sinh-airpod',
          text: '4 Giải pháp khi Apple Watch Series 8 không cập nhật được phần mềm',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016048_ve-sinh-tai-nghe-airpods_1600.jpeg'
        },
        //8
        {
          link: 'https://shopdunk.com/ket-noi-may-in-voi-macbook-m2',
          text: 'Apple Watch Series 8 nhanh hết pin | Lỗi do pin hay người dùng?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016107_ket-noi-may-in-voi-macbook-m2_1600.jpeg'
        },
        {
          link: 'https://shopdunk.com/apple-watch-series-8-bi-treo-tao',
          text: 'So sánh AirPods 2 và AirPods 3: Hơn 2 triệu, nên mua loại nào?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016141_thumbnail_1600.jpeg'
        },
        // Thêm các phần tử thông tin mới tương tự cho các phần tử còn lại
      ];
  
      $('.news-content').each(function(index) {
        var newLink = newInfo[index].link;
        var newText = newInfo[index].text;
        var newImageSrc = newInfo[index].imageSrc;
  
        $(this).find('a').attr('href', newLink);
        $(this).find('.news-feed a').text(newText);
        $(this).find('img').attr('src', newImageSrc);
      });
      var newHeaderText = 'Thủ Thuật Công Nghệ';
      $('.km').text(newHeaderText);
    });
  });
  $(document).ready(function() {
    $('#TinKhac').click(function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  
      var newInfo = [
        {
          link: 'https://shopdunk.com/apple-watch-series-8-nhanh-het-pin',
          text: 'Apple Watch Series 8 nhanh hết pin | Lỗi do pin hay người dùng?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015620_thumbnail_1600.jpeg'
        },
        //1
        {
          link: 'https://shopdunk.com/macbook-m2-bi-nong',
          text: 'MacBook M2 bị nóng quá tải phải làm sao? Cách ổn định nhiệt độ của máy ',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015866_macbook-m2_1600.jpeg'
        },
        //2
  
        //3
        {
          link: 'https://shopdunk.com/kich-thuoc-apple-watch-series-8',
          text: 'Tư vấn lựa chọn kích thước Apple Watch Series 8 phù hợp',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016094_thumbnail_1600.jpeg'
        },
        //4
        {
          link: 'https://shopdunk.com/cach-reset-macbook-m2',
          text: 'MacBook Air M2 dùng chuột gì tốt nhất? Top 8 sản phẩm đáng mua',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015910_cach-reset-macbook-m2_1600.jpeg'
        },
  
        //5
        {
          link: 'https://shopdunk.com/apple-watch-series-8-khong-cap-nhat-duoc',
          text: '4 Giải pháp khi Apple Watch Series 8 không cập nhật được phần mềm',
          imageSrc: 'https://shopdunk.com/images/thumbs/0015656_thumbnail_1600.jpeg'
        },
  
        //6
        {
          link: 'https://shopdunk.com/den-ban-phim-macbook-pro-m2',
          text: '22 Trường hợp Apple Watch Series 8 bị lỗi và cách xử lý nhanh',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016082_den-ban-phim-macbook-pro-m2_1600.jpeg'
        },
  
        //7
        {
          link: 'https://shopdunk.com/ve-sinh-airpod',
          text: '4 Giải pháp khi Apple Watch Series 8 không cập nhật được phần mềm',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016048_ve-sinh-tai-nghe-airpods_1600.jpeg'
        },
        //8
        {
          link: 'https://shopdunk.com/ket-noi-may-in-voi-macbook-m2',
          text: 'Apple Watch Series 8 nhanh hết pin | Lỗi do pin hay người dùng?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016107_ket-noi-may-in-voi-macbook-m2_1600.jpeg'
        },
        {
          link: 'https://shopdunk.com/apple-watch-series-8-bi-treo-tao',
          text: 'So sánh AirPods 2 và AirPods 3: Hơn 2 triệu, nên mua loại nào?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0016141_thumbnail_1600.jpeg'
        },
        // Thêm các phần tử thông tin mới tương tự cho các phần tử còn lại
      ];
  
      $('.news-content').each(function(index) {
        var newLink = newInfo[index].link;
        var newText = newInfo[index].text;
        var newImageSrc = newInfo[index].imageSrc;
  
        $(this).find('a').attr('href', newLink);
        $(this).find('.news-feed a').text(newText);
        $(this).find('img').attr('src', newImageSrc);
      });
      var newHeaderText = 'Một Số Tin Khác';
      $('.km').text(newHeaderText);
    });
  });
  
  $(document).ready(function() {
    $('#TinTucApple').click(function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  
      var newInfo = [
        {
          link: 'https://shopdunk.com/iphone-14-pro-max-sap-gia-ly-do-tu-dau',
          text: 'iPhone 14 Pro Max sập giá. Lý do từ đâu?',
          imageSrc: 'https://shopdunk.com/images/thumbs/0014158_Apple-Far-Out-Event-iPhone-14-Pro-and-iPhone-14-Pro-Max-89-scaled_1600.jpeg'
        },
        //1
        {
          link: 'https://shopdunk.com/macbook-m2-bi-nong',
          text: '3 tính năng thú vị của iOS 16.4 mà bạn không thể bỏ qua',
          imageSrc: 'https://shopdunk.com/images/thumbs/0013684_maxresdefault (9)_1600.jpeg'
        },
        //2
  
        //3
        {
          link: 'https://shopdunk.com/kich-thuoc-apple-watch-series-8',
          text: 'Tuyển tập Bộ icon mới trên iOS 16.4 ra trong tuần này',
          imageSrc: 'https://shopdunk.com/images/thumbs/0012333_ios-16-4-emoji-characters_1600.png'
        },
        //4
        {
          link: 'https://shopdunk.com/cach-reset-macbook-m2',
          text: 'AirPods Pro 2 thay đổi nhỏ ngoại hình, cải tiến lớn tính năng',
          imageSrc: 'https://shopdunk.com/images/thumbs/0006070_Thiết kế chưa có tên (1)_1600.jpeg'
        },
  
        //5
        {
          link: 'https://shopdunk.com/apple-watch-series-8-khong-cap-nhat-duoc',
          text: 'Apple Watch Ultra là chiếc Smart Watch được yêu thích nhất 2022',
          imageSrc: 'https://shopdunk.com/images/thumbs/0006071_Thiết kế chưa có tên (2)_1600.jpeg'
        },
  
        //6
        {
          link: 'https://shopdunk.com/den-ban-phim-macbook-pro-m2',
          text: 'iPhone được sản xuất ở đâu? Hành trình từ linh kiện đến khi tạo ra một chiếc iPhone hoàn chỉnh',
          imageSrc: 'https://shopdunk.com/images/thumbs/0006074_Thiết kế chưa có tên (5)_1600.jpeg'
        },
  
        //7
        {
          link: 'https://shopdunk.com/ve-sinh-airpod',
          text: 'Doanh số iPhone tại Việt Nam tăng trưởng nhanh nhất Đông Nam Á',
          imageSrc: 'https://shopdunk.com/images/thumbs/0005011_iphone14-1-582x327_1600.webp'
        },
        //8
        {
          link: 'https://shopdunk.com/ket-noi-may-in-voi-macbook-m2',
          text: 'USB Type-C trên iPad gen 10 xuất dữ liệu chỉ bằng Lightning iPad gen 9',
          imageSrc: 'https://shopdunk.com/images/thumbs/0001380_iPad-USB-C_1600.webp'
        },
        {
          link: 'https://shopdunk.com/apple-watch-series-8-bi-treo-tao',
          text: 'Apple chính thức ra mắt iOS 16 với nhiều tính năng siêu đỉnh, update ngay thôi',
          imageSrc: 'https://shopdunk.com/images/thumbs/0001386_6a5196fd09b6e0e8b9a7_1600.jpeg'
        },
        // Thêm các phần tử thông tin mới tương tự cho các phần tử còn lại
      ];
  
      $('.news-content').each(function(index) {
        var newLink = newInfo[index].link;
        var newText = newInfo[index].text;
        var newImageSrc = newInfo[index].imageSrc;
  
        $(this).find('a').attr('href', newLink);
        $(this).find('.news-feed a').text(newText);
        $(this).find('img').attr('src', newImageSrc);
      });
      var newHeaderText = 'Tin Tức Apple';
      $('.km').text(newHeaderText);
    });
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    const congcuItems = document.getElementsByClassName('congcu');
    const firstItem = congcuItems[0];

    firstItem.classList.add('active'); // Thêm lớp active cho thẻ li đầu tiên

    for (let i = 0; i < congcuItems.length; i++) {
      congcuItems[i].addEventListener('click', function() {
        // Xóa lớp active khỏi tất cả các thẻ li congcu
        for (let j = 0; j < congcuItems.length; j++) {
          congcuItems[j].classList.remove('active');
        }

        // Thêm lớp active cho thẻ li và a được nhấp vào
        this.classList.add('active');
        const link = this.querySelector('a');
        if (link) {
          link.classList.add('active');
        }
      });
    }
  });