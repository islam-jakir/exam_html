//profile pic detector
function pro_preview(event){
    var reader = new FileReader();
    reader.onload = function(){
 var output = document.getElementById('pic_showB');
 output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
}

//cover pic detector
function cov_previewA(event){
    var reader = new FileReader();
    reader.onload = function(){
 var output = document.getElementById('imageA');
 output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
}

function cov_previewB(event){
    var reader = new FileReader();
    reader.onload = function(){
 var output = document.getElementById('imageB');
 output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
}

function cov_previewC(event){
    var reader = new FileReader();
    reader.onload = function(){
 var output = document.getElementById('imageC');
 output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
}

function cov_previewD(event){
    var reader = new FileReader();
    reader.onload = function(){
 var output = document.getElementById('imageD');
 output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
}



//slider js
setInterval(function(){
    

    if(document.getElementsByClassName("item")[2].classList.contains("active")){

        document.getElementsByClassName("item")[3].classList.add("active");
        document.getElementsByClassName("item")[2].classList.remove("active");

    }else if(document.getElementsByClassName("item")[3].classList.contains("active")){

        document.getElementsByClassName("item")[0].classList.add("active");
        document.getElementsByClassName("item")[3].classList.remove("active");
        
    }else if(document.getElementsByClassName("item")[0].classList.contains("active")){

        document.getElementsByClassName("item")[1].classList.add("active");
        document.getElementsByClassName("item")[0].classList.remove("active");

    }else if(document.getElementsByClassName("item")[1].classList.contains("active")){

        document.getElementsByClassName("item")[2].classList.add("active");
        document.getElementsByClassName("item")[1].classList.remove("active");

    }
}, 1500);

