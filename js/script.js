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
//     $('.gallery_product').click(function(){
//         $(this).css("cursor", "pointer");
//         $(this).animate({width: "400px"}, '3s');
//         $(this).delay(5000);
//         $('.gallery_product').click(function(){
//             $(this).animate({width: "300px"}, 'slow');
//         });
//     });
    
// });




  

