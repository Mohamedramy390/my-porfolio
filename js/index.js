$(document).ready(function(){
  $('.circle').circleProgress({
      startAngle: -Math.PI / 2,
      fill :"#000"
  }).on.on('circle-animation-progress', function(event, progress, stepValue){
      $(this).find('span').html(Math.round(stepValue * 100) + '%')
  })
});

function scroll(){
    if (document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparrent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}
window.onscroll= function(){
    scroll();
};

$(function(){
  $('#contact-form').validate();
})
// Example starter JavaScript for disabling form submissions if there are invalid fields

text = $(".animation-text").position().top;
about = $(".about-animation").position().top;
btn = $(".about .about-btn a").position().top;
img = $(".info-img").position().top;
circle = $(".circle").position().top;
card = $(".card").position().top;
contactinfo = $(".contact-info").position().top;
contactform = $(".contact-form").position().top;
smtitle = $(".sm-title").position().top;
title = $(".heading-text h1").position().top;
icons = $("header .heading .social-icons li").position().top;

$(function() {
    $('.sm-title').addClass('animation');
    $(".heading-text h1").addClass("animation"); 
    $(".header .heading .social-icons li").addClass("animation");
  });

$(window).scroll(function() {
   
    if(text>0 && $(window).scrollTop() + 500 >= text) {              
        $(".animation-text").addClass("animation");
    } 
    if(img>0 && $(window).scrollTop() + 700 >= img) {              
        $(".info-img").addClass("animation"); 
    }
    if(about>0 && $(window).scrollTop() + 430 >= about ) {              
        $(".about-animation").addClass("animation");
        $(".about .about-btn a").addClass("animation");
    } 
    if(circle>0 && $(window).scrollTop() + 500 >= circle ) {              
        $(".circle").addClass("animation");
    }
    if(card>0 && $(window).scrollTop() + 300 >= card ) {              
        $(".card").addClass("animation");
    }
    if(contactinfo>0 && $(window).scrollTop() + 430 >= contactinfo ) {              
        $(".contact-info").addClass("animation");
    }
    if(contactform>0 && $(window).scrollTop() + 430 >= contactform ) {              
        $(".contact-form").addClass("animation");
    }
});

const load = document.querySelector('.loader');

window.addEventListener('load', function(){
    load.style.display= 'none';
})



