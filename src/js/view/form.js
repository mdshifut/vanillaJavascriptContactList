import Selector from "../selctor";
import { createEL } from '../utility'

export default function(contact, type) {



    let fromUl = createEL('ul')
    fromUl.className = 'form'




    for (let i in contact) {


        let fromLi = createEL('li')
        fromLi.className = 'form__li'
        let fromInputIcon = createEL('i')


        switch (i) {
            case 'name':
                {
                    fromInputIcon.className = 'fa fa-user'

                    let fromInput = createEL('input')
                    fromInput.type = 'text'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {
                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }
            case 'phone':
                {
                    fromInputIcon.className = 'fa fa-phone'

                    let fromInput = createEL('input')
                    fromInput.type = 'text'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {

                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }
            case 'email':
                {
                    fromInputIcon.className = 'fa fa-envelope'

                    let fromInput = createEL('input')
                    fromInput.type = 'email'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {

                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }
            case 'fb':
                {
                    fromInputIcon.className = 'fa fa-facebook'

                    let fromInput = createEL('input')
                    fromInput.type = 'text'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {

                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }
            case 'group':
                {
                    fromInputIcon.className = 'fa fa-group'
                    let fromInput = createEL('input')
                    fromInput.type = 'text'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {

                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }
            case 'profileImg':
                {
                    fromInputIcon.className = 'fa fa-user-circle-o'

                    let fromInput = createEL('input')
                    fromInput.type = 'text'
                    fromInput.placeholder = contact[i]
                    fromInput.name = i
                    if (type === 'edit') {

                        Selector(fromInput).val(contact[i])
                    }
                    fromLi.appendChild(fromInput)
                    fromLi.appendChild(fromInputIcon)
                    break;
                }









        }

        fromUl.appendChild(fromLi)
    }
    return fromUl




}