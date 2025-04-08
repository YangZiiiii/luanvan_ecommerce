function initSelect2() {
    $('.select2').select2({
      width: '100%', // hoặc 'resolve'
      placeholder: 'Option',
      allowClear: true
    });
  }
  
  // ✅ Gọi lúc đầu khi trang load
  $(document).ready(function() {
    initSelect2();
  });
  
  // ✅ Gọi lại mỗi khi repeater tạo mới item
  $('[data-repeater-create]').on('click', function () {
    // Đợi DOM render xong rồi mới init (rất quan trọng)
    setTimeout(function () {
      initSelect2();
    }, 50); // delay nhỏ để DOM kịp cập nhật
  });
  
