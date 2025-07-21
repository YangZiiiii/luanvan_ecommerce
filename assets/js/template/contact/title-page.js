
class AppContactTitlePage extends HTMLElement {
   connectedCallback() {
   this.innerHTML = `
   <section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image: url('./assets/images/bg-01.jpg')">
      <h2 class="ltext-105 cl0 txt-center">Contact</h2>
   </section>
   `;
   }
   }
   customElements.define("contact-title-page", AppContactTitlePage);
