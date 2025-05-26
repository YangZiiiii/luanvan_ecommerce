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
                        <a href="#" class="sub-menu-login-item" id="logout-btn">Đăng xuất</a>
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

               <a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0">
                  <i class="zmdi zmdi-favorite-outline"></i>
               </a>
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


     // --- BEGIN: Cart show/hide on click instead of hover ---
      document.addEventListener('DOMContentLoaded', function () {
         const cartIcon = document.getElementById('cart-icon-header');
         const cartNotify = cartIcon && cartIcon.parentElement.querySelector('.header__cart-notify');
         let cartVisible = false;

         function showCart() {
            if (cartNotify) {
               cartNotify.style.display = 'block';
               cartNotify.style.visibility = 'visible';
               cartNotify.style.opacity = '1';
               cartVisible = true;
            }
         }
         function hideCart() {
            if (cartNotify) {
               cartNotify.style.display = 'none';
               cartNotify.style.visibility = 'hidden';
               cartNotify.style.opacity = '0';
               cartVisible = false;
            }
         }
         // Toggle cart on icon click
          if (cartIcon && cartNotify) {
            cartIcon.addEventListener('click', function (e) {
               e.stopPropagation();
               const userId = localStorage.getItem('userId');
               if (userId && userId !== 'null') {
                 if (!cartVisible) { // Only fetch if opening cart
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
                              sellingPrice: item.sellingPrice,
                              originalPrice: item.originalPrice,
                              description: '',
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
                 // Không fetch, chỉ toggle cart
                 if (!cartVisible) {
                   showCart();
                 } else {
                   hideCart();
                 }
               }
            });
            // Hide cart when clicking outside
            document.addEventListener('click', function (e) {
               if (cartVisible && !cartNotify.contains(e.target) && e.target !== cartIcon) {
                 hideCart();
               }
            });
            // Prevent click inside cart from closing it
            cartNotify.addEventListener('click', function (e) {
               e.stopPropagation();
            });
          }
         // Hide cart on ESC
         document.addEventListener('keydown', function (e) {
            if (cartVisible && e.key === 'Escape') {
               hideCart();
            }
         });
         // Hide cart on page navigation
         window.addEventListener('hashchange', hideCart);
      });
      // --- END: Cart show/hide on click instead of hover ---

      // Logic for cart 
      // Helper to format price as "1.000.000đ"
      function formatPrice(price) {
         return price.toLocaleString('vi-VN') + 'đ';
      }

      // Update cart icon notify badge
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
         let cartLocal = [];
         try {
            cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
         } catch (e) {
            cartLocal = [];
         }

         // Show/hide empty cart and set width
         if (cartLocal.length === 0) {
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

            // Add event listeners for quantity and delete
            cartList.querySelectorAll('.header__cart-item').forEach((li, idx) => {
               const minusBtn = li.querySelector('.btn-minus');
               const plusBtn = li.querySelector('.btn-plus');
               const qtyDiv = li.querySelector('.header__cart-item-quantity');
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

               // --- BEGIN: btn-minus ---
               minusBtn && minusBtn.addEventListener('click', () => {
                  let cartQty = getCartQuantities();
                  if (!userId || userId === 'null') {
                     // Xử lý local như cũ
                     if ((cartQty[id] ?? 0) > 0) {
                        cartQty[id] = (cartQty[id] ?? 0) - 1;
                        setCartQuantities(cartQty);
                        renderCart();
                        updateCartNotify();
                     }
                  } else {
                     // Gọi API update khi có userId
                     let newQuantity = (cartQty[id] ?? 0) - 1;
                     if (newQuantity < 0) newQuantity = 0;
                     fetch(`http://localhost:8080/api/v1/cart/update?userId=${userId}&productId=${id}&newQuantity=${newQuantity}`, {
                        method: 'PUT'
                     })
                        .then(res => res.json())
                        .then(data => {
                           cartQty[id] = newQuantity;
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           cartQty[id] = newQuantity;
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
               // --- END: btn-minus ---

               // --- BEGIN: btn-plus ---
               plusBtn && plusBtn.addEventListener('click', () => {
                  let cartQty = getCartQuantities();
                  if (!userId || userId === 'null') {
                     // Xử lý local như cũ
                     cartQty[id] = (cartQty[id] ?? 0) + 1;
                     setCartQuantities(cartQty);
                     renderCart();
                     updateCartNotify();
                  } else {
                     // Gọi API update khi có userId
                     let newQuantity = (cartQty[id] ?? 0) + 1;
                     fetch(`http://localhost:8080/api/v1/cart/update?userId=${userId}&productId=${id}&newQuantity=${newQuantity}`, {
                        method: 'PUT'
                     })
                        .then(res => res.json())
                        .then(data => {
                           cartQty[id] = newQuantity;
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           cartQty[id] = newQuantity;
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
               // --- END: btn-plus ---

               // --- BEGIN: Xóa item trong cart, xử lý theo userId ---
               delBtn && delBtn.addEventListener('click', () => {
                  const userId = localStorage.getItem('userId');
                  if (!userId || userId === 'null') {
                     // Xóa local như cũ
                     let cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     let cartQty = getCartQuantities();
                     cartLocal.splice(idx, 1);
                     delete cartQty[id];
                     localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                     setCartQuantities(cartQty);
                     renderCart();
                     updateCartNotify();
                  } else {
                     // Gọi API DELETE
                     let cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     let cartQty = getCartQuantities();
                     // Chuẩn bị body với toàn bộ items còn lại (trừ item bị xóa)
                     const items = cartLocal
                        .filter((p, i) => i !== idx)
                        .map(p => ({
                           productId: p.id,
                           quantity: cartQty[p.id] ?? 1
                        }));
                     // Nếu không còn item nào thì gửi mảng rỗng
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
                           // Xóa local
                           cartLocal.splice(idx, 1);
                           delete cartQty[id];
                           localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           // Nếu lỗi vẫn xóa local
                           cartLocal.splice(idx, 1);
                           delete cartQty[id];
                           localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                           setCartQuantities(cartQty);
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
               // --- END: Xóa item trong cart, xử lý theo userId ---
            });

            // --- BEGIN: Delete All Cart Items ---
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
                     // Xóa toàn bộ localStorage cart
                     localStorage.removeItem('cartLocal');
                     localStorage.removeItem('cartQuantities');
                     renderCart();
                     updateCartNotify();
                  } else {
                     // Chuẩn bị body với toàn bộ items hiện tại
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
                           // Xóa local
                           localStorage.removeItem('cartLocal');
                           localStorage.removeItem('cartQuantities');
                           renderCart();
                           updateCartNotify();
                        })
                        .catch(() => {
                           // Nếu lỗi vẫn xóa local
                           localStorage.removeItem('cartLocal');
                           localStorage.removeItem('cartQuantities');
                           renderCart();
                           updateCartNotify();
                        });
                  }
               });
            }
            // --- END: Delete All Cart Items ---
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
            if(!productList) return;
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
                     let cartLocal = [];
                     try {
                        cartLocal = JSON.parse(localStorage.getItem('cartLocal')) || [];
                     } catch (e) {
                        cartLocal = [];
                     }
                     let cartQty = getCartQuantities();
                     // Check if product already exists (by id), if yes, increase quantity by 1, else add with quantity 1
                     const existIdx = cartLocal.findIndex(p => p.id === product.id);
                     if (existIdx !== -1) {
                        // Nếu đã tồn tại thì chỉ tăng lên 1
                        cartQty[product.id] = (cartQty[product.id] ?? 1) + 1;
                     } else {
                        // Nếu chưa có thì thêm vào cartLocal và set quantity là 1
                        cartLocal.push(product);
                        cartQty[product.id] = 1;
                     }
                     localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
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
      // Nếu có logic đăng nhập thành công thì gọi lại toggleLoginMenu()

      // Đăng xuất
      document.addEventListener('DOMContentLoaded', function () {
         var logoutBtn = document.getElementById('logout-btn');
         if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
               e.preventDefault();
               // Check if token exists
               var token = localStorage.getItem('token');
               if (token && token !== 'null') {
                  // Xóa token và các thông tin liên quan
                  localStorage.removeItem('token');
                  localStorage.removeItem('userId');
                  localStorage.removeItem('role');
                  localStorage.removeItem('loginSuccess');
                  // Hiện toast trước khi reload
                  showToast("Đăng xuất thành công!");
                  setTimeout(function () {
                     // Reload về đúng trang gốc, không có dấu ?
                     window.location.href = window.location.origin + window.location.pathname;
                  }, 200);
               }
            });
         }

         // Đăng nhập
         var loginForm = document.getElementById('login-form');
         if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
               e.preventDefault();

               // Xóa toast lỗi cũ trong modal nếu có
               showLoginToast(""); // Ẩn đi trước

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
                     if (data && data.data && data.data.token) {
                        // Lưu token và thông tin user vào localStorage
                        localStorage.setItem("token", data.data.token);
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
                           // Enable scroll on body and html after modal closes
                           document.body.style.overflow = '';
                           document.documentElement.style.overflow = '';
                        }, 50); // Đóng modal sớm, toast vẫn còn hiển thị
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




