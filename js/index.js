

$(document).ready(function() {




  $(function() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 800,
      delay: 300,
      once: true,
      disable: 'mobile'
    });
  });

  $(window).on('load', function() {
    AOS.refresh();
  });

  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
