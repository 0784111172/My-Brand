console.log("Signed in")
//initialization of variables
const signin_button=document.querySelector(".signin")
//console.log(signin_button)

//event listner
signin_button.addEventListener("click",signin_function)

//function definition
function signin_function(){
    console.log("clicked")
    window.location.href ="./dashboard.html"
}