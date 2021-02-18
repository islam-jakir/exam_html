function goBack(){
    window.history.back();
}

$(document).ready(function(){
    
    //header search bar
    $("#srch_bar").on("click",function(){
        $("#abcGet").slideToggle(150);
    });
    
    $(".pro_icon_box").on("click",function(){
        $("#cog_box").slideToggle(150);
    });

})