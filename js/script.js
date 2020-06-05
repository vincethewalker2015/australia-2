$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// Image Resizing

// $(document).ready(function(){
//     var $this = $(this);
//     $('.gallery_product').mouseover(function(){
//         $(this).css("cursor", "pointer");
//         $(this).animate({width: "500px"}, '3s');
//     });
//     $('.gallery_product').mouseleave(function(){
//         $(this).animate({width: "100px"}, 'slow');
//     });
// });


$(document).ready(function(){
    var $this = $(this);
    $(".img-responsive").click(function(){
        $(this).animate({width: "300", height: "200"}, 'slow');
        // $(this).hide('10s');
    });
  });

  

