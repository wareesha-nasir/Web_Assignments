 
    var modal=document.getElementById("modal")
    //modal.addEventListener("click",zoom)
    var modalimg=document.getElementById("modal-img")
    function zoom(){
      modal.classList.add(".modal-open")
      modal.style.display="block"
      modalimg.src="14.png"
      
    }
    function onClosedImagModal(){
      modal.classList.add(".modal-close")
modal.classList.remove(".modal-open")
setTimeout(()=>{ modal.style.display = "none"; }, 550)
    }
