window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var image = document.getElementById("igluImage");
    if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 350)
        image.src = "Images/moviepod.png";
    else if(document.documentElement.scrollTop < 50)
        image.src = "Images/iglupresents.png";
    else
        image.src = null;
}
