class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <header class="heading fixed">
         <div class="main-content">
            <div class="body">
               <!-- Logo -->
               <a href="#!" class="link">
                  <img src="./assets/img/logo.svg" alt="" class="img-logo" />
                  <h1 class="name-logo">grocerymart</h1>
               </a>
               <!-- Navigation -->
               <ul class="list">
                  <li>
                     <a href="#!">Departments</a>
                  </li>
                  <li>
                     <a href="#!">Grocery</a>
                  </li>
                  <li>
                     <a href="#!">Beauty</a>
                  </li>
               </ul>
               <!-- Action -->
               <div class="cta-group">
                  <button class="btn">Sign In</button>
                  <button class="btn">Sign Up</button>
               </div>
            </div>
         </div>
      </header>
        `;
    }
}
customElements.define("home-header", AppHeader);