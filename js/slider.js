var arr_hinh = [
    "img/sl1.webp",
    "img/sl2.webp",
    "img/sl3.webp" 
    ]
    var index=0;
    function next(){
        index++;
        if(index>=arr_hinh.length) index=1;
        var hinh=document.getElementById("hinh");
        hinh.src=arr_hinh[index];
    }
    function prev(){
        index--;
        if(index<0) index=arr_hinh.length-1;
        document.getElementById('hinh').src=arr_hinh[index];
    }
    setInterval("next()",3000);
    