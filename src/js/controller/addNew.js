import form from "../view/form";
import modal from "../view/modal";
import Selector from "../selctor";
import { createEL } from '../utility'

import addContactToDom from '../view/addcontact'
import Contact from '../data/contact'
import { contactLists } from '../data/contacts'
export default function(e) {
    if (e.target.tagName === 'LI') {
        Selector(e.target).parent('menu').removeClass('menu-is-open')
    }

    let addNewFrom = form({
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        fb: 'Facebook',
        group: 'Gorup',
        profileImg: 'Profile Image Link (Optional)'
    })


    modal({
        type: 'normal',
        modalHeading: 'Add new contact',
        modalBody: addNewFrom,
        confirmButtonText: 'Save',
        confirmButtonEvent: () => {
            let contact = {}
            Selector('.form__li input').forEach((element) => {
                contact[Selector(element).AttVal('name')] = Selector(element).val()
            })
            contactLists.createNewContact(
                new Contact(contact)
            )
            if (Selector('#favBtn').hasClass('active')) {

                Selector('#favBtn').removeClass('active')
                Selector('#allContactsBtn').addClass('active')

            }
            addContactToDom(contactLists.getContacts())
            modal({
                type: 'successful',
                modalHeading: 'Successful',
                modalBody: (() => {
                    let p = createEL('p')
                    p.innerHTML = `The contact <span> ${contact.name} </span> has been added to the contact list.`
                    return p
                })(),
                confirmButtonText: 'Ok'
            })
        }
    })


}