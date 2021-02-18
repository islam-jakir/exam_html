
$(document).ready(function(){

    //profile show
    $("#pro_show").on("click",function(){
        $(".pro_up").toggle("slow");
    });
    $(".closeA").on("click",function(){
        $(".pro_up").toggle("slow");
    });
    //cover show
    $("#cov_show").on("click",function(){
        $("#cov_up").toggle();
    });
    $(".closeB").on("click",function(){
        $("#cov_up").toggle();
    });

    //notice
    $("#my_info").on("click",function(){
        $("#error").toggle();
    });
    $(".closeC").on("click",function(){
        $("#error").css("display","none");
    });

})
