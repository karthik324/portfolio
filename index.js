window.onscroll = function () { scrollFuntion() };
function scrollFuntion() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "#ffc107";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}
                  
$(".carousel-item").attr("data-interval", "100");

