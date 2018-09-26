import { createEL } from "../utility";
import Selector from "../selctor";
// {
//     type: 'warning' | 'successful' | 'normal',
//     modalHeading:'modal heading',
//     modalBody:'Modal body',
//     confirmButtonText:'confirm button text'
//     confirmButtonEvent:'event for confirm button'
//     cencelButtonEvent:'evetn for cancel button when clicked
// }
export default function(props) {
    // For reset autometic colse modal when Ok button is clicked
    let successfulTimeout = {}

    let modal = createEL('div')
    modal.className = 'modal'



    let overlay = createEL('div')
    overlay.className = 'overlay'
    Selector('.contact-list__wrapper').append(modal)
    Selector('.contact-list__wrapper').append(overlay)

    if (props.type === 'warning' || props.type === 'successful') {
        let icon = createEL('i')
        if (props.type === 'successful') {
            icon.className = 'fa fa-check-circle'

        } else {

            icon.className = 'fa fa-exclamation-triangle'
        }
        let h2 = createEL('h2')
        Selector(h2).append(icon)
        let text = document.createTextNode(props.modalHeading)
        Selector(h2).append(text)
        Selector(modal).append(h2)
        Selector(modal).append(props.modalBody)

    } else {
        let h2 = createEL('h2')
        let text = document.createTextNode(props.modalHeading)
        Selector(h2).append(text)
        Selector(modal).append(h2)
        Selector(modal).append(props.modalBody)

    }

    let buttonWrapper = createEL('div')
    buttonWrapper.className = 'button-wrapper clearfix'


    if (props.type === 'warning' || props.type === 'normal') {
        let buttonCancel = createEL('button')
        buttonCancel.className = 'button button--cancel'
        buttonCancel.innerHTML = 'Cancel'
        Selector(buttonWrapper).append(buttonCancel)

        Selector(buttonCancel).on('click', function() {

            Selector(modal).removeClass('modal-is-open')

            setTimeout(() => {
                Selector(modal).remove()
            }, 302);

            setTimeout(() => {
                Selector(overlay).removeClass('overlay-is-open')
            }, 305);

            setTimeout(() => {
                Selector(overlay).remove()
            }, 310);


            if (props.cencelButtonEvent) {
                props.cencelButtonEvent()
            }
        })
    }




    let buttonConfirm = createEL('button')
    buttonConfirm.className = 'button button--confirm'
    if (props.confirmButtonText) {
        buttonConfirm.innerHTML = props.confirmButtonText
    }
    Selector(buttonConfirm).on('click', props.confirmButtonEvent)
    Selector(buttonConfirm).on('click', function() {
        Selector(modal).removeClass('modal-is-open')

        setTimeout(() => {
            Selector(modal).remove()
        }, 302);

        setTimeout(() => {
            Selector(overlay).removeClass('overlay-is-open')
        }, 305);

        setTimeout(() => {
            Selector(overlay).remove()
        }, 310);
        clearTimeout(successfulTimeout.modalOpen)
        clearTimeout(successfulTimeout.modal)
        clearTimeout(successfulTimeout.modalOverlay)
    })
    Selector(buttonWrapper).append(buttonConfirm)
    Selector(modal).append(buttonWrapper)

    setTimeout(() => {
        Selector(overlay).addClass('overlay-is-open')
    }, 3);

    setTimeout(() => {
        Selector(modal).addClass('modal-is-open')
    }, 300);

    if (props.type === 'successful') {

        successfulTimeout.modalOpen = setTimeout(() => {


            Selector(modal).removeClass('modal-is-open')


        }, 3000);
        successfulTimeout.modal = setTimeout(() => {

            Selector(modal).remove()
            Selector(overlay).removeClass('overlay-is-open')


        }, 3310);
        successfulTimeout.modalOverlay = setTimeout(() => {

            Selector(overlay).remove()


        }, 3315);
    }
}