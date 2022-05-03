(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

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

// Example starter JavaScript for disabling form submissions if there are invalid fields
