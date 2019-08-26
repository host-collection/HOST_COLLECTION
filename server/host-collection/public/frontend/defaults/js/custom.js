$(document).ready(function(){
	var slideshow =$('#boxslide');
	slideshow.owlCarousel({
	    items : 1,
	    margin: 0,
	    slideSpeed : 4000,
		autoplaySpeed: 1000,
	    nav: true,
	    autoplay: true,
	    dots: false,
	    loop: true,
	    navText: ["<i class='prev slide_prev'></i>","<i class='next slide_next'></i>"]
	});
	$('.product-cover img').mousemove(function(e){
		var x = (e.pageX + this.offsetLeft) / 25;
		var y = (e.pageY + this.offsetTop) / 25;
		$(this).css({'position':'absolute','left':x + 'px','top':y +'px'});
	});
	$(window).scroll(function(){if($(this).scrollTop()>500){$('#bttop').fadeIn();}else{$('#bttop').fadeOut();}});$('#bttop').click(function(){$('body,html').animate({scrollTop:500},1000);});
	// ---------------- start more menu setting ----------------------
		var max_elem = 8;	
		var items = $('.menu ul#top-menu > li');	
		var surplus = items.slice(max_elem, items.length);
		
		surplus.wrapAll('<li class="category more_menu" id="more_menu"><div id="top_moremenu" class="popover sub-menu js-sub-menu collapse"><ul class="top-menu more_sub_menu">');
	
		$('.menu ul#top-menu .more_menu').prepend('<a href="#" class="dropdown-item" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span></span>More</a>');
	
		$('.menu ul#top-menu .more_menu').mouseover(function(){
			$(this).children('div').css('display', 'block');
		})
		.mouseout(function(){
			$(this).children('div').css('display', 'none');
		});
	// ---------------- end more menu setting ----------------------

});


// Add/Remove acttive class on menu active in responsive  
	$('#menu-icon').on('click', function() {
		$(this).toggleClass('active');
	});

// Loading image before flex slider load
	$(window).on("load", function() { 
		$(".loadingdiv").removeClass("spinner"); 
	});	

// Scroll page bottom to top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.top_button').fadeIn(500);
		} else {
			$('.top_button').fadeOut(500);
		}
	});							
	$('.top_button').click(function(event) {
		event.preventDefault();		
		$('html, body').animate({scrollTop: 0}, 800);
	});



/*======  Carousel Slider For Feature Product ==== */
	
	var tmgfeature = $("#feature-carousel");
	tmgfeature.owlCarousel({
		items :4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [767,1], 
		itemsMobile : [479,1]
	});
	// Custom Navigation Events
	$(".feature_next").click(function(){
		tmgfeature.trigger('owl.next');
	});
	$(".feature_prev").click(function(){
		tmgfeature.trigger('owl.prev');
	});
	var tmgadditional = $('#additional-carousel');
	tmgadditional.owlCarousel({
		items : 3,
		slideBy: 3,
		slideSpeed : 3000,
		nav: true,
		autoplay: false,
		dots: false,
		loop: false,
		navText: ["<i class='prev featurecms_prev'></i>","<i class='next featurecms_next'></i>"],
		responsive : {
		0 : {
		items : 2,
		slideBy: 2
		},
		480 : {
		items : 2,
		slideBy: 2
		},
		768 : {
		items : 3,
		slideBy: 3
		}
		} 
	});
/*======  Carousel Slider For Feature CMS ==== */
	
	var tmgfeaturecms = $("#feature-cms");
	tmgfeaturecms.owlCarousel({
		items : 5,
	    slideBy: 4,
	    slideSpeed : 4000,
	    nav: true,
	    autoplay: false,
	    dots: false,
	    loop: false,
	    navText: ["<i class='prev featurecms_prev'></i>","<i class='next featurecms_next'></i>"],
	    responsive : {
      	0 : {
          items : 2,
	      slideBy: 2
      	},
      	480 : {
          items : 2,
	      slideBy: 2
      	},
      	768 : {
          items : 5,
	      slideBy: 5
     	 }
  		}
	});

/*======  Carousel Slider For service Product ==== */
	
	var tmgservice = $("#service-carousel");
	tmgservice.owlCarousel({
		items : 1,
	    slideSpeed : 4000,
		autoplaySpeed: 1000,
		lazyLoad:true,
	    nav: false,
	    autoplay: true,
	    dots: false,
	    loop: true
	});
	
/*======  Carousel Slider For Instagram Block ==== */
	var tmginsta = $("#instagram-carousel");
	tmginsta.owlCarousel({
		items : 6, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [479,2], 
		itemsMobile : [319,2] 
	});
	// Custom Navigation Events
	$(".insta_next").click(function(){
		tmginsta.trigger('owl.next');
	});
	$(".insta_prev").click(function(){
		tmginsta.trigger('owl.prev');
	});

/*======  Carousel Slider For New Product ==== */
	
	var tmgnewproduct = $("#newproduct-carousel");
	tmgnewproduct.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".newproduct_next").click(function(){
		tmgnewproduct.trigger('owl.next');
	});
	$(".newproduct_prev").click(function(){
		tmgnewproduct.trigger('owl.prev');
	});



/*======  Carousel Slider For Bestseller Product ==== */
	
	var tmgbestseller = $("#bestseller-carousel");
	tmgbestseller.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".bestseller_next").click(function(){
		tmgbestseller.trigger('owl.next');
	});
	$(".bestseller_prev").click(function(){
		tmgbestseller.trigger('owl.prev');
	});



/*======  Carousel Slider For Special Product ==== */
	var tmgspecial = $("#special-carousel");
	tmgspecial.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".special_next").click(function(){
		tmgspecial.trigger('owl.next');
	});
	$(".special_prev").click(function(){
		tmgspecial.trigger('owl.prev');
	});


/*======  Carousel Slider For Accessories Product ==== */

	var tmgaccessories = $("#accessories-carousel");
	tmgaccessories.owlCarousel({
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".accessories_next").click(function(){
		tmgaccessories.trigger('owl.next');
	});
	$(".accessories_prev").click(function(){
		tmgaccessories.trigger('owl.prev');
	});


/*======  Carousel Slider For Category Product ==== */

var tmproductscategory = $("#productscategory-carousel");
tmproductscategory.owlCarousel({
	items : 3,
	 slideBy: 3,
	 slideSpeed : 4000,
	 nav: true,
	 autoplay: false,
	 dots: false,
	 loop: false,
	 navText: ["<i class='prev slide_prev'></i>","<i class='next slide_next'></i>"],
	 responsive : {
	   0 : {
	   items : 1,
	   slideBy: 1
	   },
	   480 : {
	   items : 2,
	   slideBy: 2
	   },
	   768 : {
	   items : 3,
	   slideBy: 3
	   },
	   1024 : {
	   items : 3,
	   slideBy: 3
	   }
	}
});


/*======  Carousel Slider For Viewed Product ==== */

	var tmgviewed = $("#viewed-carousel");
	tmgviewed.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".viewed_next").click(function(){
		tmgviewed.trigger('owl.next');
	});
	$(".viewed_prev").click(function(){
		tmgviewed.trigger('owl.prev');
	});

/*======  Carousel Slider For Crosssell Product ==== */

	var tmgcrosssell = $("#crosssell-carousel");
	tmgcrosssell.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [479,1], 
		itemsMobile : [319,1] 
	});
	// Custom Navigation Events
	$(".crosssell_next").click(function(){
		tmgcrosssell.trigger('owl.next');
	});
	$(".crosssell_prev").click(function(){
		tmgcrosssell.trigger('owl.prev');
	});

/*======  curosol For Manufacture ==== */
	 var tmgbrand = $("#brand-carousel");
      tmgbrand.owlCarousel({
		 items : 5,
		 margin: 50,
		 slideBy: 6,
		 slideSpeed : 4000,
		 nav: true,
		 autoplay: false,
		 dots: false,
		 loop: false,
		 navText: ["<i class='prev slide_prev'></i>","<i class='next slide_next'></i>"],
		 responsive : {
		   0 : {
		   items : 3,
		   slideBy: 3
		   },
		   480 : {
		   items : 4,
		   slideBy: 4
		   },
		   768 : {
		   items : 4,
		   slideBy: 4
		   },
		   1024 : {
		   items : 5,
		   slideBy: 5
		   }
		}
      });
	  



/*======  Carousel Slider For For Tesimonial ==== */

	var tmgtestimonial = $("#testimonial-carousel");
	tmgtestimonial.owlCarousel({
		items : 3,
	    slideBy: 3,
	    slideSpeed : 4000,
	    nav: false,
	    autoplay: false,
	    dots: true,
	    loop: false,
	    responsive : {
      	0 : {
          items : 1,
	      slideBy: 1
      	},
      	480 : {
          items : 2,
	      slideBy: 2
      	},
      	768 : {
          items : 2,
	      slideBy: 2
		  },
		1024 : {
		items : 2,
		slideBy: 2
		},
		1200 : {
			items : 3,
			slideBy: 3
			}
  		}
	});

	 
/*======  Carousel Slider For For blog ==== */

	 var blogcarousel = $("#blog-carousel");
      blogcarousel.owlCarousel({
		items : 3,
	    slideBy: 3,
	    slideSpeed : 4000,
	    nav: true,
	    autoplay: false,
	    dots: false,
		loop: false,
		navText: ["<i class='prev slide_prev'></i>","<i class='next slide_next'></i>"],
	    responsive : {
      	0 : {
          items : 1,
	      slideBy: 1
      	},
      	480 : {
          items : 2,
	      slideBy: 2
      	},
      	768 : {
          items : 2,
	      slideBy: 2
		  },
		1024 : {
		items : 3,
		slideBy: 3
		}
  		}
    });	
function responsivecolumn(){
	
	if ($(document).width() <= 767){
				
	//---------------- Fixed header responsive ----------------------
		$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 0) {
				$('.header-top').addClass('fixed');
		} else {
				$('.header-top').removeClass('fixed');
			}
		});
	}
	
	if ($(document).width() >= 768){
				
		// ---------------- Fixed header responsive ----------------------
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 175) {
				$('#header .header-nav-full').addClass('fixed');
			} else {
				$('#header .header-nav-full').removeClass('fixed');
			}
		});
	}
	
	
	if ($(document).width() <= 991)
	{
		$('.container #columns_inner #left-column').appendTo('.container #columns_inner');
		
	}
	else if($(document).width() >= 992) 
	{
		$('.container #columns_inner #left-column').prependTo('.container #columns_inner');
		
	}
}
$(document).ready(function(){responsivecolumn();});
$(window).resize(function(){responsivecolumn(); });

$(document).ready(function(){customMoves();});
function customMoves(){	
	
    $("#top-menu .sub-menu li:has(ul)").parent().parent().addClass("mega");
	$("#top-menu .sub-menu li:has(ul)").parent().parent().parent().addClass("mega-li");
   
	$('.account-button').click(function(event){		
		$(this).toggleClass('active');		
		event.stopPropagation();		
		$(".user-info").slideToggle("slow");	
	});

	$('.search-button').click(function(event){		
		$(this).toggleClass('active');	
		$(".search-widget form .ui-autocomplete-input").focus();
	});
	
	
	$(document).click(function(event){		
		$('.search-button').removeClass('active');
	});	
	
	$(".user-info").on("click", function (event) {		
		event.stopPropagation();	
	});

}

$(document).ready(function(){
	filterOrder();
});

function filterOrder(){

	$("select").change(function(){

		var my_element= new Array();

		var value = $(this).val();

		$("#filterorder").find("option[selected]").removeAttr("selected");
		$("#filterorder").find('option[value="' + value + '"]').attr('selected','selected');

		my_element.push("so="+ $(this).children("option:selected").val());

		console.log(my_element);

		$.ajax({
			url: "/loadproduct?"+my_element,
			type: 'GET',

			success: function(result){
				$('.products').html(result);
				$('.filterprice').change(function(){
					filterOrder();
				});
			}
		});
	});
	return true;
}

function filtertest1(){
	$("select").change(function(){

		var value = $(this).val();

		$("#filterorder").find("option[selected]").removeAttr("selected");
		$("#filterorder").find('option[value="' + value + '"]').attr('selected','selected');
	});
}
//paginate

 /*$(window).on('hashchange', function() {
        if (window.location.hash) {
            var page = window.location.hash.replace('#', '');
            if (page == Number.NaN || page <= 0) {
                return false;
            }else{
                getData(page);
            }
        }
    });
    
    $(document).ready(function()
    {
        $(document).on('click', '.pagination a',function(event)
        {
            event.preventDefault();
  
            $('li').removeClass('active');
            $(this).parent('li').addClass('active');
  
            var myurl = $(this).attr('href');
            var page=$(this).attr('href').split('page=')[1];
  
            getData(page);
        });
  
    });
  
    function getData(page){
        $.ajax(
        {
            url: '?page=' + page,
            type: "get",
            datatype: "html"
        }).done(function(data){
            $("#tag_container").empty().html(data);
            location.hash = page;
        }).fail(function(jqXHR, ajaxOptions, thrownError){
              alert('No response from server');
        });
    }*/