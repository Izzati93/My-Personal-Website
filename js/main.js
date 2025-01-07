

/*------------------- navigation menu -----------------*/

(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
       bodyScrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    } 
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    // attach an event handler to document
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            /* make sure event.target.hash has a value before overriding default behavior */
            if(event.target.hash !==""){
                //prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactive existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector("section.active").classList.remove("active");
                //active new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                /* deactive existing active navigation menu 'link-item' */
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove(".active","inner-shadow");
                    //activate new navigation menu 'link-item'
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");
                    //hide navigation menu
                    hideNavMenu();
                }
                //add hash (#) to url
            }
        }
    )
})();

/*-------------------about section tabs----------------*/

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* if event.target contains 'tab-item' class and not contains 'active' class */
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            //active new 'tab-item'
            event.target.classList.add("active","outer-shadow");
            //deactive existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();
function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

/*----------------- hide all section except active-------------------*/
(() =>{
    
    const section = document.querySelectorAll(".section");
    section.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

window.addEventListener("load", () =>{
    //preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },600)
})
