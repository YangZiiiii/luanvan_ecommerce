class AppHeaderV4Login extends HTMLElement {
   connectedCallback() {
   this.innerHTML = `
   <header class="header-v4">
      <!-- Header desktop -->
       <div id="toast">
            Đăng nhập thành công!
         <div id="toast-progress"></div>
         </div>
      <div class="container-menu-desktop">
         <!-- Topbar -->
         <div class="top-bar">
            <div class="content-topbar flex-sb-m h-full container">
               <div class="left-top-bar">
                  Free shipping for standard order over $100
               </div>

               <div class="right-top-bar flex-w h-full">
               <div class="login-menu-container">
                  <a href="#" class="none-underline flex-c-m trans-04 p-lr-25 login-menu-toggle" style="padding: 0 10px; height: 100%;">
                     <i class="fa fa-user"></i> <span class="ml-2">Username</span>
                  </a>

                  <div class="sub-menu-login">
                     <a href="loginInfo.html" class="sub-menu-login-item">Thông tin cá nhân</a>
                     <a href="/orders" class="sub-menu-login-item">Lịch sử mua hàng</a>
                     <a href="logout.html" class="sub-menu-login-item">Đăng xuất</a>
                  </div>
               </div>
               </div>

            </div>
         </div>


         

         <div class="wrap-menu-desktop how-shadow1">
            <nav class="limiter-menu-desktop container">

               <!-- Logo desktop -->
               <a href="login.html" class="logo">
                  <img src="./assets/images/icons/logo-01.png" alt="IMG-LOGO">
               </a>

               <!-- Menu desktop -->
               <div class="menu-desktop">
                  <ul class="main-menu">
                     <li>
                        <a href="login.html">Home</a>

                     </li>

                     <li class="">
                        <a href="loginProduct.html">Shop</a>
                     </li>

                     <li class="label1" data-label1="hot">
                        <a href="loginShoppingCart.html">Features</a>
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
              <div class="dis-none panel-search w-full p-t-10 p-b-15 search-new">
                  <input class="mtext-107 cl2 size-114 plh2 p-r-15 search-height" type="text" name="search-product"
                     placeholder="Search . . ." />

               </div>
               <!-- Icon header -->
               <div class="wrap-icon-header flex-w flex-r-m">
                  <div class="flex-c-m stext-106 cl6 size-105 pointer trans-04 m-tb-4 js-show-search box-search">
                     <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                     <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>

                  </div>

                 <div class="header__cart-container">
                  <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart "
                     data-notify="2">
                     <i class="zmdi zmdi-shopping-cart "></i>
                  </div>



                   <div class="header__cart-notify empty__cart">
                        <img src="./assets/images/emptycart.png" alt="" class="header__cart-img-nocart" />
                        <p class="header__cart-msg">Chưa có sản phẩm</p>

                        <h3 class="header__cart-content-product-add">
                        Sản phẩm đã thêm
                           </h3>
                           <ul class="header__cart-list">
                              <li class="header__cart-item">
                                 <img src="./assets/images/trangsucgiohang1.jpg" alt="" class="header__cart-img" />
                                 <div class="header__cart-item-content">
                                    <div class="header__cart-item-des">
                                       <span class="header__cart-des-product">Bộ kem đặc trị vùng mắt kem đặc trị
                                          vùng mắt kem đặc trị vùng mắt kem đặc
                                          trị vùng mắt kem đặc trị vùng
                                          mắt</span>
                                       <div class="header__cart-item-price-quantity">
                                          <div class="header__cart-item-price">2.000.000đ</div>

                                          <div class="header__cart-item-quantity-wrapper">
                                             <button class="btn-minus">-</button>
                                             <div class="header__cart-item-quantity">1</div>
                                             <button class="btn-plus">+</button>
                                          </div>

                                       </div>
                                       <div class="header__cart-item-delete">
                                          Xóa
                                       </div>
                                    </div>
                                    <div class="header__cart-item-classify">
                                       <span class="header__cart-item-type">Phân loại: Bạc</span>

                                    </div>
                                 </div>
                              </li>


                           </ul>
                           <div class="header__cart-list">
                           <div class="header__cart-item-btn">
                              <a href="#" class="btn btn--primary cart-btn">Check out</a>
                           </div>
                           <div class="header__cart-item-btn">
                              <a href="loginShoppingCart.html" class="btn btn--primary cart-btn">View Cart</a>
                           </div>
                           </div>
                        </div>

                     </div>

                  </div>

                  <a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                     data-notify="0">
                     <i class="zmdi zmdi-favorite-outline"></i>
                  </a>
               </div>

            </nav>
         </div>
      </div>

      <!-- Header Mobile -->
      <div class="wrap-header-mobile">
         <!-- Logo moblie -->
         <div class="logo-mobile">
            <a href="index.html"><img src="./assets/images/icons/logo-01.png" alt="IMG-LOGO"></a>
         </div>

         <!-- Icon header -->
         <div class="wrap-icon-header flex-w flex-r-m m-r-15">
            <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
               <i class="zmdi zmdi-search"></i>
            </div>

            <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
               data-notify="2">
               <i class="zmdi zmdi-shopping-cart"></i>
            </div>

            <a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
               data-notify="0">
               <i class="zmdi zmdi-favorite-outline"></i>
            </a>
         </div>

         <!-- Button show menu -->
         <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span class="hamburger-box">
               <span class="hamburger-inner"></span>
            </span>
         </div>
      </div>


      <!-- Menu Mobile -->
      <div class="menu-mobile">
         <ul class="topbar-mobile">
            <li>
               <div class="left-top-bar">
                  Free shipping for standard order over $100
               </div>
            </li>

            <li>
               <div class="right-top-bar flex-w h-full">
                  <a href="#" class="flex-c-m p-lr-10 trans-04">
                     Help & FAQs
                  </a>

                  <a href="#" class="flex-c-m p-lr-10 trans-04">
                     My Account
                  </a>

                  <a href="#" class="flex-c-m p-lr-10 trans-04">
                     EN
                  </a>

                  <a href="#" class="flex-c-m p-lr-10 trans-04">
                     USD
                  </a>
               </div>
            </li>
         </ul>

         <ul class="main-menu-m">
            <li>
               <a href="index.html">Home</a>
            </li>

            <li>
               <a href="product.html">Shop</a>
            </li>

            <li>
               <a href="shoppingCart.html" class="label1 rs1" data-label1="hot">Features</a>
            </li>
            s

            <li>
               <a href="about.html">About</a>
            </li>

            <li>
               <a href="contact.html">Contact</a>
            </li>
         </ul>
      </div>

      <!-- Modal Search -->
      <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
         <div class="container-search-header">
            <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
               <img src="./assets/images/icons/icon-close2.png" alt="CLOSE">
            </button>

            <form class="wrap-search-header flex-w p-l-15">
               <button class="flex-c-m trans-04">
                  <i class="zmdi zmdi-search"></i>
               </button>
               <input class="plh3" type="text" name="search" placeholder="Search...">
            </form>
         </div>
      </div>
   </header>
   `;
   document.addEventListener("DOMContentLoaded", function () {
         const isLoggedIn = localStorage.getItem("loginSuccess");
         const role = localStorage.getItem("role");

         if (isLoggedIn === "true") {
            const toast = document.getElementById("toast");
            toast.classList.add("show");

            // Sau 1.5s xóa cờ và ẩn toast
            setTimeout(() => {
               toast.classList.remove("show");
               localStorage.removeItem("loginSuccess");
            }, 2500);
         }

         if (role) {
            const loginMenu = document.querySelector(".login-menu-toggle span");
            if (loginMenu) {
               loginMenu.textContent = role;
            }
         }
      });

   }
   }
   customElements.define("header-main-v4-login", AppHeaderV4Login);