
window.onload = function() {
    var modalBtns = document.querySelectorAll(".modal-open");
    modalBtns.forEach(function(btn) {
        btn.onclick = function() {
            var modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
            document.querySelector("body").style.overflow = 'hidden';
        };
    });

    var closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            var modal = btn.closest('.modal').style.display = "none";
            document.querySelector("body").style.overflow = 'visible';
        };
    });
    

}


