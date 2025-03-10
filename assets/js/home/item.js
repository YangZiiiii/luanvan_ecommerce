export class HomeItem extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <div class="item">
                     <div class="detail">
                        <a href="#!"
                           ><img
                              src="./assets/img/browse-1.jpg"
                              alt=""
                              class="thumb-item"
                        /></a>
                        <a href="#!" class="click-like"
                           ><img
                              src="./assets/icon/heart-red.svg"
                              alt=""
                              class="icon-like"
                        /></a>
                        <a href=""
                           ><h3 class="name-detail">
                              Coffee Beans - Espresso Arabica and Robusta Beans
                           </h3></a
                        >
                        <p class="label-detail">Lavazza</p>
                        <div class="buy-rating">
                           <div class="price">$47.00</div>
                           <div class="rating">
                              <img
                                 src="./assets/icon/star.svg"
                                 alt=""
                                 class="star"
                              />
                              <div class="rate">4.3</div>
                           </div>
                        </div>
                     </div>
                  </div>
        `;
   }
}
customElements.define("home-item", HomeItem);
