
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
            // Lấy số lượng sản phẩm
            let quantity = cartQty[item.id] ?? 0;
            let price = 0;
            // Nếu có userId thì lấy unitPrice, nếu không thì lấy unitPrice hoặc sellingPrice (ưu tiên unitPrice)
            const userId = localStorage.getItem('userId');
            // --- SỬA ĐOẠN NÀY: Khi đăng xuất vẫn phải hiển thị đúng giá * số lượng ---
            if (!userId || userId === 'null') {
                // Nếu có unitPrice thì dùng, không thì dùng sellingPrice
                if (typeof item.unitPrice !== 'undefined') {
                    price = (item.unitPrice ?? 0) * quantity;
                } else if (typeof item.sellingPrice !== 'undefined') {
                    price = (item.sellingPrice ?? 0) * quantity;
                } else if (typeof item.total !== 'undefined' && quantity > 0) {
                    // Nếu có total thì chia ra đơn giá
                    price = item.total; // total đã là tổng tiền
                } else {
                    price = 0;
                }
            } else {
                // Đã đăng nhập thì lấy unitPrice * quantity
                price = (item.unitPrice ?? 0) * quantity;
            }
            // --- KẾT THÚC SỬA ---

            cartList.innerHTML += `
            <li class="header__cart-item" data-idx="${idx}">
            <img src="${item.primaryImageURL || './assets/images/emptycart.png'}" alt="" class="header__cart-img" />
            <div class="header__cart-item-content">
               <div class="header__cart-item-des">
               <span class="header__cart-des-product">${item.name}</span>
               <div class="header__cart-item-price-quantity">
                  <div class="header__cart-item-price">${formatPrice(price)}</div>
                  <div class="header__cart-item-quantity-wrapper">
                  <!-- <button class="btn-minus">-</button> -->
                  <input type="number" min="0" class="header__cart-item-quantity" value="${quantity}" style="width:60px;text-align:center;border: 1px solid; margin: 8px;" />
                  <button class="btn-oke" style="border: 1px solid; padding: 0 8px;">OK</button>
                  <!-- <button class="btn-plus">+</button> -->
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
            // const minusBtn = li.querySelector('.btn-minus');
            // const plusBtn = li.querySelector('.btn-plus');
            const qtyInput = li.querySelector('.header__cart-item-quantity');
            const okeBtn = li.querySelector('.btn-oke');
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

            // --- Xử lý nút OK cập nhật số lượng ---
            if (qtyInput && okeBtn) {
                okeBtn.addEventListener('click', function () {
                    let val = parseInt(qtyInput.value);
                    if (isNaN(val) || val < 0) val = 0;
                    // Nếu không đổi thì thôi
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
                });
                // Không cho nhập số âm
                qtyInput.addEventListener('input', function (e) {
                    if (this.value < 0) this.value = 0;
                });
                // Khi đổi số lượng bằng mũi tên
                qtyInput.addEventListener('change', function () {
                    let val = parseInt(this.value);
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
                });
            }
            // --- KẾT THÚC: input số lượng + OK ---

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
    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Kiểm tra có token không
            var token = localStorage.getItem('token');
            if (token && token !== 'null') {
                // Xóa token và thông tin liên quan
                localStorage.removeItem("username");
                localStorage.removeItem("firstName");
                localStorage.removeItem("lastName");
                localStorage.removeItem("phoneNumber");
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.removeItem('role');
                localStorage.removeItem('loginSuccess');
                // Hiện toast trước khi reload
                showToast("Đăng xuất thành công!");
                setTimeout(function () {
                    // Reload về đúng trang gốc
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