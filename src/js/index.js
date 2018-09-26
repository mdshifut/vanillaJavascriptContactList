import "@babel/polyfill";
import Contact from './data/contact'
import { contactLists } from './data/contacts'
import optionMenu from './view/createOptionMenu'
import { createEL } from './utility'
import addContactToDom from './view/addcontact'

import Selector from "./selctor";
import { getID } from "./utility";



// contactLists.createNewContact(
//     new Contact({
//         name: 'Shifut Hossain',
//         phone: '01937585307',
//         email: 'mdshifut@gmail.com',
//         fb: 'facebook.com',
//         favorite: true,
//         profileImg: 'https://scontent.fdac2-1.fna.fbcdn.net/v/t1.0-9/30222315_2106056936294858_1593773578569944981_n.jpg?_nc_cat=103&_nc_eui2=AeFQ7G7hB3dmaEvuZl4dBasppEzcp_fhCK2lw7l-5fLQpBMEMrsU7ggFjXuyWrM-M7FaNhfHQ50M4qoUqdnN4OYHD_l_V8vebcKQ5wvIMqC-fA&oh=508f2ebbc228b7dc4492da0fa9d1742e&oe=5C2BA336'
//     })
// )

// contactLists.createNewContact(
//     new Contact({
//         name: 'rofik Hossain',
//         phone: '01937585307',
//         email: 'mdshifut@gmail.com',
//         fb: 'facebook.com',
//         favorite: true
//     })
// )
// contactLists.createNewContact(
//     new Contact({
//         name: 'hlskdf Hossain',
//         phone: '01937585307',
//         email: 'mdshifut@gmail.com',
//         fb: 'facebook.com',
//         favorite: true
//     })
// )

// contactLists.createNewContact(
//     new Contact({
//         name: 'jabab Hossain',
//         phone: '01937585307',
//         email: 'mdshifut@gmail.com',
//         fb: 'facebook.com',
//         favorite: true
//     })
// )

// contactLists.createNewContact(
//     new Contact({
//         name: 'arig  Hossain',
//         phone: '01937585307',
//         email: 'mdshifut@gmail.com',
//         fb: 'facebook.com',
//     })
// )
addContactToDom(contactLists.getContacts())


Selector('.header-menu').on('click', function() {
    Selector('.menu').removeClass('menu-is-open')
    Selector('.header-top-menu').addClass('menu-is-open')
})



Selector('#favBtn').on('click', function() {
    Selector('#allContactsBtn').removeClass('active')
    Selector('.search-box-wrpper').removeClass('active')
    Selector('#favBtn').addClass('active')
    addContactToDom(contactLists.getContacts())
})

Selector('#allContactsBtn').on('click', function() {
    Selector('#favBtn').removeClass('active')
    Selector('.search-box-wrpper').removeClass('active')
    Selector('#allContactsBtn').addClass('active')

    addContactToDom(contactLists.getContacts())

})









// Contact List
// Field
// Local Storage
// Search Option
// CRUD
// Favourite
// Avatar
// Selected delete