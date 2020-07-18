 
    var modal=document.getElementById("modal")
    var modalimg=document.getElementById("modal-img")
    function zoom(i){
      modal.classList.add(".modal-open")
      modal.style.display="block"
      modalimg.src=i.src
     }
    function onClosedImagModal(){
      modal.classList.add(".modal-close")
modal.classList.remove(".modal-open")
setTimeout(()=>{ modal.style.display = "none"; }, 550)
    }
//QUESTION 2
    var zn=document.getElementById("zoom-in")
    var zo=document.getElementById("zoom-out")
    var s=document.getElementById("set")
    var para=document.getElementById("text-zoom")
   
    zn.addEventListener("click",zoomin)
    zo.addEventListener("click",zoomout)
s.addEventListener("click",original)
    var font=20
para.style.fontSize=font+"px"
function zoomin(){
font+=10;
para.style.fontSize=font+"px"

}
function zoomout(){
    font-=10
para.style.fontSize=font+"px"
}
function original(){
para.style.fontSize="20px"
}