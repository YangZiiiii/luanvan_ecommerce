class AppFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<footer class="bg3 p-t-75 p-b-32">
	   <div class="container">
		  <div class="row">
			 <div class="col-sm-6 col-lg-3 p-b-50">
				<h4 class="stext-301 cl0 p-b-30">
				   Danh mục
				</h4>
 
				<ul>
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Nữ
					  </a>
				   </li>
 
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Nam
					  </a>
				   </li>
 
				  
				</ul>
			 </div>
 
			 <div class="col-sm-6 col-lg-3 p-b-50">
				<h4 class="stext-301 cl0 p-b-30">
				   Hỗ trợ
				</h4>
 
				<ul>
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Theo dõi đơn hàng
					  </a>
				   </li>
 
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Đổi trả
					  </a>
				   </li>
 
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Vận chuyển
					  </a>
				   </li>
 
				   <li class="p-b-10">
					  <a href="#!" class="stext-107 cl7 hov-cl1 trans-04">
						 Các câu hỏi thường gặp
					  </a>
				   </li>
				</ul>
			 </div>
 
			 <div class="col-sm-6 col-lg-3 p-b-50">
				<h4 class="stext-301 cl0 p-b-30">
				   Liên hệ
				</h4>
 
				<p class="stext-107 cl7 size-201">
				  Nếu bạn còn bất kỳ câu hỏi nào, hãy cho chúng tôi biết: Gặp chúng tôi tại 364/6/30 ấp 4 xã Phước Vĩnh An, huyện Củ Chi, TP. Hồ Chí Minh hoặc gọi cho chúng tôi theo số (+84) 96 716 6879
				</p>
 
				<div class="p-t-27">
				   <a href="#!" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
					 <i class="fa-brands fa-facebook-f"></i>
				   </a>
 
				   <a href="#!" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
					  <i class="fa-brands fa-instagram"></i>
				   </a>
 
				   <a href="#!" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
					  <i class="fa-brands fa-pinterest-p"></i>
				   </a>
				</div>
			 </div>
 
			 <div class="col-sm-6 col-lg-3 p-b-50">
				<h4 class="stext-301 cl0 p-b-30">
				   Đăng ký nhận tin
				</h4>
 
				<form>
				   <div class="wrap-input1 w-full p-b-4">
					  <input class="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
						 placeholder="email@example.com">
					  <div class="focus-input1 trans-04"></div>
				   </div>
 
				   <div class="p-t-18">
					  <button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04" onclick="event.preventDefault();">
						 Đăng ký
					  </button>
				   </div>
				</form>
			 </div>
		  </div>
 
		  
	   </div>
	</footer>
	`;
	}
}
customElements.define("footer-main", AppFooter);