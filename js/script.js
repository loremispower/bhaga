$(function() {

		var deg = 0;

	$(".arrow").on("click", function() {

		function sum(num){
			if (deg == 0) {
			deg = deg + num;
			return deg;
			} else {
			deg = deg - num;
			return deg;
			}
		}

		$(".header__buttons").slideToggle(1000);
		$(this).css({
			'transform' : 'rotate('+sum(180)+'deg)'
		})
	});
});
