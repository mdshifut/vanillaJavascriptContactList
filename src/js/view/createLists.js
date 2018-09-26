import { createEL } from "../utility"
import { deleteList, edit, favorite } from "../controller/listMenuController";
import createOptionMenu from "../view/createOptionMenu";
import Selector from "../selctor";
import addNew from "../controller/addNew";

export default (contacts) => {
    let ul = createEL('ul')
    ul.id = 'contactListUL'
    ul.className = 'contact-list__ul '
    let filterdContacts


    if (Selector('#favBtn').hasClass('active')) {
        filterdContacts = contacts.filter(function(contact) {
            return contact.favorite
        })
    } else {
        filterdContacts = contacts
    }


    if (!filterdContacts.length) {
        let li = createEL('li')
        li.className = 'contact-list__li no-result'


        if (Selector('.search-box-wrpper').hasClass('active')) {
            li.innerHTML = '<p>There is no contact matched according to your search</p>'
        } else if (Selector('#favBtn').hasClass('active')) {
            li.innerHTML = '<p>There is no favorite contact</p>'
        } else {
            li.innerHTML = '<p>There is no contact</p>'
            let addNewbtn = createEL('button')
            addNewbtn.innerHTML = 'Add new contact'
            addNewbtn.addEventListener('click', addNew)
            li.appendChild(addNewbtn)
        }

        ul.appendChild(li)
    }
    filterdContacts.forEach(function(contact) {


        let li = createEL('li')
        li.className = 'contact-list__li'
        li.setAttribute('data-id', contact.id)
        ul.appendChild(li)

        let contactListHeader = createEL('div')
        contactListHeader.className = 'contact-list__header clearfix'
        li.appendChild(contactListHeader)


        let menu = createEL('div')
        menu.className = 'menu contact-menu'

        let menuUL = createOptionMenu([

            {
                text: contact.favorite ? 'Remove Favorite' : 'Add to Favorite',
                eventType: 'click',
                eventHandler: (e) => {
                    favorite(contact, e.target, contactListTilteHeading, )
                }
            }, {
                text: 'Edit',
                eventType: 'click',
                eventHandler: (e) => {
                    edit(contact, e.target)
                }
            }, {
                text: 'Delete',
                eventType: 'click',
                eventHandler: (e) => {
                    deleteList(li, contact.id, e)
                }
            },
        ])
        menu.appendChild(menuUL)
        contactListHeader.appendChild(menu)


        let contactListAvatar = createEL('div')
        contactListAvatar.className = 'contact-list__avatar'
        if (contact.profileImg) {
            let contactListAvataImg = createEL('img')
            contactListAvataImg.src = contact.profileImg
            contactListAvatar.appendChild(contactListAvataImg)
        } else {

            contactListAvatar.innerHTML = contact.name.trim().charAt(0).toUpperCase()
        }

        contactListHeader.appendChild(contactListAvatar)


        let contactListTilte = createEL('div')
        contactListTilte.className = 'contact-list__title'
        let contactListTilteHeading = createEL('h2')
        contactListTilteHeading.innerHTML = contact.name
        contactListTilte.appendChild(contactListTilteHeading)
        if (contact.favorite) {
            let contactListTilteHeadingIcon = createEL('i')
            contactListTilteHeadingIcon.className = 'fa fa-heart'
            contactListTilteHeading.appendChild(contactListTilteHeadingIcon)

        }
        let contactnum = document.createTextNode(contact.phone)
        contactListTilte.appendChild(contactnum)
        contactListHeader.appendChild(contactListTilte)




        let checkboxLabel = createEL('label')
        checkboxLabel.className = 'checkbox-container'

        let checkboxInput = createEL('input')
        checkboxInput.type = 'checkbox'
        checkboxInput.value = contact.id
        checkboxLabel.appendChild(checkboxInput)

        let checkboxSpan = createEL('span')
        checkboxSpan.className = 'checkmark'
        checkboxLabel.appendChild(checkboxSpan)
        contactListHeader.appendChild(checkboxLabel)

        let menuTriggerSpan = createEL('span')
        menuTriggerSpan.className = 'menu-trigger contact-menu-trigger'
        let menuTriggerSpanIcon = createEL('i')
        menuTriggerSpanIcon.className = 'fa fa-ellipsis-v'

        menuTriggerSpan.appendChild(menuTriggerSpanIcon)
        contactListHeader.appendChild(menuTriggerSpan)









        let contactListBody = createEL('div')
        contactListBody.className = 'contact-list__body'
        li.appendChild(contactListBody)
        let contactContentUl = createEL('ul')
        contactContentUl.className = 'contact-content__ul'
        contactListBody.appendChild(contactContentUl)

        for (let i in contact) {

            if (i !== 'name' && i !== 'id' && i !== 'favorite' && i !== 'profileImg') {





                let contactContentLi = createEL('li')
                contactContentLi.className = 'contact-content__li'
                let contactContentIcon = createEL('i')


                switch (i) {
                    case 'phone':
                        contactContentIcon.className = 'fa fa-phone'
                        break;
                    case 'email':
                        contactContentIcon.className = 'fa fa-envelope'
                        break;
                    case 'fb':
                        contactContentIcon.className = 'fa fa-facebook'
                        break;
                    case 'group':
                        contactContentIcon.className = 'fa fa-group'
                        break;

                }
                contactContentLi.appendChild(contactContentIcon)
                if (i !== 'group') {
                    let contactContentA = createEL('a')
                    contactContentA.href = ''
                    contactContentA.innerHTML = contact[i]
                    contactContentLi.appendChild(contactContentA)
                } else {
                    let contactContentA = document.createTextNode(contact[i])

                    contactContentLi.appendChild(contactContentA)
                }



                contactContentUl.appendChild(contactContentLi)


            }




        }



    })










    return ul
}