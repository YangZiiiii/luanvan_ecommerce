class AppFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <div class="footer">
            <div class="main-content">
               <div class="row">
                  <div class="column column-special">
                     <a href="#!" class="link">
                        <img
                           src="./assets/img/logo.svg"
                           alt=""
                           class="img-logo"
                        />
                        <h2 class="name-logo">grocerymart</h2>
                     </a>
                     <p class="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, maxime et veniam eligendi rem voluptatibus.
                     </p>
                     <p class="desc">Receive product news and updates.</p>
                     <form action="" class="form" aria-placeholder="Email">
                        <input type="email" placeholder="Email address" />
                        <button class="btn btn-send">Send</button>
                     </form>
                  </div>

                  <div class="column">
                     <h3 class="title">Shop</h3>
                     <ul class="list">
                        <li class="item"><a href="">All Departments</a></li>
                        <li class="item"><a href="">Fashion Deals</a></li>
                        <li class="item">
                           <a href="">Electronics Discounts</a>
                        </li>
                        <li class="item">
                           <a href="">Home & Living Specials</a>
                        </li>
                        <li class="item"><a href="">Beauty Bargains</a></li>
                     </ul>
                  </div>
                  <div class="column">
                     <h3 class="title">Support</h3>
                     <ul class="list">
                        <li class="item"><a href="">Store locator</a></li>
                        <li class="item"><a href="">Order status</a></li>
                     </ul>
                  </div>
                  <div class="column">
                     <h3 class="title">Company</h3>
                     <ul class="list">
                        <li class="item"><a href="">Customer Service</a></li>
                        <li class="item"><a href="">Terms of Use</a></li>
                        <li class="item"><a href="">Privacy</a></li>
                        <li class="item"><a href="">Careers</a></li>
                        <li class="item"><a href="">About</a></li>
                        <li class="item"><a href="">Affiliates</a></li>
                     </ul>
                  </div>
                  <div class="column">
                     <h3 class="title">Contact</h3>
                     <ul class="list">
                        <li class="item">
                           <p>Email</p>
                           <a href="">contact@grocerymart.com</a>
                        </li>
                        <li class="item">
                           <p>Hotline</p>
                           <a href="">18008888</a>
                        </li>
                        <li class="item">
                           <p>Address</p>
                           <a href=""
                              >No. 11D, Lot A10, Nam Trung Yen urban area, Yen
                              Hoa Ward, Cau Giay District, City. Hanoi</a
                           >
                        </li>
                        <li class="item">
                           <p>Hours</p>
                           <a href="">M - F 08:00am - 06:00pm</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="row row-bottom">
                  <div class="copy">
                     © 2010 - 2025 Grocery Mart. All rights reserved.
                  </div>
                  <div class="socials">
                     <a href="" class="social-icon__fb">
                        <img src="./assets/icon/facebook.svg" alt="" />
                     </a>
                     <a href="" class="social-icon__youtube">
                        <img src="./assets/icon/youtube.svg" alt="" />
                     </a>
                     <a href="" class="social-icon__tiktok">
                        <img src="./assets/icon/tiktok.svg" alt="" />
                     </a>
                     <a href="" class="social-icon__twitter">
                        <img src="./assets/icon/twitter.svg" alt="" />
                     </a>
                     <a href="" class="social-icon__linkedin">
                        <img src="./assets/icon/linkedin.svg" alt="" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
        `;
   }
}
customElements.define("home-footer", AppFooter);
