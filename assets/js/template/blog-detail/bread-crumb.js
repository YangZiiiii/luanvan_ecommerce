class AppBlogDetailBread extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <div class="container">
         <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <a href="index.html" class="stext-109 cl8 hov-cl1 trans-04">
               Home
               <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </a>

            <a href="blog.html" class="stext-109 cl8 hov-cl1 trans-04">
               Blog
               <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </a>

            <span class="stext-109 cl4">
               8 Inspiring Ways to Wear Dresses in the Winter
            </span>
         </div>
      </div>
         `;
   }
}
customElements.define("blog-detail-bread", AppBlogDetailBread);
