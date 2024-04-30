function login(){
    var email=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(email=='kdineshpandu6313@gmail.com' && pass=="Dinu@1060"){
        alert("Login Successfull")
        // window.location.assign("#")
    }
    else{
        alert("invalid details")
    }
}