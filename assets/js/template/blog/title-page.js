class AppBlogTitlePage extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <section
         class="bg-img1 txt-center p-lr-15 p-tb-92"
         style="background-image: url('./assets/images/bg-02.jpg')"
      >
         <h2 class="ltext-105 cl0 txt-center">Blog</h2>
      </section>
          `;
   }
}
customElements.define("blog-title-page", AppBlogTitlePage);
