function openModal(productId) {
   const overlay = document.getElementById("modalOverlay");
   const modal = overlay.querySelector(".modal");

   // Hiện modal
   overlay.classList.add("show");
   modal.style.display = "block";
   modal.style.transform = "rotateY(90deg)";
   modal.style.animation = "rotateIn 0.5s forwards";

   // Reset hiển thị modal nội dung/xác nhận
   document.getElementById("modalContent").style.display = "block";
   document.getElementById("successMessage").classList.remove("show");

   // 🔥 Gán productId vào nút Yes thông qua data attribute
   const yesButton = document.querySelector(".button-yes");
   yesButton.setAttribute("data-product-id", productId);
}

function closeModal() {
   const overlay = document.getElementById("modalOverlay");
   const modal = overlay.querySelector(".modal");

   modal.style.animation = "rotateOut 0.4s forwards";

   setTimeout(() => {
      overlay.classList.remove("show");
      modal.style.display = "none";
   }, 400);
}

async function confirmYes() {
   const yesButton = document.querySelector(".button-yes");
   const productId = yesButton.getAttribute("data-product-id");

   if (!productId) {
      alert("Không tìm thấy ID sản phẩm để xoá.");
      return;
   }

   try {
      const response = await fetch(`http://localhost:8080/api/v1/product/${productId}`, {
         method: 'DELETE'
      });

      if (response.ok) {
         // Hiện thông báo thành công
         document.getElementById("modalContent").style.display = "none";
         document.getElementById("successMessage").classList.add("show");

         // Reload sau 1.5s
         setTimeout(() => {
            window.location.reload();
         }, 1500);
      } else {
         alert("Xoá sản phẩm thất bại!");
      }
   } catch (error) {
      console.error('Lỗi khi gọi API xoá:', error);
      alert("Có lỗi xảy ra.");
   }
}

function handleOverlayClick(event) {
   const modal = document.querySelector(".delete-modal .modal");
   if (!modal.contains(event.target)) {
      closeModal();
   }
}
