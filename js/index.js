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
