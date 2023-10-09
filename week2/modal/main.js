window.onload = function(){



    const modal = document.getElementById("modal");

    const openBtn = document.getElementById("open");
    const closeBtn = document.getElementById("close");

    openBtn.addEventListener("click", function(){
        modal.style.display = "flex";
    });
    closeBtn.addEventListener("click", function(){
        modal.style.display = "none";
    });

}
