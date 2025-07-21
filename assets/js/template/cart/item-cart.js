class AppCartItem extends HTMLElement {
   connectedCallback() {
   this.innerHTML = `
   <form class="bg0 p-t-75 p-b-85">
      <div class="container">
         <div class="row">
            <div class="col-lg-12  m-lr-auto m-b-50">
               <div class="m-l-25 m-r--38 m-lr-0-xl">
                  <div class="wrap-table-shopping-cart">
                     <table class="table-shopping-cart">
                        <tr class="table_head">
                           <th class="column-1">Product</th>
                           <th class="column-2"></th>
                           <th class="column-3">Price</th>
                           <th class="column-4">Quantity</th>
                           <th class="column-5">Total</th>
                           <th class="column-3" style="text-align: center;">Tool</th>
                        </tr>

                        <tr class="table_row">
                           <td class="column-1">
                              <div class="how-itemcart1">
                                 <img src="./assets/images/item-cart-04.jpg" alt="IMG" />
                              </div>
                           </td>
                           <td class="column-2">Fresh Strawberries</td>
                           <td class="column-3">$ 36.00</td>
                           <td class="column-4">
                              <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                 <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-minus"></i>
                                 </div>

                                 <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1"
                                    value="1" />

                                 <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-plus"></i>
                                 </div>
                              </div>
                           </td>
                           <td class="column-5">$ 36.00</td>
                           <td class="column-3 btn-delete-item">Delete</td>
                           <style>
                              .btn-delete-item {
                                 text-align: center;
                              }

                              .btn-delete-item:hover {
                                 color: #ed340f;
                                 cursor: pointer;
                              }
                           </style>
                        </tr>

                        <tr class="table_row">
                           <td class="column-1">
                              <div class="how-itemcart1">
                                 <img src="./assets/images/item-cart-05.jpg" alt="IMG" />
                              </div>
                           </td>
                           <td class="column-2">Lightweight Jacket</td>
                           <td class="column-3">$ 16.00</td>
                           <td class="column-4">
                              <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                 <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-minus"></i>
                                 </div>

                                 <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product2"
                                    value="1" />

                                 <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-plus"></i>
                                 </div>
                              </div>
                           </td>
                           <td class="column-5">$ 16.00</td>
                           <td class="column-3 btn-delete-item">Delete</td>
                           <style>
                              .btn-delete-item {
                                 text-align: center;
                              }

                              .btn-delete-item:hover {
                                 color: #ed340f;
                                 cursor: pointer;
                              }
                           </style>
                        </tr>
                     </table>
                  </div>

                  <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                     <div class="flex-w flex-m m-r-20 m-tb-5">
                        <input class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon"
                           placeholder="Coupon Code" />

                        <div class="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                           Apply coupon
                        </div>
                     </div>

                     <div class="total__price">
                        <div
                           class="flex-c-m stext-101 cl2 size-119   p-lr-15 trans-04 m-tb-10">
                          Total: $ <span>45.00</span>
                        </div>

                        <div
                           class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                           Update Cart
                        </div>
                         <div
                           class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                           Pay Order
                        </div>
                     </div>
                     <style>
                        .total__price{
                           display: flex;
                           gap: 10px;
                        }

                        .total__price span{
                           margin-left: 4px;
                        }
                     </style>
                  </div>
               </div>
            </div>


         </div>
      </div>
   </form>
   `;
   }
   }
   customElements.define("cart-item", AppCartItem);