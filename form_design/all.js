
//this script forfor profile
$(document).ready(function(){

    $("#info").click(function(){
        $("#out").toggle("slow");
    });

})


//login page js
function showPwd(){
    var userPwd = document.querySelector("#pwd");
    if(userPwd.type === "password"){
        userPwd.type = "text";
    }else{
        userPwd.type = "password";
    }
}

//AOS action
AOS.init();
