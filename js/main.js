function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPass=document.getElementById("confirmPass").value;
    var error=document.getElementById("error");
     
    
    error.style.background="red";   
    error.style.transition="all .5s ease";

    if(name=="" && email=="" && password=="" && confirmPass==""){
        error.innerHTML="Please Enter Data";
        return false;
    } else if(name.length<5 || name>15){
        error.innerHTML="Please insert 5-15 charachter in userName";
        return false;
    } else if(email.indexOf("@")==-1){
        error.innerHTML="Please enter valid Email  contain @";
        return false;
    }else if(password.length<8){
        error.innerHTML="Please enter Atleast 8 charachter";
        return false;
    }else if(password !=confirmPass){
        error.innerHTML="Please enter valid password";
        return false;
    }else{
        return true;
    }
}