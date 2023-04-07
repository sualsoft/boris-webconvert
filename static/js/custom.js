//Tabbed Swipper

$(function () {
  
    function setCurrentSlide(ele,index,cssClass){
      $(cssClass + " .swiper-slide").removeClass("active");
      $(cssClass + " .swiper-slide").attr("aria-selected","false");
      ele.addClass("active");
      ele.attr("aria-selected","true");
    }
    
    //check for anchor
    var locationHash = document.location.hash;
  
    //Open Tab to location hash
    if ($(locationHash).length) {
      console.log("exists");
    } else {
      console.log("no hash");
    }
    
  
    
    //find each component
    $('.tabcontainer').each(function(i) {
      
      //add unique id to tab container
      $(this).attr('id', 'tabcontainer-' + i);
      //cache unique id
      var es = '#tabcontainer-' + i;
      //add unique class to the tab list
      $(this).find('.swiper1').addClass('navinstance-' + i);
      $(this).find('.swiper2').addClass('panelinstance-' + i);
      var tabNavClass = '.navinstance-' + i;
      var tabPnlClass = '.panelinstance-' + i;
   
      var mqls = [ // list of window.matchMedia() queries
        window.matchMedia("(max-width: 480px)"),
        window.matchMedia("(max-width: 979px)")
      ]
  
     
  
      //swiper stuff
      var swiper1 = new Swiper(tabNavClass, {
        slidesPerView: 3,
        paginationClickable: true,
        hashNavigation: true,
        spaceBetween: 2,
        freeMode: true,
        loop: false,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        observer: true,
       
     
      });
      swiper1.slides.each(function(index,val){
        var ele=$(this);
        ele.on("click",function(){
          setCurrentSlide(ele,index,tabNavClass);
          swiper2.slideTo(index, 500, false);
        });
      });
  
      var swiper2 = new Swiper (tabPnlClass, {
        direction: 'horizontal',
        loop: false,
        autoHeight: false,
        pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
        observer: true,
        onSlideChangeEnd: function(swiper){
          var n=swiper.activeIndex;
          setCurrentSlide($(tabNavClass + " .swiper-slide").eq(n),n,tabNavClass);
          swiper1.slideTo(n, 500, false);
        },
      
       
      });
  
      if (locationHash) {
        swiper2.slideTo(swiper1.activeIndex);
      }
      
      function mediaqueryresponse(mql) {
        if(mqls[0].matches) {
          //Mobile Mode
          $('.swiper-container').addClass('swiper-no-swiping');
          $('.swiper-wrapper').addClass('swiper-no-swiping');
          $('.swiper-slide').addClass('swiper-no-swiping');
        } 
        else if (mqls[1].matches) {
          //Tablet Mode
          $('.swiper-container').removeClass('swiper-no-swiping');
          $('.swiper-wrapper').removeClass('swiper-no-swiping');
          $('.swiper-slide').removeClass('swiper-no-swiping');
        }
        else {
          //Desktop
        }
      }
  
      for (var i=0; i<mqls.length; i++){ 
          mediaqueryresponse(mqls[i]);
          mqls[i].addListener(mediaqueryresponse); // call handler function whenever the media query is triggered
      }
    });
  });
  
// TABBED SWIPer END  