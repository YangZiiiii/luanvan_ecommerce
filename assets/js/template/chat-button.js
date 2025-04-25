class ChatButton extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
           <div class="chat-container">
         <div class="chat-box" id="chatBox">
            <div class="chat-header">
              <span class="chat-info">Chat</span>
               <span class="phone-btn" id="phoneBtn">&#9742;</span> <!-- Điện thoại -->
               <span class="close-btn" id="closeBtn">&times;</span> <!-- Nút đóng -->
            </div>
            <div class="chat-content">
               Xin chào! Mình có thể giúp gì cho bạn?
            </div>
            <div class="chat-footer">
               <input style="background: #fff; color: #000;" type="text" placeholder="Nhập tin nhắn...">
               <button>Gửi</button>
            </div>
         </div>
   
         <div class="chat-icon" id="chatIcon">
            💬
         </div>
      </div>
         `;
    }
 }
 customElements.define("chat-button", ChatButton);
 