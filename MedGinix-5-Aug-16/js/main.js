
$(document).ready( function() {
$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("right") === "-89px") {
				$("#style-switcher").animate({
					right: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					right: "-89px"
				});
			}
		});
	
	// setting gear
		$('.settings').hover(
		  function () {
			//$(this).children('i').addClass("fa-spin");
		  },
		  function () {
		//	$(this).children('i').removeClass("fa-spin");
		  }
		);
	
});
