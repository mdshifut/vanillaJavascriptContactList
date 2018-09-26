import { multipleDelete } from "../controller/listMenuController";
import Selector from "../selctor";
import { createEL } from "../utility";


export default (e) => {
    let deletebtnAppend = false

    let target = e.target
    Selector('.contact-list__ul').addClass('checklist-is-active')
    Selector(target).parent('menu').removeClass('menu-is-open')

    target.style.display = 'none'
    let markAll = createEL('li')
    markAll.innerHTML = 'Mark All'
    Selector(target).parent().append(markAll)
    Selector(markAll).on('click', function() {
        Selector('.checkbox-container input').forEach(function(element) {
            element.checked = true
        })
        if (!deletebtnAppend) {
            Selector(target).parent().append(deletemarke)
            deletebtnAppend = true
        }
    })


    let unmarkAll = createEL('li')
    unmarkAll.innerHTML = 'Unmark All'
    Selector(target).parent().append(unmarkAll)
    Selector(unmarkAll).on('click', function() {
        Selector('.checkbox-container input').forEach(function(element) {
            element.checked = false
        })
        Selector('.contact-list__ul').removeClass('checklist-is-active')
        target.style.display = 'block'
        Selector(markAll).remove()
        Selector(unmarkAll).remove()
        Selector(deletemarke).remove()
    })


    let deletemarke = createEL('li')
    deletemarke.innerHTML = 'Delete'
    Selector(deletemarke).on('click', function() {
        Selector(deletemarke).parent('menu').removeClass('menu-is-open')
        target.style.display = 'block'
        Selector(markAll).remove()
        Selector(unmarkAll).remove()
        Selector(deletemarke).remove()
        multipleDelete()
    })





    Selector('.checkbox-container input').on('change', function() {
        let inputsChecked = false

        let checkboxInputs = Selector('.checkbox-container input').el

        for (let index = 0; index < checkboxInputs.length; index++) {
            if (checkboxInputs[index].checked) {
                inputsChecked = true

                break
            }

        }

        if (inputsChecked) {
            if (!deletebtnAppend) {
                Selector(target).parent().append(deletemarke)
                deletebtnAppend = true
            }
        } else {

            target.style.display = 'block'

            Selector('.contact-list__ul').removeClass('checklist-is-active')
            Selector(markAll).remove()
            Selector(unmarkAll).remove()
            Selector(deletemarke).remove()
        }
    })

}