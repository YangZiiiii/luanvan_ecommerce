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
                  <a href="#" class="flex-c-m trans-04 p-lr-25 open-modal-log" data-tab="login">
                     Sign in
                  </a>

                  <a href="#" class="flex-c-m trans-04 p-lr-25 open-modal-log p-l-sign" data-tab="register">
                     Sign up
                  </a>
               </div>
            </div>
         </div>

         <!-- Modal Login -->
         <div class="modal-log">
            <div id="toast"></div>

            <div class="modal-content">
               <span class="close-log">&times;</span>
               <div class="switch-tabs">
                  <span class="tab-link active" data-tab="login">Đăng nhập</span>
                  <span class="tab-link" data-tab="register">Đăng ký</span>
               </div>

               <!-- Form Đăng nhập -->
               <div class="tab-content tab-none active" data-content="login">
                  <h2 class="form-title">Đăng nhập</h2>
                  <form class="form">
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
                  <form class="form">
                     <input type="text" class="form-input" placeholder="Tên đăng nhập" required />
                     <input type="password" class="form-input" placeholder="Mật khẩu" required />
                     <input type="password" class="form-input" placeholder="Nhập lại mật khẩu" required />
                     <button type="submit" class="form-btn">Đăng ký</button>
                     <p class="switch-form">
                        Đã có tài khoản?
                        <a href="#" class="switch-tab" data-tab="login">Đăng nhập</a>
                     </p>
                  </form>
               </div>

               <!-- Đăng nhập bằng mạng xã hội -->
               <div class="social-login">
                  <p class="social-text">Hoặc đăng nhập bằng</p>
                  <button class="social-btn facebook">
                     <i class="fa-brands fa-facebook-f"></i>
                     Facebook
                  </button>
                  <button class="social-btn google">
                     <i class="fa-brands fa-google"></i>
                     Google
                  </button>
                  <button class="social-btn twitter">
                     <i class="fa-brands fa-twitter"></i>
                     Twitter
                  </button>
               </div>

               <!-- Copyright -->
               <p class="copyright">
                  © 2025 Website của bạn. All rights reserved.
               </p>
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
               <div class="wrap-icon-header flex-w flex-r-m">
                  <div class="flex-c-m stext-106 cl6 size-105 pointer trans-04 m-tb-4 js-show-search box-search">
                     <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                     <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>

                  </div>

                  <div class="header__cart-container">
                     <div
                        class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart noti-none"
                        data-notify="0" id="cart-icon-header">
                        <i class="zmdi zmdi-shopping-cart "></i>
                     </div>

                     <div class="header__cart-notify" style="width:300px;">
                        <div class="empty__cart" style="display:block;">
                           <img src="./assets/images/emptycart.png" alt="" class="header__cart-img-nocart" />
                           <p class="header__cart-msg">No products yet</p>
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
            <a href="index.html"><img src="./assets/images/icons/logo-01.png" alt="IMG-LOGO" /></a>
         </div>

         <!-- Icon header -->
         <!-- Change for cart -->
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

                  <a href="#" class="flex-c-m p-lr-10 trans-04"> EN </a>

                  <a href="#" class="flex-c-m p-lr-10 trans-04"> USD </a>
               </div>
            </li>
         </ul>

         <ul class="main-menu-m">
            <li>
               <a href="index.html">Home</a>

               <span class="arrow-main-menu-m">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
               </span>
            </li>

            <li>
               <a href="product.html">Shop</a>
            </li>

            <li>
               <a href="shoppingCart.html" class="label1 rs1" data-label1="hot">Features</a>
            </li>


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
   </header>
   `;


   // Logic for cart 
   // Helper to format price as "1.000.000đ"
      function formatPrice(price) {
         return price.toLocaleString('vi-VN') + 'đ';
      }

      // Update cart icon notify badge
      function updateCartNotify() {
         const cartIcon = document.getElementById('cart-icon-header');
         let items = [];
         try {
            items = JSON.parse(localStorage.getItem('items')) || [];
         } catch (e) {
            items = [];
         }
         cartIcon && cartIcon.setAttribute('data-notify', items.length);
      }

      // Get cart quantities from localStorage
      function getCartQuantities() {
         let cartQty = {};
         try {
            cartQty = JSON.parse(localStorage.getItem('cartQuantities')) || {};
         } catch (e) {
            cartQty = {};
         }
         return cartQty;
      }

      // Set cart quantities to localStorage
      function setCartQuantities(cartQty) {
         localStorage.setItem('cartQuantities', JSON.stringify(cartQty));
      }

      // Render cart items from localStorage
      function renderCartItems() {
         const cartList = document.createElement('ul');
         cartList.className = 'header__cart-list';

         let items = [];
         try {
            items = JSON.parse(localStorage.getItem('items')) || [];
         } catch (e) {
            items = [];
         }
         let cartQty = getCartQuantities();

         if (items.length === 0) {
            cartList.innerHTML = `<li class="header__cart-item"><div class="header__cart-msg">No products yet</div></li>`;
         } else {
            items.forEach((item, idx) => {
               // Always use quantity from cartQuantities, default 0
               const quantity = cartQty[item.id] ?? 0;
               const totalPrice = item.sellingPrice * quantity;
               cartList.innerHTML += `
                              <li class="header__cart-item" data-idx="${idx}">
                               <img src="${item.primaryImageURL || './assets/images/emptycart.png'}" alt="" class="header__cart-img" />
                               <div class="header__cart-item-content">
                                 <div class="header__cart-item-des">
                                  <span class="header__cart-des-product">${item.name}</span>
                                  <div class="header__cart-item-price-quantity">
                                    <div class="header__cart-item-price">${formatPrice(totalPrice)}</div>
                                    <div class="header__cart-item-quantity-wrapper">
                                     <button class="btn-minus">-</button>
                                     <div class="header__cart-item-quantity">${quantity}</div>
                                     <button class="btn-plus">+</button>
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
         return cartList;
      }

      // Main render
      function renderCart() {
         const cartNotify = document.querySelector('.header__cart-notify');
         const emptyCart = cartNotify.querySelector('.empty__cart');
         let items = [];
         try {
            items = JSON.parse(localStorage.getItem('items')) || [];
         } catch (e) {
            items = [];
         }

         // Show/hide empty cart and set width
         if (items.length === 0) {
            // Show empty cart
            if (emptyCart) emptyCart.style.display = 'block';
            cartNotify.style.width = '300px';
            // Ensure only empty__cart is shown
            cartNotify.innerHTML = emptyCart ? emptyCart.outerHTML : `
                            <div class="empty__cart" style="display:block;">
                              <img src="./assets/images/emptycart.png" alt="" class="header__cart-img-nocart" />
                              <p class="header__cart-msg">Chưa có sản phẩm</p>
                            </div>
                           `;
         } else {
            // Hide empty cart
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

            // Cart buttons
            const btnsDiv = document.createElement('div');
            btnsDiv.className = 'header__cart-list';
            btnsDiv.innerHTML = `
                            <div class="header__cart-item-btn">
                              <a href="#" class="btn btn--primary cart-btn">Check out</a>
                            </div>
                            <div class="header__cart-item-btn">
                              <a href="loginShoppingCart.html" class="btn btn--primary cart-btn">View Cart</a>
                            </div>
                           `;
            container.appendChild(btnsDiv);

            cartNotify.appendChild(container);

            // Add event listeners for quantity and delete
            cartList.querySelectorAll('.header__cart-item').forEach((li, idx) => {
               const minusBtn = li.querySelector('.btn-minus');
               const plusBtn = li.querySelector('.btn-plus');
               const qtyDiv = li.querySelector('.header__cart-item-quantity');
               const priceDiv = li.querySelector('.header__cart-item-price');
               const delBtn = li.querySelector('.header__cart-item-delete');

               let items = [];
               try {
                  items = JSON.parse(localStorage.getItem('items')) || [];
               } catch (e) {
                  items = [];
               }
               let cartQty = getCartQuantities();
               const item = items[idx];
               const id = item.id;

               minusBtn && minusBtn.addEventListener('click', () => {
                  let cartQty = getCartQuantities();
                  if ((cartQty[id] ?? 0) > 0) {
                     cartQty[id] = (cartQty[id] ?? 0) - 1;
                     setCartQuantities(cartQty);
                     renderCart();
                     updateCartNotify();
                  }
               });

               plusBtn && plusBtn.addEventListener('click', () => {
                  let cartQty = getCartQuantities();
                  cartQty[id] = (cartQty[id] ?? 0) + 1;
                  setCartQuantities(cartQty);
                  renderCart();
                  updateCartNotify();
               });

               delBtn && delBtn.addEventListener('click', () => {
                  let items = JSON.parse(localStorage.getItem('items')) || [];
                  let cartQty = getCartQuantities();
                  items.splice(idx, 1);
                  // Remove quantity for this id
                  delete cartQty[id];
                  localStorage.setItem('items', JSON.stringify(items));
                  setCartQuantities(cartQty);
                  renderCart();
                  updateCartNotify();
               });
            });
         }
         updateCartNotify();
      }

      // Initial render
      renderCart();

      // Listen for custom event to update cart without reload
      window.addEventListener('cart-updated', function () {
         renderCart();
         updateCartNotify();
      });

      // Patch add-to-cart buttons to update cart immediately
      document.addEventListener('DOMContentLoaded', function () {
         // For dynamically loaded products
         const productList = document.getElementById('product-list');
         function patchAddToCartButtons() {
            productList.querySelectorAll('.btn-addcart').forEach(btn => {
               if (!btn.dataset.cartListener) {
                  btn.dataset.cartListener = '1';
                  btn.addEventListener('click', function (e) {
                     e.preventDefault();
                     // Get product index from button
                     const idx = this.getAttribute('data-product-index');
                     // Get products from last fetch
                     let products = [];
                     try {
                        products = window._lastFetchedProducts || [];
                     } catch (e) { }
                     // Fallback: try to get from DOM
                     if (!products.length && window.productsFromDOM) {
                        products = window.productsFromDOM;
                     }
                     const product = products[idx];
                     if (!product) return;
                     let items = [];
                     try {
                        items = JSON.parse(localStorage.getItem('items')) || [];
                     } catch (e) {
                        items = [];
                     }
                     let cartQty = getCartQuantities();
                     // Check if product already exists (by id), if yes, increase quantity, else add
                     const existIdx = items.findIndex(p => p.id === product.id);
                     if (existIdx !== -1) {
                        // Increase quantity in cartQuantities
                        cartQty[product.id] = (cartQty[product.id] ?? 0) + 1;
                     } else {
                        items.push(product);
                        // Only set to 0 if not already present
                        if (cartQty[product.id] === undefined) {
                           cartQty[product.id] = 0;
                        }
                        // When add to cart, increase to 1
                        cartQty[product.id] += 1;
                     }
                     localStorage.setItem('items', JSON.stringify(items));
                     setCartQuantities(cartQty);
                     // Always update cart after add
                     setTimeout(() => {
                        window.dispatchEvent(new Event('cart-updated'));
                     }, 10);
                  });
               }
            });
         }
         // Observe product list for changes
         if (productList) {
            const observer = new MutationObserver(() => {
               patchAddToCartButtons();
            });
            observer.observe(productList, { childList: true, subtree: true });
         }
         // Patch already rendered buttons
         patchAddToCartButtons();
      });

      // Save products to window for access in add-to-cart
      (function () {
         const origFetch = window.fetch;
         window.fetch = function () {
            return origFetch.apply(this, arguments).then(res => {
               // Only patch for product API
               if (arguments[0] && typeof arguments[0] === 'string' && arguments[0].includes('/api/v1/product')) {
                  res.clone().json().then(data => {
                     window._lastFetchedProducts = data.content || [];
                  }).catch(() => { });
               }
               return res;
            });
         };
      })();




      // Toast Message
      function showToast(message, isError = false) {
         const toast = document.getElementById("toast");
         toast.className = "show";
         toast.textContent = message;

         if (isError) {
            toast.classList.add("error");
         } else {
            toast.classList.remove("error");
         }

         // Hiện toast trong 2s
         setTimeout(() => {
            toast.className = toast.className.replace("show", "");
         }, 2000);
      }


      const loginForm = this.querySelector('[data-content="login"] .form');
      if (loginForm) {
         loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = loginForm.querySelectorAll(".form-input")[0].value;
            const password = loginForm.querySelectorAll(".form-input")[1].value;

            console.log("Đang gửi request đăng nhập...");
            console.log("Username:", username);
            console.log("Password:", password);

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
                  console.log("Phản hồi từ server:", data);

                  if (data.statusCode === 200) {
                     // Lưu token và thông tin user vào localStorage
                     localStorage.setItem("token", data.data.token);
                     localStorage.setItem("userId", data.data.userId);
                     localStorage.setItem("role", data.data.role);

                     console.log("Đăng nhập thành công! Token đã được lưu.");
                     // Chuyển hướng sau khi đăng nhập thành công

                     localStorage.setItem("loginSuccess", "true");
                     window.location.href = "login.html";
                  } else {
                     alert("Đăng nhập không thành công. Vui lòng kiểm tra lại.");
                  }
               })
               .catch((error) => {
                  console.error("Lỗi khi đăng nhập:", error);
                  showToast("Đăng nhập thất bại. Vui lòng thử lại.", true);
               });
         });
      }
   }
}
customElements.define("header-main", AppHeader);




