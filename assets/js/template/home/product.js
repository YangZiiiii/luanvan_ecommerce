class AppHomeProduct extends HTMLElement {
   connectedCallback() {
   this.innerHTML = `
     <section class="bg0">
      <div class="container">
         <div class="p-b-10 p-t-90">
            <h3 class="ltext-103 cl5">Product Overview</h3>
         </div>

         <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                  All Products
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                  Women
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                  Men
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                  Bag
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                  Shoes
               </button>

               <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                  Watches
               </button>
            </div>

            <div class="flex-w flex-c-m m-tb-10">
               <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                  <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                  <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                  Filter
               </div>


            </div>


            <!-- Filter -->
            <div class="dis-none panel-filter w-full p-t-10">
               <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                  <div class="filter-col1 p-r-15 p-b-27">
                     <div class="mtext-102 cl2 p-b-15">Sort By</div>

                     <ul>
                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              Default
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              Popularity
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              Average rating
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                              Newness
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              Price: Low to High
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              Price: High to Low
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div class="filter-col2 p-r-15 p-b-27">
                     <div class="mtext-102 cl2 p-b-15">Price</div>

                     <ul>
                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                              All
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              $0.00 - $50.00
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              $50.00 - $100.00
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              $100.00 - $150.00
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              $150.00 - $200.00
                           </a>
                        </li>

                        <li class="p-b-6">
                           <a href="#" class="filter-link stext-106 trans-04">
                              $200.00+
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div class="filter-col3 p-r-15 p-b-27">
                     <div class="mtext-102 cl2 p-b-15">Color</div>

                     <ul>
                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #222">
                              <i class="zmdi zmdi-circle"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04">
                              Black
                           </a>
                        </li>

                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #4272d7">
                              <i class="zmdi zmdi-circle"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04 filter-link-active">
                              Blue
                           </a>
                        </li>

                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #b3b3b3">
                              <i class="zmdi zmdi-circle"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04">
                              Grey
                           </a>
                        </li>

                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #00ad5f">
                              <i class="zmdi zmdi-circle"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04">
                              Green
                           </a>
                        </li>

                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #fa4251">
                              <i class="zmdi zmdi-circle"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04">
                              Red
                           </a>
                        </li>

                        <li class="p-b-6">
                           <span class="fs-15 lh-12 m-r-6" style="color: #aaa">
                              <i class="zmdi zmdi-circle-o"></i>
                           </span>

                           <a href="#" class="filter-link stext-106 trans-04">
                              White
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div class="filter-col4 p-b-27">
                     <div class="mtext-102 cl2 p-b-15">Tags</div>

                     <div class="flex-w p-t-4 m-r--5">
                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                           Fashion
                        </a>

                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                           Lifestyle
                        </a>

                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                           Denim
                        </a>

                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                           Streetstyle
                        </a>

                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                           Crafts
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="row isotope-grid" id="product-list" style="min-height: calc(2 * 469px + 40px); visibility: hidden;">
            <!-- Products will be rendered here by JavaScript -->



         </div>

         <!-- Load more -->
         <div class="flex-c-m flex-w w-full p-t-45 m-b-40">
            <a href="product.html" class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
               Load More
            </a>
         </div>
      </div>
   </section>
   `;


   
    fetch('http://localhost:8080/api/v1/product?page=0&size=10&sortBy=createdAt&direction')
         .then(res => res.json())
         .then(data => {
            const products = data.content || [];
            const container = document.getElementById('product-list');

            // Lấy danh sách yêu thích từ localStorage (dạng mảng productId)
            function getFavouriteIds() {
               let favs = [];
               try {
                  favs = JSON.parse(localStorage.getItem('favouriteProductIds')) || [];
               } catch (e) {
                  favs = [];
               }
               return favs;
            }
            // Lưu danh sách yêu thích vào localStorage
            function setFavouriteIds(ids) {
               localStorage.setItem('favouriteProductIds', JSON.stringify(ids));
            }

            // Hàm cập nhật số lượng yêu thích trên icon
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

            // Hàm format giá tiền kiểu "1.000.000đ"
            function formatVND(price) {
               if (isNaN(price)) return '0đ';
               return price.toLocaleString('vi-VN') + 'đ';
            }

            // Render sản phẩm
            container.innerHTML = products.map((product, idx) => {
               // Kiểm tra trạng thái yêu thích
               const favIds = getFavouriteIds();
               const isFav = favIds.includes(product.id);
               return `
                 <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                   <div class="block2 block2-pic">
                      <div class="block2-pic hov-img0">
                        <img src="${product.primaryImageURL}" alt="IMG-PRODUCT" />
                        <a href="productDetail.html?productId=${product.id}"
                          class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor7 hov-btn1 p-lr-15 trans-04 btn-view-detail"
                          data-product-index="${idx}">
                          View Detail
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
            container.style.visibility = 'visible'; // Hiển thị sau khi render xong

            // Add event listeners for add-to-cart buttons
            container.querySelectorAll('.btn-addcart').forEach(btn => {
               btn.addEventListener('click', function (e) {
                 e.preventDefault();
                 const idx = this.getAttribute('data-product-index');
                 const product = products[idx];
                 const userId = localStorage.getItem('userId');
                 // Prevent add to cart if not logged in
                 if (!userId || userId === 'null') {
                   swal("Bạn cần đăng nhập để thêm vào giỏ hàng!", "", "warning");
                   return;
                 }
                 // Gọi API thêm vào cart cho user đã đăng nhập
                 fetch(`http://localhost:8080/api/v1/cart/add?userId=${userId}&productId=${product.id}&quantity=1`, {
                   method: 'POST'
                 })
                   .then(res => res.json())
                   .then(data => {
                     if (data && data.statusCode === 201) {
                        window.dispatchEvent(new Event('cart-updated'));
                        // Hiển thị swal khi thêm vào giỏ hàng thành công
                        swal(product.name, "is added to cart !", "success");
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
                  const product = products[idx];
                  const userId = localStorage.getItem('userId');
                  if (!userId || userId === 'null' || !product || !product.id) {
                     swal("Bạn cần đăng nhập để thêm vào yêu thích!", "", "warning");
                     return;
                  }
                  fetch('http://localhost:8080/api/v1/favourites/toggle', {
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
                           // Toggle heart icon
                           let favIds = getFavouriteIds();
                           if (icon1.style.display !== 'none') {
                              icon1.style.display = 'none';
                              icon2.style.display = '';
                              // Thêm vào danh sách yêu thích
                              if (!favIds.includes(product.id)) {
                                 favIds.push(product.id);
                                 setFavouriteIds(favIds);
                              }
                           } else {
                              icon1.style.display = '';
                              icon2.style.display = 'none';
                              // Xóa khỏi danh sách yêu thích
                              favIds = favIds.filter(id => id !== product.id);
                              setFavouriteIds(favIds);
                           }
                           // Cập nhật số lượng yêu thích trên icon mỗi lần click
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

            // Gọi cập nhật số lượng yêu thích khi load xong
            updateFavouriteNotify();
         })
         .catch(err => {
            document.getElementById('product-list').innerHTML = '<div class="col-12">Failed to load products.</div>';
         });
   }
   }
   customElements.define("home-product", AppHomeProduct);