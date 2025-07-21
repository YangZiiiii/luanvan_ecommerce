class AppAboutContent extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
   <section class="bg0 p-t-75 p-b-120">
      <div class="container">
         <div class="row p-b-148">
            <div class="col-md-7 col-lg-8">
               <div class="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                  <h3 class=" cl2 p-b-16" style="font-weight: bold;">Về chúng tôi</h3>

                  <p class=" cl6 p-b-26">
                     Mỗi hành trình tuyệt vời đều bắt đầu từ một ý tưởng đơn giản. Với chúng tôi, đó là khát khao tạo ra những điều khác biệt – không chỉ để bán một sản phẩm, mà để lan toả cảm hứng sống tích cực và tinh thần sáng tạo đến từng người.

Từ những ngày đầu tiên, chúng tôi đã tin rằng sản phẩm không chỉ để sử dụng, mà còn để cảm nhận. Mỗi thiết kế là một lát cắt của cuộc sống – chứa đựng tâm huyết, câu chuyện và giá trị mà chúng tôi trân trọng. Chúng tôi không chạy theo sự hoàn hảo, mà theo đuổi sự chân thật – trong từng chất liệu, từng đường nét và cả trong cách chúng tôi kết nối với cộng đồng.
                  </p>

                  <p class=" cl6 p-b-26">
                     Chặng đường không hề bằng phẳng. Nhưng chính những thử thách, những va vấp đã giúp chúng tôi trưởng thành hơn từng ngày. Chúng tôi học được rằng: khi bạn làm điều gì đó bằng cả trái tim, bạn không chỉ tạo ra sản phẩm – bạn tạo ra một mối liên kết.

Chúng tôi trân trọng từng khách hàng, từng người bạn đã đồng hành cùng chúng tôi từ những bước đầu tiên. Và chúng tôi vẫn đang tiếp tục viết tiếp câu chuyện này – với nhiều điều mới mẻ, nhiều ý tưởng táo bạo và hơn hết là một niềm tin không đổi: “Giá trị thực sẽ luôn được cảm nhận.”
                  </p>

                  <p class=" cl6 p-b-26">
                  Nếu bạn còn bất kỳ câu hỏi nào, hãy cho chúng tôi biết:
                  Gặp chúng tôi tại 364/6/30 ấp 4 xã Phước Vĩnh An, huyện Củ Chi, TP. Hồ Chí Minh
                  hoặc gọi cho chúng tôi theo số (+84) 96 716 6879
                  </p>
               </div>
            </div>

            <div class="col-11 col-md-5 col-lg-4 m-lr-auto">
               <div class="how-bor1">
                  <div class="hov-img0">
                     <img src="./assets/images/about-01.jpg" alt="IMG" />
                  </div>
               </div>
            </div>
         </div>

         <div class="row">
            <div class="order-md-2 col-md-7 col-lg-8 p-b-30">
               <div class="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                  <h3 class=" cl2 p-b-16" style="font-weight: bold;">Nhiệm vụ</h3>

                  <p class=" cl6 p-b-26">
                    Chúng tôi tin rằng: thiết kế tốt không chỉ là cái đẹp bề ngoài, mà là sự tử tế trong từng chi tiết – dù là nhỏ nhất.

Sứ mệnh của chúng tôi là tạo ra những sản phẩm mang ý nghĩa – không phô trương, không rập khuôn – mà thể hiện cá tính, sự sáng tạo và sự kết nối thật sự giữa con người với con người. Mỗi sản phẩm là một tuyên ngôn: về lối sống tối giản, tinh tế nhưng không nhàm chán; về một thế giới mà trong đó, từng điều nhỏ bé đều có giá trị riêng.

Chúng tôi không ngừng học hỏi, cải tiến và đổi mới – không phải để chạy theo xu hướng, mà để lắng nghe và thấu hiểu nhu cầu thực sự của khách hàng. Chúng tôi xem sự khác biệt là điều đáng trân trọng, và sáng tạo là nền tảng để mọi điều tốt đẹp bắt đầu.
                  </p>

                  <div class="bor16 p-l-29 p-b-9 m-t-22">
                     <p class=" cl6 p-r-40 p-b-11" style="font-style: italic;">
                       "Sáng tạo là việc kết nối những điều đã tồn tại. Khi bạn hỏi một người sáng tạo rằng họ làm thế nào để nghĩ ra một ý tưởng, họ thường cảm thấy ngại — bởi họ không thực sự tạo ra nó, họ chỉ nhìn thấy nó. Và khi đã thấy rồi, mọi thứ trở nên thật hiển nhiên.”
                     </p>

                    
                  </div>
               </div>
            </div>

            <div class="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
               <div class="how-bor2">
                  <div class="hov-img0">
                     <img src="./assets/images/about-02.jpg" alt="IMG" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   `;
   }
}
customElements.define("about-content", AppAboutContent);