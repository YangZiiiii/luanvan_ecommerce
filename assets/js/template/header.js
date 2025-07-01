class AppHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
   <header>
      <!-- Header desktop -->
      <div class="container-menu-desktop">
         <!-- Topbar -->
         <div class="top-bar">
            <div class="content-topbar flex-sb-m h-full container">
               <div class="left-top-bar">
                  Free shipping for standard order over $100
               </div>

               <div class="right-top-bar flex-w h-full">
                  <div class="login-menu-container show-menu--login" id="login-menu-sign">
                     <a href="#" class="flex-c-m trans-04 p-lr-25 open-modal-log" data-tab="login">
                        Sign in
                     </a>
                     <a href="#" class="flex-c-m trans-04 p-lr-25 open-modal-log p-l-sign" data-tab="register">
                        Sign up
                     </a>
                  </div>
                  <div class="login-menu-container" id="login-menu-user">
                     <a href="#" class="none-underline flex-c-m trans-04 p-lr-25 login-menu-toggle"
                        style="padding: 0 10px; height: 100%;">
                        <i class="fa fa-user"></i> <span class="ml-2">Username</span>
                     </a>
                     <div class="sub-menu-login">
                        <a href="loginInfo.html" class="sub-menu-login-item">Thông tin cá nhân</a>
                        <a href="orderInfo.html" class="sub-menu-login-item">Lịch sử mua hàng</a>
                        <a href="#!" class="sub-menu-login-item logout-btn">Đăng xuất</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Modal Login -->
         <div class="modal-log">
            <!-- Toast error trong modal login -->
            <div id="login-toast" style="position:absolute; top:100px;z-index:10;"></div>
            <div class="modal-content">
               <span class="close-log">&times;</span>
               <div class="switch-tabs">
                  <span class="tab-link active" data-tab="login">Đăng nhập</span>
                  <span class="tab-link" data-tab="register">Đăng ký</span>
               </div>

               <!-- Form Đăng nhập -->
               <div class="tab-content tab-none active" data-content="login">

                  <h2 class="form-title">Đăng nhập</h2>

                  <form class="form" id="login-form">
                     <input type="text" class="form-input" placeholder="Tên đăng nhập" required />
                     <input type="password" class="form-input" placeholder="Mật khẩu" required />
                     <div class="options">
                        <label class="remember"><input type="checkbox" />
                           <span>Nhớ mật khẩu</span></label>
                        <a href="#" class="forgot-password">Quên mật khẩu?</a>
                     </div>
                     <button type="submit" class="form-btn">Đăng nhập</button>
                     <p class="switch-form">
                        Chưa có tài khoản?
                        <a href="#" class="switch-tab" data-tab="register">Đăng ký</a>
                     </p>
                  </form>
               </div>

               <!-- Form Đăng ký -->
               <div class="tab-content tab-none" data-content="register">
                  <h2 class="form-title">Đăng ký</h2>
                  <form class="form" id="register-form">
                     <input type="text" class="form-input" name="firstName" placeholder="Họ" required />
                     <input type="text" class="form-input" name="lastName" placeholder="Tên" required />
                     <input type="text" class="form-input" name="phone" placeholder="Số điện thoại" required />
                     <input type="text" class="form-input" name="email" placeholder="Email" required />
                     <input type="password" class="form-input" name="password" placeholder="Mật khẩu" required />
                     <button type="submit" class="form-btn">Đăng ký</button>
                     <p class="switch-form">
                        Đã có tài khoản?
                        <a href="#" class="switch-tab" data-tab="login">Đăng nhập</a>
                     </p>
                  </form>
                  <div id="register-spinner" style="display:none; margin:10px auto; text-align:center;">
                     <div class="spinner"
                        style="display:inline-block;width:32px;height:32px;border:4px solid #ccc;border-top:4px solid #27ae60;border-radius:50%;animation:spin 1s linear infinite;">
                     </div>
                  </div>
                  <div id="register-toast" style="margin-top:10px;"></div>
               </div>
               <style>
                 
               </style>


               <!-- Đăng nhập bằng mạng xã hội -->


               <!-- Copyright -->
               <p class="copyright">
                  © 2025 COZA STORE. All rights reserved.
               </p>
            </div>
         </div>

         <!-- Modal Quên mật khẩu -->
         <div class="modal-forgot">
            <div class="modal-content">
               <span class="close-forgot">&times;</span>
               <h2 class="form-title">Quên mật khẩu</h2>
               <!-- Toast message for forgot password -->
               <div id="forgot-toast" class="forgot-toast"></div>
               <!-- Spinner loading -->
               <div id="forgot-spinner" class="forgot-spinner"></div>
               <form class="form" id="forgot-form">
                  <input type="email" class="form-input" placeholder="Nhập email của bạn" required />
                  <button type="submit" class="form-btn">Gửi yêu cầu</button>
                  <p class="switch-form">
                     Nhớ lại mật khẩu?
                     <a href="#" class="back-to-login">Đăng nhập</a>
                  </p>
               </form>
            </div>
         </div>

         <!-- Modal -->
         <div class="wrap-menu-desktop">
            <nav class="limiter-menu-desktop container">
               <!-- Logo desktop -->
               <a href="/" class="logo">
                  <img src="./assets/images/icons/logo-01.png" alt="IMG-LOGO" />
               </a>

               <!-- Menu desktop -->
               <div class="menu-desktop">
                  <ul class="main-menu">
                     <li class="active-menu">
                        <a href="index.html">Home</a>
                     </li>

                     <li>
                        <a href="product.html">Shop</a>
                     </li>

                     <li class="label1" data-label1="hot">
                        <a href="shoppingCart.html">Features</a>
                     </li>

                     <li>
                        <a href="about.html">About</a>
                     </li>

                     <li>
                        <a href="contact.html">Contact</a>
                     </li>
                  </ul>
               </div>

               <!-- Search -->


               <!-- Search product -->
               <div class="dis-none panel-search w-full p-t-10 p-b-15 search-new">
                  <input class="mtext-107 cl2 size-114 plh2 p-r-15 search-height" type="text" name="search-product"
                     placeholder="Search . . ." />

               </div>
               <!-- Icon header -->
               <!-- Change for cart -->
               <div class="wrap-icon-header flex-w flex-r-m"></div>
               <div class="flex-c-m stext-106 cl6 size-105 pointer trans-04 m-tb-4 js-show-search box-search">
                  <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                  <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
               </div>

               <div class="header__cart-container" style="position:relative;">
                  <div
                     class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart noti-none"
                     data-notify="0" id="cart-icon-header" tabindex="0">
                     <i class="zmdi zmdi-shopping-cart "></i>
                  </div>

                  <div class="header__cart-notify" style="width:300px; display:none;">
                     <div class="header__cart-notify" style="width:300px;">
                        <div class="empty__cart">
                           <img src="./assets/images/emptycart.png" alt="" class="header__cart-img-nocart" />
                           <p class="header__cart-msg">No products yet</p>
                        </div>
                     </div>
                  </div>
               </div>

               <a href="productFavourite.html"
                  class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti icon-heart-number"
                  data-notify="0">
                  <i class="zmdi zmdi-favorite-outline"></i>
               </a>
               <script>

               </script>
               <div class="user-menu-scroll" id="user-menu-scroll" style="display: none;">
                  <a href="#!" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                     data-notify="!">
                     <i class="fa fa-user"></i>
                  </a>
                  <div class="sub-menu-login user-login">
                     <a href="loginInfo.html" class="sub-menu-login-item">Thông tin cá nhân</a>
                     <a href="orderInfo.html" class="sub-menu-login-item">Lịch sử mua hàng</a>
                     <a href="#" class="sub-menu-login-item logout-btn">Đăng xuất</a>
                  </div>
               </div>


         </div>
         </nav>
      </div>
      </div>

      <!-- Modal Search -->
      <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
         <div class="container-search-header">
            <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
               <img src="./assets/images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form class="wrap-search-header flex-w p-l-15">
               <button class="flex-c-m trans-04">
                  <i class="zmdi zmdi-search"></i>
               </button>
               <input class="plh3" type="text" name="search" placeholder="Search..." />
            </form>
         </div>
      </div>
      <!-- Toast Message Global -->
      <div id="toast" style="position: fixed; top: 30px; left: 50%; transform: translateX(-50%); z-index: 9999;"></div>
   </header>
   `;

      // Danh sách yêu thích
      document.addEventListener('DOMContentLoaded', function () {
         const userId = localStorage.getItem('userId');
         if (userId && userId !== 'null') {
            fetch(`http://localhost:8080/api/v1/favourites/user/${userId}`)
               .then(res => res.json())
               .then(data => {
                  if (data && data.statusCode === 200 && Array.isArray(data.data)) {
                     // Lưu danh sách productId yêu thích vào localStorage
                     const favIds = data.data.map(item => item.productId);
                     localStorage.setItem('favouriteProductIds', JSON.stringify(favIds));
                     // Cập nhật số lượng yêu thích trên icon nếu cần
                     const numberOfFavourites = document.querySelector('.icon-heart-number[data-notify]');
                     if (numberOfFavourites) {
                        numberOfFavourites.setAttribute('data-notify', favIds.length);
                     }
                  }
               })
               .catch(() => { /* ignore error */ });
         }
      });


      // Đăng ký tài khoản
      document.addEventListener('DOMContentLoaded', function () {
         const registerForm = document.getElementById('register-form');
         const registerToast = document.getElementById('register-toast');
         const registerSpinner = document.getElementById('register-spinner');
         const modalLog = document.querySelector('.modal-log');
         const formInputsRegister = document.querySelectorAll('.form-input');

         function showRegisterToast(msg, isError = false) {
            if (!registerToast) return;
            registerToast.textContent = msg;
            registerToast.style.color = isError ? '#e74c3c' : '#27ae60';
            registerToast.style.fontWeight = 'bold';
            registerToast.style.textAlign = 'center';
            registerToast.style.opacity = '1';
            setTimeout(() => {
               registerToast.textContent = '';
               registerToast.style.opacity = '';
            }, 10000);
         }

         function isValidPassword(password) {
            // At least 1 uppercase, 1 digit, and length >= 6
            return password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
         }

         if (registerForm) {
            registerForm.addEventListener('submit', function (e) {
               e.preventDefault();
               registerToast.textContent = '';
               if (registerSpinner) registerSpinner.style.display = 'block';

               const formData = new FormData(registerForm);
               const password = formData.get('password') || '';
               if (!isValidPassword(password)) {
                  if (registerSpinner) registerSpinner.style.display = 'none';
                  showRegisterToast('Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 số và tối thiểu 6 ký tự.', true);
                  return;
               }

                  fetch('http://localhost:8080/api/v1/auth/register', {
                    method: 'POST',
                    body: formData
                  })
                    .then(res => res.json())
                    .then(data => {
                      if (registerSpinner) registerSpinner.style.display = 'none';
                      if (data && data.statusCode === 200) {
                        showRegisterToast('Đăng ký thông tin hoàn tất! Vui lòng xác thực email để sử dụng tài khoản.', false);

                        // Đóng modal sau khi hiện toast và trả thanh cuộn body về mặc định
                        setTimeout(function () {
                           if (modalLog) modalLog.classList.remove("show-log");
                           document.body.style.overflow = '';
                           document.documentElement.style.overflow = '';
                           formInputsRegister.forEach(input => {
                              input.value = ''; // Xóa giá trị các input
                           });

                        }, 10000);
                      } else {
                        showRegisterToast(data.message || 'Đăng ký thất bại!', true);
                      }
                    })
                    .catch(() => {
                      if (registerSpinner) registerSpinner.style.display = 'none';
                      showRegisterToast('Đăng ký thất bại!', true);
                    });
            });
         }
      });

      // Quên mật khẩu
      const forgotPasswordLink = document.querySelector('.forgot-password');
      const forgotModal = document.querySelector('.modal-forgot');
      const closeForgot = document.querySelector('.close-forgot');
      const backToLogin = document.querySelector('.back-to-login');
      const loginModal = document.querySelector('.modal-log');

      // Mở modal quên mật khẩu
      forgotPasswordLink.addEventListener('click', (e) => {
         e.preventDefault();
         forgotModal.classList.add('show-forgot');
      });

      // Đóng modal quên mật khẩu
      closeForgot.addEventListener('click', () => {
         forgotModal.classList.remove('show-forgot');
      });

      // Quay lại modal đăng nhập
      backToLogin.addEventListener('click', (e) => {
         e.preventDefault();
         forgotModal.classList.remove('show-forgot');
      });
      // Forgot password form submit
      document.addEventListener('DOMContentLoaded', function () {
         const forgotForm = document.getElementById('forgot-form');
         const forgotToast = document.getElementById('forgot-toast');
         const forgotSpinner = document.getElementById('forgot-spinner');
         if (forgotForm) {
            forgotForm.addEventListener('submit', function (e) {
               e.preventDefault();
               const email = forgotForm.querySelector('input[type="email"]').value.trim();
               if (!email) return;
               forgotToast.className = 'forgot-toast';
               forgotToast.textContent = '';
               forgotSpinner.className = 'forgot-spinner show';
               fetch(`http://localhost:8080/api/v1/auth/forgot-password/${encodeURIComponent(email)}`, {
                  method: 'POST'
               })
                  .then(res => res.json())
                  .then(data => {
                     forgotSpinner.className = 'forgot-spinner';
                     forgotToast.textContent = data.message || 'Có lỗi xảy ra';
                     forgotToast.className = 'forgot-toast show' + (data.statusCode === 200 ? '' : ' error');
                     setTimeout(() => {
                        forgotToast.className = 'forgot-toast';
                        forgotToast.textContent = '';
                        forgotModal.classList.remove('show-forgot');
                        if (loginModal) loginModal.style.display = 'flex';
                     }, 5000);
                  })
                  .catch(() => {
                     forgotSpinner.className = 'forgot-spinner';
                     forgotToast.textContent = 'Có lỗi xảy ra';
                     forgotToast.className = 'forgot-toast show error';
                     setTimeout(() => {
                        forgotToast.className = 'forgot-toast';
                        forgotToast.textContent = '';
                     }, 2000);
                  });
            });
         }
      });



      // Show/hide user menu scroll based on userId
      function toggleUserMenuScroll() {
         var userId = localStorage.getItem('userId');
         var userMenu = document.getElementById('user-menu-scroll');
         if (userMenu) {
            userMenu.style.display = (userId && userId !== 'null') ? 'block' : 'none';
         }
      }
      document.addEventListener('DOMContentLoaded', function () {
         toggleUserMenuScroll();
         // Also update on login/logout
         window.addEventListener('storage', toggleUserMenuScroll);
         window.addEventListener('cart-updated', toggleUserMenuScroll);
      });
      // Listen for login success and update menu immediately
      window.addEventListener('login-success', function () {
         toggleUserMenuScroll();
      });




      // --- HIỆN/ẨN giỏ hàng khi click thay vì hover ---
      document.addEventListener('DOMContentLoaded', function () {
         // Lấy icon giỏ hàng và phần thông báo giỏ hàng
         const cartIcon = document.getElementById('cart-icon-header');
         const cartNotify = cartIcon && cartIcon.parentElement.querySelector('.header__cart-notify');
         let cartVisible = false;

         // Hàm hiện giỏ hàng
         function showCart() {
            if (cartNotify) {
               cartNotify.style.display = 'block';
               cartNotify.style.visibility = 'visible';
               cartNotify.style.opacity = '1';
               cartVisible = true;
            }
         }
         // Hàm ẩn giỏ hàng
         function hideCart() {
            if (cartNotify) {
               cartNotify.style.display = 'none';
               cartNotify.style.visibility = 'hidden';
               cartNotify.style.opacity = '0';
               cartVisible = false;
            }
         }
         // Toggle giỏ hàng khi click icon
         if (cartIcon && cartNotify) {
            cartIcon.addEventListener('click', function (e) {
               e.stopPropagation();
               const userId = localStorage.getItem('userId');
               if (userId && userId !== 'null') {
                  // Nếu có userId thì fetch lại cart từ API khi mở
                  if (!cartVisible) {
                     fetch(`http://localhost:8080/api/v1/cart?userId=${userId}`)
                        .then(res => res.json())
                        .then(cartData => {
                           if (
                              cartData &&
                              cartData.statusCode === 200 &&
                              cartData.data &&
                              Array.isArray(cartData.data.items)
                           ) {
                              const items = cartData.data.items;
                              const cartLocal = [];
                              const cartQuantities = {};

                              items.forEach(item => {
                                 cartLocal.push({
                                    id: item.productId,
                                    name: item.productName,
                                    primaryImageURL: item.imageUrl || './assets/images/emptycart.png',
                                    unitPrice: item.unitPrice,
                                    // Lưu total cho tiện
                                    total: item.unitPrice * item.quantity
                                 });
                                 cartQuantities[item.productId] = item.quantity ?? 1;
                              });

                              localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                              localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));
                              window.dispatchEvent(new Event('cart-updated'));
                              showCart();
                           } else {
                              showCart();
                           }
                        })
                        .catch(() => {
                           showCart();
                        });
                  } else {
                     hideCart();
                  }
               } else {
                  // Không có userId thì chỉ toggle giỏ hàng
                  if (!cartVisible) {
                     showCart();
                  } else {
                     hideCart();
                  }
               }
            });
            // Ẩn giỏ hàng khi click ra ngoài
            document.addEventListener('click', function (e) {
               if (cartVisible && !cartNotify.contains(e.target) && e.target !== cartIcon) {
                  hideCart();
               }
            });
            // Ngăn click trong giỏ hàng làm ẩn giỏ
            cartNotify.addEventListener('click', function (e) {
               e.stopPropagation();
            });
         }
         // Ẩn giỏ hàng khi bấm ESC
         document.addEventListener('keydown', function (e) {
            if (cartVisible && e.key === 'Escape') {
               hideCart();
            }
         });
         // Ẩn giỏ hàng khi chuyển trang (hashchange)
         window.addEventListener('hashchange', hideCart);
      });
      // --- KẾT THÚC: HIỆN/ẨN giỏ hàng khi click ---

      // --- FETCH cart API khi load trang nếu có userId ---
      document.addEventListener('DOMContentLoaded', function () {
         // Chỉ fetch cart nếu đã đăng nhập (có token và userId)
         const token = localStorage.getItem('token');
         const userId = localStorage.getItem('userId');
         if (token && token !== 'null' && userId && userId !== 'null') {
            fetch(`http://localhost:8080/api/v1/cart?userId=${userId}`)
               .then(res => res.json())
               .then(cartData => {
                  if (
                     cartData &&
                     cartData.statusCode === 200 &&
                     cartData.data &&
                     Array.isArray(cartData.data.items)
                  ) {
                     const items = cartData.data.items;
                     const cartLocal = [];
                     const cartQuantities = {};

                     items.forEach(item => {
                        cartLocal.push({
                           id: item.productId,
                           name: item.productName,
                           primaryImageURL: item.imageUrl || './assets/images/emptycart.png',
                           unitPrice: item.unitPrice,
                           // Lưu total cho tiện
                           total: item.unitPrice * item.quantity
                        });
                        cartQuantities[item.productId] = item.quantity ?? 1;
                     });

                     localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                     localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));
                     window.dispatchEvent(new Event('cart-updated'));
                  }
               })
               .catch(() => { });
         }
      });
      // --- KẾT THÚC: FETCH cart API khi load trang ---

      // Hàm format giá tiền kiểu "1.000.000đ"
      function formatPrice(price) {
         if (isNaN(price)) return '0đ';
         return price.toLocaleString('vi-VN') + 'đ';
      }

      // Cập nhật số lượng sản phẩm trên icon giỏ hàng
      function updateCartNotify() {
         const cartIcon = document.getElementById('cart-icon-header');
         let cartLocal = [];
         try {
            cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
         } catch (e) {
            cartLocal = [];
         }
         cartIcon && cartIcon.setAttribute('data-notify', cartLocal.length);
      }

      // Lấy số lượng từng sản phẩm trong giỏ từ localStorage
      function getCartQuantities() {
         let cartQty = {};
         try {
            cartQty = JSON.parse(localStorage.getItem('cartQuantities')) || {};
         } catch (e) {
            cartQty = {};
         }
         return cartQty;
      }

      // Lưu lại số lượng từng sản phẩm vào localStorage
      function setCartQuantities(cartQty) {
         localStorage.setItem('cartQuantities', JSON.stringify(cartQty));
      }

      // Render danh sách sản phẩm trong giỏ hàng
      function renderCartItems() {
         const cartList = document.createElement('ul');
         cartList.className = 'header__cart-list';

         let cartLocal = [];
         try {
         cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
         } catch (e) {
         cartLocal = [];
         }
         let cartQty = getCartQuantities();

         if (cartLocal.length === 0) {
         cartList.innerHTML = `<li class="header__cart-item"><div class="header__cart-msg">No products yet</div></li>`;
         } else {
         cartLocal.forEach((item, idx) => {
            let quantity = cartQty[item.id] ?? 0;
            let price = 0;
            const userId = localStorage.getItem('userId');
            if (!userId || userId === 'null') {
            if (typeof item.unitPrice !== 'undefined') {
               price = (item.unitPrice ?? 0) * quantity;
            } else if (typeof item.sellingPrice !== 'undefined') {
               price = (item.sellingPrice ?? 0) * quantity;
            } else if (typeof item.total !== 'undefined' && quantity > 0) {
               price = item.total;
            } else {
               price = 0;
            }
            } else {
            price = (item.unitPrice ?? 0) * quantity;
            }

            cartList.innerHTML += `
            <li class="header__cart-item" data-idx="${idx}">
            <div class="header__cart-img">
               <img src="${item.primaryImageURL || './assets/images/emptycart.png'}" alt="" style="width:100%; height:50%"/>
               </div>
            <div class="header__cart-item-content">
               <div class="header__cart-item-des">
               <span class="header__cart-des-product">${item.name}</span>
               <div class="header__cart-item-price-quantity">
                  <div class="header__cart-item-price">${formatPrice(price)}</div>
                  <div class="header__cart-item-quantity-wrapper" style="display:flex;align-items:center;gap:4px;">
                  <button class="btn-minus" style="border:1px solid;padding:0 8px;">-</button>
                  <input type="text" inputmode="numeric" pattern="[0-9]*" class="header__cart-item-quantity" value="${quantity}" style="width:60px;text-align:center;border: 1px solid; margin: 8px;" autocomplete="off" />
                  <button class="btn-plus" style="border:1px solid;padding:0 8px;">+</button>
                  </div>
               </div>
               <div class="header__cart-item-delete" style="cursor:pointer;">Xóa</div>
               </div>
               <div class="header__cart-item-classify">
               <span class="header__cart-item-type">${item.description || ''}</span>
               </div>
            </div>
            </li>
            `;
         });
         }

         // Sau khi render xong, gắn sự kiện cho các nút và input
         setTimeout(() => {
         cartList.querySelectorAll('.header__cart-item').forEach((li, idx) => {
            const qtyInput = li.querySelector('.header__cart-item-quantity');
            const priceDiv = li.querySelector('.header__cart-item-price');
            const minusBtn = li.querySelector('.btn-minus');
            const plusBtn = li.querySelector('.btn-plus');
            let cartLocal = [];
            try {
            cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
            } catch (e) {
            cartLocal = [];
            }
            let cartQty = getCartQuantities();
            const item = cartLocal[idx];
            const id = item.id;
            const userId = localStorage.getItem('userId');
            const unitPrice = (typeof item.unitPrice !== 'undefined') ? item.unitPrice : (item.sellingPrice ?? 0);

            // Cập nhật tổng tiền khi thay đổi số lượng
            function updatePriceDisplay(val) {
            const price = unitPrice * val;
            priceDiv.textContent = formatPrice(price);
            }

            // Hàm cập nhật số lượng lên localStorage và gọi API nếu có userId
            function updateQuantity(val) {
            if (isNaN(val) || val < 0) val = 0;
            if (val === (cartQty[id] ?? 0)) return;
            if (!userId || userId === 'null') {
               cartQty[id] = val;
               setCartQuantities(cartQty);
               renderCart();
               updateCartNotify();
            } else {
               fetch(`http://localhost:8080/api/v1/cart/update?userId=${userId}&productId=${id}&newQuantity=${val}`, {
               method: 'PUT'
               })
               .then(res => res.json())
               .then(data => {
                  cartQty[id] = val;
                  setCartQuantities(cartQty);
                  renderCart();
                  updateCartNotify();
               })
               .catch(() => {
                  cartQty[id] = val;
                  setCartQuantities(cartQty);
                  renderCart();
                  updateCartNotify();
               });
            }
            }

            // Khi nhập số lượng, cập nhật tổng tiền ngay và gọi updateQuantity
            qtyInput && qtyInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            let val = parseInt(this.value);
            if (isNaN(val) || val < 0) val = 0;
            updatePriceDisplay(val);
            updateQuantity(val);
            });

            // Nút minus
            minusBtn && minusBtn.addEventListener('click', function () {
            let val = parseInt(qtyInput.value) || 0;
            if (val > 0) {
               val--;
               qtyInput.value = val;
               updatePriceDisplay(val);
               updateQuantity(val);
            }
            });

            // Nút plus
            plusBtn && plusBtn.addEventListener('click', function () {
            let val = parseInt(qtyInput.value) || 0;
            val++;
            qtyInput.value = val;
            updatePriceDisplay(val);
            updateQuantity(val);
            });
         });
         }, 0);

         return cartList;
      }

      // Hàm chính render giỏ hàng
      function renderCart() {
         const cartNotify = document.querySelector('.header__cart-notify');
         const emptyCart = cartNotify.querySelector('.empty__cart');
         let cartLocal = [];
         try {
            cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
         } catch (e) {
            cartLocal = [];
         }

         // Nếu giỏ rỗng thì chỉ hiện empty cart
         if (cartLocal.length === 0) {
            if (emptyCart) emptyCart.style.display = 'block';
            cartNotify.style.width = '300px';
            cartNotify.innerHTML = emptyCart ? emptyCart.outerHTML : `
            <div class="empty__cart" style="display:block;">
            <img src="./assets/images/emptycart.png" alt="" class="header__cart-img-nocart" />
            <p class="header__cart-msg">Chưa có sản phẩm</p>
            </div>
         `;
         } else {
            // Có sản phẩm thì render danh sách
            if (emptyCart) emptyCart.style.display = 'none';
            cartNotify.style.width = '500px';
            cartNotify.innerHTML = '';
            const container = document.createElement('div');
            container.className = 'items-in__cart';
            container.innerHTML = `
            <h3 class="header__cart-content-product-add">Added products</h3>
         `;
            const cartList = renderCartItems();
            container.appendChild(cartList);

            // Các nút thao tác giỏ hàng
            const btnsDiv = document.createElement('div');
            btnsDiv.className = 'header__cart-list';
            btnsDiv.innerHTML = `
            <div class="header__cart-item-btn">
            <a href="checkout.html" class="btn btn--primary cart-btn-checkout">Check out</a>
            </div>
            <div class="header__cart-item-btn">
            <a href="shoppingCart.html" class="btn btn--primary cart-btn-view">View Cart</a>
            </div>
            <div class="header__cart-item-btn">
            <a href="#" class="btn btn--primary cart-btn-delete">Delete All</a>
            </div>
         `;
            container.appendChild(btnsDiv);

            cartNotify.appendChild(container);

            // Thêm sự kiện cho input số lượng, nút OK, nút xóa
            cartList.querySelectorAll('.header__cart-item').forEach((li, idx) => {

               const qtyInput = li.querySelector('.header__cart-item-quantity');
               const priceDiv = li.querySelector('.header__cart-item-price');
               const delBtn = li.querySelector('.header__cart-item-delete');

               let cartLocal = [];
               try {
                  cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
               } catch (e) {
                  cartLocal = [];
               }
               let cartQty = getCartQuantities();
               const item = cartLocal[idx];
               const id = item.id;
               const userId = localStorage.getItem('userId');

              

               // --- Xóa sản phẩm khỏi giỏ ---
               delBtn && delBtn.addEventListener('click', () => {
                  const userId = localStorage.getItem('userId');
                  if (!userId || userId === 'null') {
                     // Xóa local
                     let cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     let cartQty = getCartQuantities();
                     cartLocal.splice(idx, 1);
                     delete cartQty[id];
                     localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                     setCartQuantities(cartQty);
                     renderCart();
                     updateCartNotify();
                  } else {
                     // Gọi API xóa
                     let cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     let cartQty = getCartQuantities();
                     const items = cartLocal
                        .filter((p, i) => i !== idx)
                        .map(p => ({
                           productId: p.id,
                           quantity: cartQty[p.id] ?? 1
                        }));
                     fetch(`http://localhost:8080/api/v1/cart/remove?userId=${userId}&productId=${id}`, {
                        method: 'DELETE',
                        headers: {
                           'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                           userId: userId,
                           items: items
                        })
                     })
                        .then(res => res.json())
                        .then(data => {
                           cartLocal.splice(idx, 1);
                           delete cartQty[id];
                           localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           cartLocal.splice(idx, 1);
                           delete cartQty[id];
                           localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
               // --- KẾT THÚC: Xóa sản phẩm ---
            });

            // --- Xóa toàn bộ giỏ hàng ---
            const deleteAllBtn = btnsDiv.querySelector('.cart-btn-delete');
            if (deleteAllBtn) {
               deleteAllBtn.addEventListener('click', function (e) {
                  e.preventDefault();
                  const userId = localStorage.getItem('userId');
                  let cartLocal = [];
                  try {
                     cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                  } catch (e) {
                     cartLocal = [];
                  }
                  let cartQty = getCartQuantities();
                  if (!userId || userId === 'null') {
                     // Xóa toàn bộ local
                     localStorage.removeItem('cartLocal');
                     localStorage.removeItem('cartQuantities');
                     renderCart();
                     updateCartNotify();
                  } else {
                     // Gọi API xóa toàn bộ
                     const items = cartLocal.map(p => ({
                        productId: p.id,
                        quantity: cartQty[p.id] ?? 1
                     }));
                     fetch(`http://localhost:8080/api/v1/cart/clear?userId=${userId}`, {
                        method: 'DELETE',
                        headers: {
                           'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                           userId: userId,
                           items: items
                        })
                     })
                        .then(res => res.json())
                        .then(data => {
                           localStorage.removeItem('cartLocal');
                           localStorage.removeItem('cartQuantities');
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           localStorage.removeItem('cartLocal');
                           localStorage.removeItem('cartQuantities');
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
            }
            // --- KẾT THÚC: Xóa toàn bộ giỏ hàng ---
         }
         updateCartNotify();
      }

      // Render lần đầu
      renderCart();

      // Lắng nghe sự kiện cập nhật giỏ hàng để render lại
      window.addEventListener('cart-updated', function () {
         renderCart();
         updateCartNotify();
      });

      // Patch nút add-to-cart để cập nhật giỏ ngay lập tức
      document.addEventListener('DOMContentLoaded', function () {
         // Cho các sản phẩm load động
         const productList = document.getElementById('product-list');
         function patchAddToCartButtons() {
            if (!productList) return;
            productList.querySelectorAll('.btn-addcart').forEach(btn => {
               if (!btn.dataset.cartListener) {
                  btn.dataset.cartListener = '1';
                  btn.addEventListener('click', function (e) {
                     e.preventDefault();
                     // Lấy index sản phẩm từ button
                     const idx = this.getAttribute('data-product-index');
                     // Lấy danh sách sản phẩm từ lần fetch gần nhất
                     let products = [];
                     try {
                        products = window._lastFetchedProducts || [];
                     } catch (e) { }
                     if (!products.length && window.productsFromDOM) {
                        products = window.productsFromDOM;
                     }
                     const product = products[idx];
                     if (!product) return;
                     // Kiểm tra userId, nếu chưa đăng nhập thì không cho add to cart
                     const userId = localStorage.getItem('userId');
                     if (!userId || userId === 'null') {
                        swal("Bạn cần đăng nhập để thêm vào giỏ hàng!", "", "warning");
                        return;
                     }
                     let cartLocal = [];
                     try {
                        cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     } catch (e) {
                        cartLocal = [];
                     }
                     let cartQty = getCartQuantities();
                     // Nếu đã có thì tăng số lượng, chưa có thì thêm mới
                     const existIdx = cartLocal.findIndex(p => p.id === product.id);
                     if (existIdx !== -1) {
                        cartQty[product.id] = (cartQty[product.id] ?? 1) + 1;
                     } else {
                        cartLocal.push(product);
                        cartQty[product.id] = 1;
                     }
                     localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                     setCartQuantities(cartQty);
                     setTimeout(() => {
                        window.dispatchEvent(new Event('cart-updated'));
                     }, 10);
                  });
               }
            });
         }
         // Theo dõi thay đổi danh sách sản phẩm để patch lại nút
         if (productList) {
            const observer = new MutationObserver(() => {
               patchAddToCartButtons();
            });
            observer.observe(productList, { childList: true, subtree: true });
         }
         // Patch các nút đã render sẵn
         patchAddToCartButtons();
      });

      // Lưu danh sách sản phẩm vào window để add-to-cart dùng
      (function () {
         const origFetch = window.fetch;
         window.fetch = function () {
            return origFetch.apply(this, arguments).then(res => {
               // Chỉ patch cho API sản phẩm
               if (arguments[0] && typeof arguments[0] === 'string' && arguments[0].includes('/api/v1/product')) {
                  res.clone().json().then(data => {
                     window._lastFetchedProducts = data.content || [];
                  }).catch(() => { });
               }
               return res;
            });
         };
      })();

      // Ẩn/hiện menu login theo token
      function toggleLoginMenu() {
         var token = localStorage.getItem('token');
         var loginMenuSign = document.getElementById('login-menu-sign');
         var loginMenuUser = document.getElementById('login-menu-user');
         if (token && token !== 'null') {
            // Đã đăng nhập
            loginMenuSign.classList.remove('show-menu--login');
            loginMenuUser.classList.add('show-menu--login');
         } else {
            // Chưa đăng nhập
            loginMenuSign.classList.add('show-menu--login');
            loginMenuUser.classList.remove('show-menu--login');
         }
      }
      // Gọi khi load trang
      toggleLoginMenu();




      // Đăng xuất
      document.addEventListener('DOMContentLoaded', function () {
         var logoutBtns = document.getElementsByClassName('logout-btn');
         var arrayLogout = Array.from(logoutBtns); // hoặc: [...logoutBtns]

         arrayLogout.forEach(function (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
               e.preventDefault();
               var token = localStorage.getItem('token');
               if (token && token !== 'null') {
                  localStorage.removeItem("username");
                  localStorage.removeItem("firstName");
                  localStorage.removeItem("lastName");
                  localStorage.removeItem("phoneNumber");
                  localStorage.removeItem("token");
                  localStorage.removeItem("userId");
                  localStorage.removeItem("role");
                  localStorage.removeItem("loginSuccess");
                  localStorage.removeItem("ListViewAt");


                  showToast("Đăng xuất thành công!");

                  setTimeout(function () {
                     window.location.href = window.location.origin + window.location.pathname;
                  }, 1000);
               }
            });
         });


         // Đăng nhập
         var loginForm = document.getElementById('login-form');
         if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
               e.preventDefault();

               // Ẩn toast lỗi cũ trong modal nếu có
               showLoginToast("");

               const username = loginForm.querySelectorAll(".form-input")[0].value;
               const password = loginForm.querySelectorAll(".form-input")[1].value;

               fetch("http://localhost:8080/api/v1/auth/login", {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                     username: username,
                     password: password
                  })
               })
                  .then((response) => {
                     if (!response.ok) {
                        throw new Error("Đăng nhập thất bại");
                     }
                     return response.json();
                  })
                  .then((data) => {
                     if (data && data.statusCode === 200 && data.data && data.data.accessToken) {
                        // Lưu token và thông tin user vào localStorage
                        localStorage.setItem("username", username);
                        localStorage.setItem("firstName", data.data.firstName || "");
                        localStorage.setItem("lastName", data.data.lastName || "");
                        localStorage.setItem("phoneNumber", data.data.phone || "");
                        localStorage.setItem("token", data.data.accessToken);
                        localStorage.setItem("refreshToken", data.data.refreshToken || "");
                        localStorage.setItem("userId", data.data.userId);

                        localStorage.setItem("role", data.data.role);
                        localStorage.setItem("loginSuccess", "true");
                        toggleLoginMenu();
                        // Hiện toast thành công ngoài modal login
                        showToast("Đăng nhập thành công!", false, 2500);
                        // Đóng modal đăng nhập nếu thành công
                        setTimeout(function () {
                           var modal = document.querySelector('.modal-log');
                           if (modal) {
                              modal.style.display = 'none';
                           }
                           // Enable scroll lại cho body và html
                           document.body.style.overflow = '';
                           document.documentElement.style.overflow = '';
                           // Trigger event để update user menu scroll ngay lập tức
                           window.dispatchEvent(new Event('login-success'));
                        }, 50);
                     } else {
                        showLoginToast("Đăng nhập thất bại. Vui lòng kiểm tra lại.");
                     }
                  })
                  .catch((error) => {
                     showLoginToast("Đăng nhập thất bại. Vui lòng thử lại.");
                  });
            });
         }

      });

      // Toast Message ngoài modal
      function showToast(message, isError = false, duration = 2500) {
         const toast = document.getElementById("toast");
         if (!toast) return;
         toast.textContent = message;
         toast.className = "show" + (isError ? " error" : "");
         // Nếu là lỗi thì không có progress bar
         if (!isError) {
            // Remove old progress bar if exists
            let oldProgress = document.getElementById('toast-progress');
            if (oldProgress) oldProgress.remove();
            // Add progress bar
            const progress = document.createElement('div');
            progress.id = 'toast-progress';
            progress.style.animationDuration = (duration / 1000) + 's';
            progress.style.height = '3px';
            progress.style.background = '#4caf50';
            progress.style.position = 'absolute';
            progress.style.left = 0;
            progress.style.bottom = 0;
            progress.style.width = '100%';
            progress.style.animationName = 'toast-progress-bar';
            progress.style.animationTimingFunction = 'linear';
            toast.appendChild(progress);
         } else {
            // Remove progress bar if exists
            let oldProgress = document.getElementById('toast-progress');
            if (oldProgress) oldProgress.remove();
         }
         // Hiện toast trong duration ms
         setTimeout(() => {
            toast.className = toast.className.replace("show", "");
            // Remove progress bar
            let oldProgress = document.getElementById('toast-progress');
            if (oldProgress) oldProgress.remove();
         }, duration);
      }

      // Toast error trong modal login
      function showLoginToast(message, duration = 2000) {
         const toast = document.getElementById("login-toast");
         if (!toast) return;
         toast.innerHTML = "";
         if (!message) {
            toast.className = "";
            return;
         }
         toast.textContent = message;
         toast.className = "show error";
         toast.style.background = "#e74c3c";
         toast.style.color = "#fff";
         toast.style.borderRadius = "4px";
         toast.style.padding = "10px 18px";
         toast.style.marginBottom = "10px";
         toast.style.textAlign = "center";
         toast.style.fontSize = "15px";
         toast.style.opacity = "1";
         toast.style.transition = "opacity 0.3s";
         setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => {
               toast.className = "";
               toast.innerHTML = "";
               toast.style.opacity = "";
               toast.style.background = "";
               toast.style.color = "";
               toast.style.borderRadius = "";
               toast.style.padding = "";
               toast.style.marginBottom = "";
               toast.style.textAlign = "";
               toast.style.fontSize = "";
               toast.style.transition = "";
            }, 350);
         }, duration);
      }

      // Thêm CSS cho toast nếu chưa có
      (function () {
         if (!document.getElementById('toast-style')) {
            const style = document.createElement('style');
            style.id = 'toast-style';
            document.head.appendChild(style);
         }
      })();
   }
}
customElements.define("header-main", AppHeader);





