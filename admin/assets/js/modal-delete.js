 function openModal() {
         const overlay = document.getElementById("modalOverlay");
         const modal = overlay.querySelector(".modal");

         overlay.classList.add("show");
         modal.style.display = "block"; // ✨ Hiện modal lại
         modal.style.transform = "rotateY(90deg)"; // ✨ Reset góc quay nếu cần
         modal.style.animation = "rotateIn 0.5s forwards";

         document.getElementById("modalContent").style.display = "block";
         document.getElementById("successMessage").classList.remove("show");
      }


      function closeModal() {
         const overlay = document.getElementById("modalOverlay");
         const modal = overlay.querySelector(".modal");

         modal.style.animation = "rotateOut 0.4s forwards";

         setTimeout(() => {
            overlay.classList.remove("show");
            modal.style.display = "none"; // ✨ Ẩn modal lại sau animation
         }, 400);
      }


      function confirmYes() {
         document.getElementById("modalContent").style.display = "none";
         document.getElementById("successMessage").classList.add("show");
      }

      function handleOverlayClick(event) {
         const modal = document.querySelector(".delete-modal .modal");
         if (!modal.contains(event.target)) {
            closeModal();
         }
      }