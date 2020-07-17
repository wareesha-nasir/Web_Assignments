 
    var modal=document.getElementById("modal")
    //modal.addEventListener("click",zoom)
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
