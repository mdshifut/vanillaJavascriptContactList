import { contactLists } from '../data/contacts'
import form from "../view/form";
import { createEL } from "../utility"

import addNew from "../controller/addNew";
import addContactToDom from '../view/addcontact'
import Selector from "../selctor"
import modal from "../view/modal"


function emtyCotacts(param) {
    if (!contactLists.getContacts().length) {
        let li = createEL('li')
        li.className = 'contact-list__li no-result'



        li.innerHTML = '<p>There is no contact</p>'
        let addNewbtn = createEL('button')
        addNewbtn.innerHTML = 'Add new contact'
        addNewbtn.addEventListener('click', addNew)
        li.appendChild(addNewbtn)
        Selector('#contactListUL').append(li)
    }

}


export function multipleDelete() {
    let SselectedContracts = Selector('.checkbox-container input:checked')








    modal({
        type: 'warning',
        modalHeading: 'Delete Contact',
        confirmButtonText: 'Delete All',

        modalBody: (() => {
            let p = createEL('p')
            p.innerHTML = `Are you want delete <span> ${SselectedContracts.length()} </span> Contacts from the contacts list ?`
            return p
        })(),
        cencelButtonEvent: function() {
            SselectedContracts.forEach(function(element) {
                element.checked = false
            })

            Selector('.contact-list__ul').removeClass('checklist-is-active')
        },

        confirmButtonEvent: function() {
            SselectedContracts.forEach(function(element) {
                let id = parseInt(element.value.trim())
                Selector(element).parent('contact-list__li').remove()
                contactLists.deleteContact(id)
            })


            modal({
                type: 'successful',
                modalHeading: 'Successful',
                modalBody: (() => {
                    let p = createEL('p')
                    p.innerHTML = `The selected contracts has been deleted from the contacts list. `
                    return p
                })(),
                confirmButtonText: 'Ok',
            })






            emtyCotacts()


        }



    })










}


export function deleteList(li, id, e) {
    Selector(e.target).parent('contact-menu').removeClass('menu-is-open')


    modal({
        type: 'warning',
        modalHeading: 'Delete Contact',
        confirmButtonText: 'Delete',

        modalBody: (() => {
            let p = createEL('p')
            p.innerHTML = `Are you want delete <span> ${contactLists.getSingleContact(id).name.toUpperCase()} </span> from the contacts list ?`
            return p
        })(),


        confirmButtonEvent: function() {

            let deletedContact = contactLists.getSingleContact(id).name.toUpperCase()
            contactLists.deleteContact(id)
            li.parentNode.removeChild(li)

            modal({
                type: 'successful',
                modalHeading: 'Successful',
                modalBody: (() => {
                    let p = createEL('p')
                    p.innerHTML = `The contact <span> ${deletedContact} </span> has been deleted from the contacts list. `
                    return p
                })(),
                confirmButtonText: 'Ok',
            })

            emtyCotacts()




        }



    })


}


export function edit(contact, menuLi) {
    let editForm = form(contact, 'edit')

    modal({
        type: 'normal',
        modalHeading: 'Add new contact',
        modalBody: editForm,
        confirmButtonText: 'Save',
        confirmButtonEvent: () => {
            let edidtedContact = {}
            edidtedContact.id = contact.id
            Selector('.form__li input').forEach((element) => {
                contact[Selector(element).AttVal('name')] = Selector(element).val()
            })


            contactLists.updateContact(edidtedContact)


            addContactToDom(contactLists.getContacts())
            if (Selector('#favBtn').hasClass('active')) {

                Selector('#favBtn').removeClass('active')
                Selector('#allContactsBtn').addClass('active')

            }
            modal({
                type: 'successful',
                modalHeading: 'Successful',
                modalBody: (() => {
                    let p = createEL('p')
                    p.innerHTML = `The contact <span> ${contact.name} </span> has been updated.`
                    return p
                })(),
                confirmButtonText: 'Ok'
            })
        }
    })
    Selector(menuLi).parent('contact-menu').removeClass('menu-is-open')

}

export function favorite(contact, menuLi, heading) {

    let contactIndex = contactLists.getIndex(contact.id)



    if (contactLists.getContacts()[contactIndex].favorite) {
        contactLists.getContacts()[contactIndex].favorite = false
        menuLi.innerHTML = 'Add to Favorite'
        heading.removeChild(heading.querySelector('.fa'))
        modal({
            type: 'successful',
            modalHeading: 'Successful',
            modalBody: (() => {
                let p = createEL('p')
                p.innerHTML = `The contact <span> ${contactLists.getContacts()[contactIndex].name} </span> has been deleted from the favorite list.`
                return p
            })(),
            confirmButtonText: 'Ok',
        })

        if (!contactLists.getContacts().length) {
            emtyCotacts()
        } else if (contactLists.getContacts().filter(contact => { return contact.favorite }).length === 0) {
            let li = createEL('li')
            li.className = 'contact-list__li no-result'



            li.innerHTML = '<p>There is no contact in your favorite list</p>'

            Selector('#contactListUL').append(li)
        }




    } else {
        contactLists.getContacts()[contactIndex].favorite = true
        menuLi.innerHTML = 'Remove Favorite'
        let contactListTilteHeadingIcon = createEL('i')
        contactListTilteHeadingIcon.className = 'fa fa-heart'
        heading.appendChild(contactListTilteHeadingIcon)
        modal({
            type: 'successful',
            modalHeading: 'Successful',
            modalBody: (() => {
                let p = createEL('p')
                p.innerHTML = `The contact <span> ${contactLists.getContacts()[contactIndex].name} </span> has been added to the favorite list.`
                return p
            })(),
            confirmButtonText: 'Ok',
        })

    }

    Selector(menuLi).parent('contact-menu').removeClass('menu-is-open')
    if (Selector('#favBtn').hasClass('active')) {

        Selector(menuLi).parent('contact-list__li').remove()

    }
}