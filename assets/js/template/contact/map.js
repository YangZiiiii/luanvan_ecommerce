class AppContactMap extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
            <div class="map">
         <div
            class="size-303"
            id="google_map"
            data-map-x="40.691446"
            data-map-y="-73.886787"
            data-pin="./assets/images/icons/pin.png"
            data-scrollwhell="0"
            data-draggable="1"
            data-zoom="11"
         ></div>
      </div>
           `;
    }
 }
 customElements.define("contact-map", AppContactMap);
 