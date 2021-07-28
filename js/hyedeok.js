
var mySwiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});


$(document).ready(function () {

    // con2
    $('.con2_slider-div').slick({
        slide: '.con2_inner',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	//무한 반복 옵션	 
        slidesToShow: 4,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 4,		//스크롤 한번에 움직일 컨텐츠 개수
        speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
        vertical: false,		// 세로 방향 슬라이드 옵션
        prevArrow: $('.slick-prev'),
         nextArrow: $('.slick-next'),
         draggable: true, 	//드래그 가능 여부 

        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + '/' + slider.slideCount;
        }
    });
    var page = $('.con2_slider-div').slick('slickCurrentSlide')/4+1; 
    // var pages = $('.con2_slider-div').slick('slickCurrentSlide'); 

    // alert(page);
    $('.current').text(page);

    $('.slick-prev').on('click',function(){
        var page = $('.con2_slider-div').slick('slickCurrentSlide')/4+1; 

        $('.current').text(page);
    })
    $('.slick-next').on('click',function(){
        var page = $('.con2_slider-div').slick('slickCurrentSlide')/4+1; 

        $('.current').text(page);
    })
})

$(document).ready(function () {
//con4
    $('.con4_slider-div').slick({
        slide: '.con4_inner',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	//무한 반복 옵션	 
        slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
        vertical: false,		// 세로 방향 슬라이드 옵션
        prevArrow: $('.con4_slick-prev'),
        nextArrow: $('.con4_slick-next'),
        draggable: true, 	//드래그 가능 여부 
        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + '/' + slider.slideCount;
        }
    });

})

    
// con3
$(document).ready(function () {
    $('.con3_slider-div').slick({
        slide: '.con3_inner',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	//무한 반복 옵션	 
        slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
       vertical: false,		// 세로 방향 슬라이드 옵션
        prevArrow: $('.con3_slick-prev'),
        nextArrow: $('.con3_slick-next'),
          draggable: true, 	//드래그 가능 여부 

        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + '/' + slider.slideCount;
        }
    });
    var page3 = $('.con3_slider-div').slick('slickCurrentSlide')+1; 

    $('.con3_current').text(page3);

    $('.con3_slick-prev').on('click',function(){
        var page3 = $('.con3_slider-div').slick('slickCurrentSlide')+1; 

        $('.con3_current').text(page3);
    })
    $('.con3_slick-next').on('click',function(){
        var page3 = $('.con3_slider-div').slick('slickCurrentSlide')+1; 

        $('.con3_current').text(page3);
    })
})

// con1
$(document).ready(function () {
    $('.con1_slider-div').slick({
        slide: '.con1_inner',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	//무한 반복 옵션	 
        slidesToShow: 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed: 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
          vertical: false,		// 세로 방향 슬라이드 옵션
        prevArrow: $('.con1_slick-prev'),
       nextArrow: $('.con1_slick-next'),
        draggable: true, 	//드래그 가능 여부 

        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + '/' + slider.slideCount;
        }
    });
    var page1 = $('.con1_slider-div').slick('slickCurrentSlide')+1; 

    $('.con1_current').text(page1);

    $('.con1_slick-prev').on('click',function(){
        var page1 = $('.con1_slider-div').slick('slickCurrentSlide')+1; 

        $('.con1_current').text(page1);
    })
    $('.con1_slick-next').on('click',function(){
        var page1 = $('.con1_slider-div').slick('slickCurrentSlide')+1; 

        $('.con1_current').text(page1);
    })
})

// 검색창 tab
$(document).ready(function () {
    $('.filter>li').on('click', function () {
        $('.filter>li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.search_bg>div').removeClass('on');
        $('.search_bg>div').eq(i).addClass('on');

    });

});

//  스크롤시 헤더 컬러 변경
$(document).ready(function () {
    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();

        if (scroll > 0) {
            $(".headerWrap").addClass("roll");
        }
        else if (scroll < 1) {
            $(".headerWrap").removeClass("roll");
        }
    });

});

// 찜, 장바구니 컬러 변경 
$(document).ready(function () {
    $('.wishlist_btn').on('click', function () {
        var wish_src = ($(this).attr('src') == 'img/icon/goods_wishList.png') ? 'img/icon/goods_wishList_on.png' : 'img/icon/goods_wishList.png';

        $(this).attr('src', wish_src);
    });

    $('.cart_btn').on('click', function () {
        var cart_src = ($(this).attr('src') == 'img/icon/goods_cart.png') ? 'img/icon/goods_cart_on.png' : 'img/icon/goods_cart.png';

        $(this).attr('src', cart_src);
    });
});

// 서브이벤트 tab
$(document).ready(function () {
    $('.tab li').on('click', function () {
        $('.tab li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.list ul').removeClass('on');
        $('.list ul').eq(i).addClass('on');

    });

});

