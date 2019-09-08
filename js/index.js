$(document).ready(function () {

  $(function() {
  AOS.init();
});

$(window).on('load', function() {
  AOS.refresh();
});

  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});
