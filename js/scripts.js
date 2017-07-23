var modal = document.getElementById('mymodal');
var modal2 = document.getElementById('mymodal2');
var modal3 = document.getElementById('mymodal3');
var modal4 = document.getElementById('mymodal4');

var img = document.getElementById('myimg');
var img2 = document.getElementById('myimg2');
var img3 = document.getElementById('myimg3');
var img4 = document.getElementById('myimg4');

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
} 