$(document).ready(function(){
    //main item code
    $("#gen").on("click",function(){
        $("#gen_show").toggle();
        $("#optnl").css("display" , "none");
        $("#delete").css("display" , "none");
        $("#pass_show").css("display" , "none");
        $("#pri_show").css("display" , "none");
    });
        
    $("#sec").on("click",function(){
        $("#pass_show").toggle();
        $("#optnl").css("display" , "none");
        $("#gen_show").css("display" , "none");
        $("#delete").css("display" , "none");
        $("#pri_show").css("display" , "none");
    });

    $("#lock").on("click",function(){
        $("#pri_show").toggle();
        $("#optnl").css("display" , "none");
        $("#gen_show").css("display" , "none");
        $("#pass_show").css("display" , "none");
        $("#delete").css("display" , "none");
    });
    
    $("#ban").on("click",function(){
        $("#delete").toggle();
        $("#optnl").css("display" , "none");
        $("#gen_show").css("display" , "none");
        $("#pass_show").css("display" , "none");
        $("#pri_show").css("display" , "none");
    });
    
    //general code
    nam_shw
    $("#nam_shw").on("click",function(){
        $("#nam").toggle('slow');
    });    
    
    $("#n_shw").on("click",function(){
        $("#num").toggle('slow');
    });

    //privacycode
    $("#showA").on("click",function(){
        $("#hideMe").toggle('slow');
    });
    
    $("#showB").on("click",function(){
        $("#hideB").toggle('slow');
    });
        
    $("#showC").on("click",function(){
        $("#hideC").toggle('slow');
    });
        
    $("#showD").on("click",function(){
        $("#hideD").toggle('slow');
    });
        
    $("#showE").on("click",function(){
        $("#hideE").toggle('slow');
    });
        
    $("#showF").on("click",function(){
        $("#hideF").toggle('slow');
    });
    //password code
    $("#chng").on("click",function(){
        $("#see").toggle('slow');
    });
    
    $("#see").on("click",function(){
        $("#pwd").toggle('slow');
    });
        //deletion code
    $("#first").on("click",function(){
        $("#second").toggle('slow');
        $("#three").css("display" , "none");
        $("#four").css("display" , "none");
        $("#five").css("display" , "none");
        $("#six").css("display" , "none");
        $("#last").css("display" , "none");
    });
    
    $("#next").on("click",function(){
        $("#three").toggle('slow');
        $("#four").css("display" , "none");
        $("#five").css("display" , "none");
        $("#six").css("display" , "none");
        $("#last").css("display" , "none");
    });
    
    $("#nextB").on("click",function(){
        $("#four").toggle('slow');
    });
    
    $("#nextC").on("click",function(){
        $("#three").toggle('slow');
        $("#four").css("display" , "none");
        $("#five").css("display" , "none");
        $("#six").css("display" , "none");
        $("#last").css("display" , "none");
    });
    
    $("#nextD").on("click",function(){
        $("#five").toggle('slow');
        $("#six").css("display" , "none");
        $("#last").css("display" , "none");
    });
    
    $("#five").on("click",function(){
        $("#six").toggle('slow');
        $("#last").css("display" , "none");
    });
    
    $("#six").on("click",function(){
        $("#last").toggle('slow');
    });
    
    $("#no").on("click",function(){
        $("#four").toggle('slow');
        $("#second").css("display" , "none");
        $("#three").css("display" , "none");
        $("#four").css("display" , "none");
        $("#five").css("display" , "none");
        $("#six").css("display" , "none");
        $("#last").css("display" , "none");
    });
    
    //when responsive
    $("#bar").on("click",function(){
        $(".side_bar").toggle('slow');
    });
    
    $("#side_hide").on("click",function(){
        $(".side_bar").css("display" , "none");
    });
})