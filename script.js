$(document).ready(function(){
    $("#formId").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            email:{
              required:true,
              email:true
            },
            subject:{
                required:true,
                minlength:10,
                maxlength:100
            },
            message:{
                required:true,
                minlength:20,
                maxlength:100
            }
            
        
        }
        
    })
})
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
