    $(function () {
        // Remove Search if user Resets Form or hits Escape!
		$('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
			console.log(event.currentTarget);
			if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
				$(event.currentTarget).attr('type') == 'reset') {
				closeSearch();
			}
		});

		function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
    		$form.find('input').val('');
			$form.removeClass('active');
		}

		// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
		$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$form.addClass('active');
			$input.focus();

		});
		// ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
		// if your form is ajax remember to call `closeSearch()` to close the search container
		$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$('#showSearchTerm').text($input.val());
            closeSearch()
		});
		window.scrollTop = 0;
    var a = jQuery("#header");

    var r = !1;
    if (jQuery("#topMain a.dropdown-toggle").bind("click", function(e) {
            "#" == jQuery(this).attr("href") && e.preventDefault(), r = jQuery(this).parent().hasClass("resp-active"), jQuery("#topMain").find(".resp-active").removeClass("resp-active"), r || jQuery(this).parents("li").addClass("resp-active")
        }), jQuery("li.search i.fa").click(function() {
            jQuery("#header .search-box").is(":visible") ? jQuery("#header .search-box").fadeOut(300) : (jQuery(".search-box").fadeIn(300), jQuery("#header .search-box form input").focus(), jQuery("#header li.quick-cart div.quick-cart-box").is(":visible") && jQuery("#header li.quick-cart div.quick-cart-box").fadeOut(300))
        }), 0 != jQuery("#header li.search i.fa").size() && (jQuery("#header .search-box, #header li.search i.fa").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        })), jQuery(document).bind("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        }), jQuery("#closeSearch").bind("click", function(e) {
            e.preventDefault(), jQuery("#header .search-box").fadeOut(300)
        }), jQuery("button#page-menu-mobile").bind("click", function() {
            jQuery(this).next("ul").slideToggle(150)
        }), jQuery("li.quick-cart>a").click(function(e) {
            e.preventDefault();
            var t = jQuery("li.quick-cart div.quick-cart-box");
            t.is(":visible") ? t.fadeOut(300) : (t.fadeIn(300), jQuery("li.search .search-box").is(":visible") && jQuery(".search-box").fadeOut(300))
        }), 0 != jQuery("li.quick-cart>a").size() && (jQuery("li.quick-cart").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("li.quick-cart div.quick-cart-box").is(":visible") && jQuery("li.quick-cart div.quick-cart-box").fadeOut(300)
        })), jQuery("#page-menu ul.menu-scrollTo>li").bind("click", function(e) {
            var t = jQuery("a", this).attr("href");
            jQuery("a", this).hasClass("external") || (e.preventDefault(), jQuery("#page-menu ul.menu-scrollTo>li").removeClass("active"), jQuery(this).addClass("active"), jQuery(t).length > 0 && (_padding_top = 0, jQuery("#header").hasClass("sticky") && (_padding_top = jQuery(t).css("padding-top"), _padding_top = _padding_top.replace("px", "")), jQuery("html,body").animate({
                scrollTop: jQuery(t).offset().top - _padding_top
            }, 800, "easeInOutExpo")))
        }), a.hasClass("bottom") ? (a.addClass("dropup"), window.homeHeight = jQuery(window).outerHeight() - 55, a.hasClass("sticky") && (window.isOnTop = !0, jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > window.homeHeight / 2 ? a.removeClass("dropup") : a.addClass("dropup")
        }), jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > window.homeHeight ? window.isOnTop === !0 && (jQuery("#header").addClass("fixed"), a.removeClass("dropup"), window.isOnTop = !1) : window.isOnTop === !1 && (jQuery("#header").removeClass("fixed"), a.addClass("dropup"), window.isOnTop = !0)
        }), jQuery(window).resize(function() {
            window.homeHeight = jQuery(window).outerHeight()
        }))) : a.hasClass("sticky") ? jQuery(window).scroll(function() {
            if (window.width > 768) {
                var e = jQuery(document).scrollTop();
                _topBar_H = jQuery("#topBar").outerHeight() || 0, e > _topBar_H ? (a.addClass("fixed"), _header_H = a.outerHeight() || 0, a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                    "padding-top": _header_H + "px"
                })) : (a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                    "padding-top": "0px"
                }), a.removeClass("fixed"))
            }
        }) : a.hasClass("static"), jQuery("#slidetop a.slidetop-toggle").bind("click", function() {
            jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop .container").is(":hidden") ? jQuery("#slidetop").removeClass("active") : jQuery("#slidetop").addClass("active")
            })
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && jQuery("#slidetop").hasClass("active") && jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop").removeClass("active")
            })
        }), jQuery("a#sidepanel_btn").bind("click", function(e) {
            e.preventDefault(), n = "right", jQuery("#sidepanel").hasClass("sidepanel-inverse") && (n = "left"), jQuery("#sidepanel").is(":hidden") ? (jQuery("body").append('<span id="sidepanel_overlay"></span>'), "left" == n ? jQuery("#sidepanel").stop().show().animate({
                left: "0px"
            }, 150) : jQuery("#sidepanel").stop().show().animate({
                right: "0px"
            }, 150)) : (jQuery("#sidepanel_overlay").remove(), "left" == n ? jQuery("#sidepanel").stop().animate({
                left: "-300px"
            }, 300) : jQuery("#sidepanel").stop().animate({
                right: "-300px"
            }, 300), setTimeout(function() {
                jQuery("#sidepanel").hide()
            }, 500)), t()
        }), jQuery("#sidepanel_close").bind("click", function(e) {
            e.preventDefault(), jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && jQuery("#sidepanel").is(":visible") && jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery("#menu_overlay_open").length > 0) {
        var i = jQuery("html").hasClass("ie9") ? !0 : !1;
        1 == i && jQuery("#topMain").hide(), jQuery("#menu_overlay_open").bind("click", function(e) {
            e.preventDefault(), jQuery("body").addClass("show-menu"), 1 == i && jQuery("#topMain").show()
        }), jQuery("#menu_overlay_close").bind("click", function(e) {
            e.preventDefault(), jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == i && jQuery("#topMain").hide()
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && (jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == i && jQuery("#topMain").hide())
        }), jQuery(".box-flip").length > 0 && (jQuery(".box-flip").each(function() {
        _height1 = jQuery(".box1", this).outerHeight(), _height2 = jQuery(".box2", this).outerHeight(), _height1 >= _height2 ? _height = _height1 : _height = _height2, jQuery(this).css({"min-height": _height + "px"}), jQuery(".box1", this).css({"min-height": _height + "px"}), jQuery(".box2", this).css({"min-height": _height + "px"})
    }), jQuery(".box-flip").hover(function() {
        jQuery(this).addClass("flip")
    }, function() {
        jQuery(this).removeClass("flip")
    }))
    }
 
    	// fixed menu on scroll
	var hig = window.innerHeight - 130;
	$(window).bind('scroll', function() {
             if ($(window).scrollTop() > hig) {
                 $('.hc_fixed_header').addClass('fixed');
             }
             else {
                 $('.hc_fixed_header').removeClass('fixed');
             }
        });$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-200px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-200px"
				});
			}
		});
	
    });