const nav = document.getElementsByClassName("link-container")[0];
        let lastScroll = 0;
        window.addEventListener("scroll", () => {
            if(lastScroll > window.scrollY){
                nav.style.transform = "translateY(0%)";
                lastScroll = window.scrollY;
            } else {
                nav.style.transform = "translateY(-100%)";
                lastScroll = window.scrollY;
            }
        });