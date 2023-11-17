$(document).ready(function(){
 //heroslider
 $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    navText: ['PREV', 'NEXT'],
    dots:false,
    smartSpeed: 1000,
    responsive:{
        0:{
          nav: false, 
        },
        768:{
         nav:true,
        },
        1000:{
          
        }
    }
})

 //projectslider


$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
  
    dots:false,
    smartSpeed: 1000,
    margin:24,
    navText: ["PREV" , "NEXT"],
    responsive:{
        0:{
        //   nav: false, 
        },
        768:{
        //  nav:true,
        items: 2,
        },
        1140:{
          items: 2,
          dots:true,
          center:true,
        }
    }




    
})




});