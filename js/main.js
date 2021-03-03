$(document).ready(function () {

  function changeBackHeader(){
    var header = $('#mainHeader');

    $(window).on('scroll', function () {
      var scrollInTop = $(window).scrollTop() === 0;

      if(!scrollInTop) {
        header.addClass('bg-white');
      } else {
        header.removeClass('bg-white');
      }
    });
  };

  changeBackHeader();

  function smoothScroll(){
    var smoothScrollItem = $('.smoothScroll');

    smoothScrollItem.on('click', function (e) {
      e.preventDefault();

      var href = $(this).attr('href');

      var seccionOffsetTop = $(href).offset().top - 125;

      $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });
  };

  smoothScroll();


  function activeMenuLink(){

		$(window).on('scroll', function () {
			var scrollPos = $(window).scrollTop();
			var smoothScrollItem = $('.smoothScroll');

			smoothScrollItem.each(function () {
				var href = $(this).attr('href');

				var refElement = $(href);


				var beOnSection = refElement.offset().top - 125 <= scrollPos && refElement.offset().top - 125 + refElement.outerHeight() > scrollPos;

				if (beOnSection) {
					$(this).closest('a').siblings().removeClass('active');
					$(this).closest('a').addClass('active');
				}
			});
		});

	}
	activeMenuLink();
});
