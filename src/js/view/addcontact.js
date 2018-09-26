import contactBodyCreator from './contactsbody'
import Selector from '../selctor'

import createlist from './createLists'
import events from './events'
export default function addContactToDom(contacts) {


    if (!Selector(document.body).child('container')) {
        document.body.appendChild(contactBodyCreator())
        Selector('.contact-list__wrapper').append(createlist(contacts))
        events()
        return false
    }

    Selector('.contact-list__wrapper').child('contact-list__ul').remove()




    Selector('.contact-list__wrapper').append(createlist(contacts))
    events()

}