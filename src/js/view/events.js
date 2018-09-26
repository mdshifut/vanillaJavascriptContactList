import Selector from '../selctor'

export default function eventInitilize() {


    document.addEventListener("click", (evt) => {
        const menu = document.querySelector(".menu.menu-is-open");
        const menuTrigger = document.querySelectorAll(".menu-trigger");
        let targetElement = evt.target; // clicked element
        let outsideClick = true


        do {


            function isItMenutrigger() {
                let menuTriggers = [...menuTrigger]

                let isMenutrigger = false
                menuTriggers.forEach(function(singleTrigger) {
                    if (targetElement == singleTrigger) {
                        isMenutrigger = true
                    }
                })

                return isMenutrigger
            }


            if (targetElement == menu || isItMenutrigger()) {
                // This is a click inside. Do nothing, just return.
                outsideClick = false
                break;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        if (outsideClick && menu) {
            menu.classList.remove('menu-is-open')
        }
    });





    Selector('.contact-menu-trigger').on('click', function() {

        Selector('.menu').removeClass('menu-is-open')
        Selector(this).parent().child('contact-menu').addClass('menu-is-open')
    })

}