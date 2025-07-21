class AppHomeProduct extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
     <section class="bg0">
      <div class="container p-t-90">
         <div class="p-b-10">
            <h3 class="ltext-103 cl5">Sản phẩm tiêu biểu </h3>
         </div>

         <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                  Tất cả
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".nu" id="btn-filter-women">
                  Women
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".nam" id="btn-filter-men">
                  Men
               </button>

            </div>

            <div class="flex-w flex-c-m m-tb-10">
               <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                  <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                  <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                  Bộ lọc
               </div>


            </div>


            <!-- Filter -->
            <div class="dis-none panel-filter w-full p-t-10">
               <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                  <div class="filter-col2 p-r-15 p-b-27">
                   <div class="mtext-102 cl2 p-b-15">Price</div>

                   <ul>
                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04 filter-link-active" data-price="ALL">
                          All
                        </a>
                     </li>

                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04" data-price="0-100000">
                         0 - 100.000
                        </a>
                     </li>

                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04" data-price="100000-200000">
                          100.000 - 200.000
                        </a>
                     </li>

                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04" data-price="200000-300000">
                          200.000 - 300.000
                        </a>
                     </li>

                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04" data-price="300000-400000">
                          300.000 - 400.000
                        </a>
                     </li>

                     <li class="p-b-6">
                        <a href="#" class="filter-link stext-106 trans-04" data-price="400000+">
                          400.000+
                        </a>
                     </li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>

          <div class="row isotope-grid" id="product-list"
            style="min-height: calc(4 * 480px + 150px); visibility: hidden;">
            <!-- Products will be rendered here by JavaScript -->

          </div>

          <!-- Load more -->
          
        </div>
      </section>
   `;

      var changeServer = '160.30.192.116';
      const btnFilterWomen = document.getElementById('btn-filter-women');
      const btnFilterMen = document.getElementById('btn-filter-men');

      console.log(btnFilterWomen, btnFilterMen);



      function updateProductListMinHeight(productCount) {
         const container = document.getElementById('product-list');
         // 4 sản phẩm 1 dòng, mỗi sản phẩm cao 480px, cộng thêm 150px
         const itemsPerRow = 4;
         const rows = Math.max(1, Math.ceil(productCount / itemsPerRow));
         container.style.minHeight = `calc(${rows} * 480px + 150px)`;
      }

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

      function getFilterValue(btn) {
         const filter = btn.getAttribute('data-filter');
         if (filter === '*') return 'ALL';
         if (filter === '.nu') return 'WOMEN';
         if (filter === '.nam') return 'MEN';
         return 'ALL';
      }

      function getProductType(sku) {
         if (!sku) return '';
         sku = sku.toLowerCase();
         if (sku.includes('nu')) return 'WOMEN';
         if (sku.includes('nam')) return 'MEN';
         return '';
      }

      // Store products globally for filtering
      let allProducts = [];
      let currentTypeFilter = 'ALL';
      let currentPriceFilter = 'ALL';

      // Parse price filter value
      function parsePriceFilter(priceStr) {
         if (priceStr === 'ALL') return { min: null, max: null };
         if (priceStr.endsWith('+')) {
            const min = parseInt(priceStr.split('+')[0], 10);
            return { min, max: null };
         }
         const [min, max] = priceStr.split('-').map(v => parseInt(v, 10));
         return { min, max };
      }

      // Render products by filter
      function renderProducts(products, filterType, priceFilter) {
         const container = document.getElementById('product-list');
         function formatVND(price) {
            if (isNaN(price)) return '0đ';
            return price.toLocaleString('vi-VN') + 'đ';
         }
         function getFavouriteIds() {
            let favs = [];
            try {
               favs = JSON.parse(localStorage.getItem('favouriteProductIds')) || [];
            } catch (e) {
               favs = [];
            }
            return favs;
         }
         function setFavouriteIds(ids) {
            localStorage.setItem('favouriteProductIds', JSON.stringify(ids));
         }
         function updateFavouriteNotify() {
            const favourites = localStorage.getItem('favouriteProductIds');
            const numberOfFavourites = document.querySelector('.icon-heart-number[data-notify]');
            if (numberOfFavourites) {
               if (favourites) {
                  const favouriteIds = JSON.parse(favourites);
                  numberOfFavourites.setAttribute('data-notify', favouriteIds.length);
               } else {
                  numberOfFavourites.setAttribute('data-notify', '0');
               }
            }
         }

         // Filter products by type and price
         let filtered = products.filter(product => {
            if (product.status === 'DELETED' || product.status === 'INACTIVE') return false;
            // Type filter
            if (filterType !== 'ALL') {
               const type = getProductType(product.sku);
               if (type !== filterType) return false;
            }
            // Price filter
            if (priceFilter && priceFilter.min !== null) {
               if (product.sellingPrice < priceFilter.min) return false;
            }
            if (priceFilter && priceFilter.max !== null) {
               if (product.sellingPrice > priceFilter.max) return false;
            }
            return true;
         });

         container.innerHTML = filtered.map((product, idx) => {
            const favIds = getFavouriteIds();
            const isFav = favIds.includes(product.id);
            return `
         <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${getProductType(product.sku).toLowerCase()}">
           <div class="block2 block2-pic">
           <div class="block2-pic hov-img0">
          <a href="productDetail.html?productId=${product.id}">
                        <img loading="lazy" src="${product.primaryImageURL}"  alt="IMG-PRODUCT" />
                        <a href="productDetail.html?productId=${product.id}"
                           class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor7 hov-btn1 p-lr-15 trans-04 btn-view-detail"
                           data-product-index="${idx}">
                           Xem chi tiết
                        </a>
                     </a>
           </div>
           <div class="block2-txt flex-w flex-t p-t-14">
          <div class="block2-txt-child1 flex-col-l">
         <a href="productDetail.html?productId=${product.id}" class="stext-104 cl4 hov-cl1 trans-04 js-name-detail p-b-6">
           ${product.name}
         </a>
           <div class="price-and-cart">
          <span class="stext-106 cl10"> ${formatVND(product.sellingPrice)}</span>
          <span class="original-price">${formatVND(product.originalPrice)}</span>
           </div>
           <div>
          <span>SL:${product.quantity}</span>
          </div>
          </div>
          <div class="block2-txt-child2 flex-r p-t-3 heart-and-cart" >
         <a href="#!" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2 icon-favourite" data-product-index="${idx}" >
           <img  class="icon-heart1 dis-block trans-04" src="./assets/images/icons/icon-heart-01.png"
           alt="ICON" style="display:${isFav ? 'none' : 'flex'}" />
           <img title="Yêu thích sản phẩm" class="icon-heart2 dis-block trans-04 ab-t-l"
           src="./assets/images/icons/icon-heart-02.png" alt="ICON" style="display:${isFav ? '' : 'none'}" />
         </a>
         <a href="#" class="btn-addcart js-addcart-detail" data-product-index="${idx}"> 
           <i title="Thêm sản phẩm vào giỏ" class="fa-solid fa-cart-shopping"></i> 
         </a>
          </div>
           </div>
           </div>
         </div>
          `;
         }).join('');
         container.style.visibility = 'visible';

         btnFilterWomen.textContent = `Nữ (${filtered.filter(p => getProductType(p.sku) === "WOMEN").length})`;
         btnFilterMen.textContent = `Nam (${filtered.filter(p => getProductType(p.sku) === "MEN").length})`;

         // Cập nhật lại min-height dựa trên số sản phẩm
         console.log(`Filtered products count: ${filtered.length}`);
         updateProductListMinHeight(filtered.length);

         // Add event listeners for add-to-cart buttons
         container.querySelectorAll('.btn-addcart').forEach(btn => {
            btn.addEventListener('click', function (e) {
               e.preventDefault();
               const idx = this.getAttribute('data-product-index');
               const product = filtered[idx];
               const userId = localStorage.getItem('userId');
               if (!userId || userId === 'null' || !product || !product.id) {
                  swal("Bạn cần đăng nhập để thêm vào giỏ hàng!", "", "warning");
                  return;
               }
               fetch(`http://${changeServer}:8080/api/v1/cart/add?userId=${userId}&productId=${product.id}&quantity=1`, {
                  method: 'POST'
               })
                  .then(res => res.json())
                  .then(data => {
                     if (data && data.statusCode === 201) {
                        swal(product.name, "is added to cart !", "success");
                        fetch(`http://${changeServer}:8080/api/v1/cart?userId=${userId}`)
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
                                       total: item.unitPrice * item.quantity
                                    });
                                    cartQuantities[item.productId] = item.quantity ?? 1;
                                 });

                                 localStorage.setItem('cartLocal', JSON.stringify(cartLocal));
                                 localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));
                                 updateCartNotify();
                                 window.dispatchEvent(new Event('cart-updated'));
                              }
                           })
                           .catch(() => {
                              updateCartNotify();
                              window.dispatchEvent(new Event('cart-updated'));
                           });

                     } else {
                        swal(product.name, "Có lỗi khi thêm vào giỏ hàng!", "error");
                     }
                  })
                  .catch(() => {
                     swal(product.name, "Có lỗi khi thêm vào giỏ hàng!", "error");
                  });
            });
         });

         // Add event listeners for add-to-favourite buttons
         container.querySelectorAll('.js-addwish-b2').forEach(btn => {
            const icon1 = btn.querySelector('.icon-heart1');
            const icon2 = btn.querySelector('.icon-heart2');
            btn.addEventListener('click', function (e) {
               e.preventDefault();
               const idx = this.getAttribute('data-product-index');
               const product = filtered[idx];
               const userId = localStorage.getItem('userId');
               if (!userId || userId === 'null' || !product || !product.id) {
                  swal("Bạn cần đăng nhập để thêm vào yêu thích!", "", "warning");
                  return;
               }
               fetch(`http://${changeServer}:8080/api/v1/favourites/toggle`, {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                     userId: Number(userId),
                     productId: product.id
                  })
               })
                  .then(res => res.json())
                  .then(data => {
                     if (data && (data.statusCode === 200 || data.statusCode === 201)) {
                        let favIds = getFavouriteIds();
                        if (icon1.style.display !== 'none') {
                           icon1.style.display = 'none';
                           icon2.style.display = '';
                           if (!favIds.includes(product.id)) {
                              favIds.push(product.id);
                              setFavouriteIds(favIds);
                           }
                        } else {
                           icon1.style.display = '';
                           icon2.style.display = 'none';
                           favIds = favIds.filter(id => id !== product.id);
                           setFavouriteIds(favIds);
                        }
                        updateFavouriteNotify();
                        swal(product.name, "Đã cập nhật danh sách yêu thích!", "success");
                     } else {
                        swal(product.name, "Có lỗi khi cập nhật yêu thích!", "error");
                     }
                  })
                  .catch(() => {
                     swal(product.name, "Có lỗi khi cập nhậtyêu thích!", "error");
                  });
            });
         });

         updateFavouriteNotify();
      }

      // Fetch products and setup filter
      fetch(`http://${changeServer}:8080/api/v1/product?page=0&size=30&sortBy=createdAt&direction`)
         .then(res => res.json())
         .then(data => {
            allProducts = data.content || [];
            renderProducts(allProducts, currentTypeFilter, parsePriceFilter(currentPriceFilter));
         })
         .catch(err => {
            document.getElementById('product-list').innerHTML = '<div class="col-12">Failed to load products.</div>';
         });

      // Filter buttons event (Women/Men/All)
      document.querySelectorAll('.filter-tope-group button[data-filter]').forEach(btn => {
         btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-tope-group button').forEach(b => b.classList.remove('how-active1'));
            this.classList.add('how-active1');
            currentTypeFilter = getFilterValue(this);
            renderProducts(allProducts, currentTypeFilter, parsePriceFilter(currentPriceFilter));
         });
      });

      // Price filter event
      document.querySelectorAll('.filter-col2 .filter-link').forEach(link => {
         link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.filter-col2 .filter-link').forEach(l => l.classList.remove('filter-link-active'));
            this.classList.add('filter-link-active');
            currentPriceFilter = this.getAttribute('data-price') || 'ALL';
            renderProducts(allProducts, currentTypeFilter, parsePriceFilter(currentPriceFilter));
         });
      });
   }
}
customElements.define("home-product", AppHomeProduct);