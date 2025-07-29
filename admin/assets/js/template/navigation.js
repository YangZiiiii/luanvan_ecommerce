class NavigationApp extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <aside
               id="layout-menu"
               class="layout-menu menu-vertical menu bg-menu-theme"
               data-bg-class="bg-menu-theme"
               style="
                  touch-action: none;
                  user-select: none;
                  -webkit-user-drag: none;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
               "
            >
               <div class="app-brand demo" bis_skin_checked="1">
                  <a href="ProductList.html" class="app-brand-link">
                    
                     <span
                        class="app-brand-text demo menu-text fw-semibold ms-2"
                        >COZA STORE</span
                     >
                  </a>

                  <a
                     href="javascript:void(0);"
                     class="layout-menu-toggle menu-link text-large ms-auto"
                  >
                     <i class="menu-toggle-icon d-xl-block align-middle"></i>
                  </a>
               </div>

               <div class="menu-inner-shadow" bis_skin_checked="1"></div>

               <ul class="menu-inner py-1 ps ps--active-y">
                  <li class="menu-item" style="">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                     <i class="menu-icon tf-icons ri-shopping-bag-3-line"></i>
                        <div data-i18n="Sản phẩm" bis_skin_checked="1">
                           Sản phẩm
                        </div>
                        

                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./ProductList.html" class="menu-link">
                              <div
                                 data-i18n="Danh sách sản phẩm"
                                 bis_skin_checked="1"
                              >
                                 Danh sách sản phẩm
                              </div>
                           </a>
                        </li>

                       

                        
                     </ul>
                     
                  </li>

                  <li class="menu-item" style="">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                     <i class="menu-icon tf-icons ri-grid-line"></i>
                        <div data-i18n="Loại sản phẩm" bis_skin_checked="1">
                           Loại sản phẩm
                        </div>
                        

                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./CategoryList.html" class="menu-link">
                              <div
                                 data-i18n="Danh sách loại sản phẩm"
                                 bis_skin_checked="1"
                              >
                                 Danh sách loại sản phẩm
                              </div>
                           </a>
                        </li>
                        
                     </ul>
                     
                     
                  </li>


                  <li class="menu-item" style="">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                    		<i class="menu-icon tf-icons ri-store-line"></i>
                        <div data-i18n="Thương hiệu" bis_skin_checked="1">
                           Thương hiệu
                        </div>
                        

                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./Brand.html" class="menu-link">
                              <div
                                 data-i18n="Danh sách thương hiệu"
                                 bis_skin_checked="1"
                              >
                                 Danh sách thương hiệu
                              </div>
                           </a>
                        </li>
                        
                     </ul>
                  </li>

                  
                  <li class="menu-item" style="">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                    		<i class="menu-icon tf-icons ri-message-3-line"></i>
                        <div data-i18n="Bình luận, đánh giá" bis_skin_checked="1">
                           Bình luận, đánh giá
                        </div>
                        

                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./Comment.html" class="menu-link">
                              <div
                                 data-i18n="Danh sách bình luận, đánh giá"
                                 bis_skin_checked="1"
                              >
                                 Danh sách bình luận, đánh giá
                              </div>
                           </a>
                        </li>
                        
                     </ul>
                     
                     
                  </li>

                  

                  

                  <li class="menu-item">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                     <i style="font-size: 22px; margin-right: 8px;" class="ri-shopping-cart-2-line"></i>
                        <div data-i18n="Đơn hàng" bis_skin_checked="1">Đơn hàng</div>
                     </a>
                     <ul class="menu-sub">
                     <li class="menu-item">
                           <a href="./CustomerAll.html" class="menu-link">
                              
                              <div
                                 data-i18n="Tất cả khách hàng"
                                 bis_skin_checked="1"
                              >
                                 Tất cả khách hàng
                              </div>
                           </a>
                        </li>
                        <!-- <li class="menu-item">
                           <a href="./OrderList.html" class="menu-link">
                              <div data-i18n="Danh sách đơn hàng" bis_skin_checked="1">
                                 Danh sách đơn hàng
                              </div>
                           </a>
                        </li>
                        <li class="menu-item">
                           <a href="./OrderDetails.html" class="menu-link">
                              <div
                                 data-i18n="Chi tiết đơn hàng"
                                 bis_skin_checked="1"
                              >
                                 Chi tiết đơn hàng
                              </div>
                           </a>
                        </li> -->
                     </ul>
                  </li>

                  <!-- <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                     <i style="font-size: 22px; margin-right: 8px;" class="ri-customer-service-line"></i>
                        <div data-i18n="Customer" bis_skin_checked="1">
                           Customer
                        </div>
                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./CustomerAll.html" class="menu-link">
                              
                              <div
                                 data-i18n="All Customers"
                                 bis_skin_checked="1"
                              >
                                 All Customers
                              </div>
                           </a>
                        </li>
                     </ul>
                  </li> -->

                 <!-- <li class="menu-item">
                     <a href="./Chat.html" class="menu-link">
                        <i class="menu-icon tf-icons ri-wechat-line"></i>
                        <div data-i18n="Chat" bis_skin_checked="1">Chat</div>
                     </a>
                  </li> -->

                  <!-- e-commerce-app menu end -->
                  <!-- Academy menu start -->

                  <!-- Academy menu end -->

                  <li class="menu-item">
                     <a
                        href="javascript:void(0);"
                        class="menu-link menu-toggle waves-effect"
                     >
                        <i class="menu-icon tf-icons ri-user-line"></i>
                        <div data-i18n="Tài khoản" bis_skin_checked="1">Tài khoản</div>
                     </a>
                     <ul class="menu-sub">
                        <li class="menu-item">
                           <a href="./UserList.html" class="menu-link">
                              <div data-i18n="Danh sách" bis_skin_checked="1">
                                 List
                              </div>
                           </a>
                        </li>
                     </ul>
                  </li>

                  <!-- Components -->

                  <!-- Cards -->

                  <!-- User interface -->

                  <!-- Extended components -->

                  <!-- Icons -->

                  <!-- Forms & Tables -->

                  <!-- Forms -->

                  <!-- Tables -->

                  <!-- Charts & Maps -->

                  <!-- Misc -->
               </ul>
            </aside>
         `;

      const currentPath = window.location.pathname.split("/").pop();
      const links = this.querySelectorAll(".menu-link");

      links.forEach((link) => {
         const href = link.getAttribute("href");

         if (
            href &&
            href !== "javascript:void(0);" &&
            href.includes(currentPath)
         ) {
            // Active cho chính thẻ a
            link.classList.add("active");

            // Active cho thẻ li.menu-item chứa nó
            const menuItem = link.closest(".menu-item");
            if (menuItem) {
               menuItem.classList.add("active");
            }

            // Nếu có menu cha (menu-sub), mở cha ra
            const subMenu = link.closest(".menu-sub");
            if (subMenu) {
               const parentItem = subMenu.closest(".menu-item");
               if (parentItem) {
                  parentItem.classList.add("open", "active");
               }
            }
         }
      });
   }
}
customElements.define("navigation-main", NavigationApp);
