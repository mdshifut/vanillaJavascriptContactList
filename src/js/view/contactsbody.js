import { createEL } from "../utility";
import createOptionMenu from "./createOptionMenu";
import addNew from "../controller/addNew";
import mark from "./mark";
import secarchController from "../controller/searchController";
import { contactLists } from '../data/contacts'
import addContactToDom from './addcontact'

export default () => {
    let headerTopMenu = createEL('div')
    headerTopMenu.className = 'menu header-top-menu'


    let menuUL = createOptionMenu([

        {
            text: 'Add new contact',
            eventType: 'click',
            eventHandler: addNew
        },

        {
            text: 'Mark',
            eventType: 'click',
            className: 'mark',
            eventHandler: mark
        }
    ])
    headerTopMenu.appendChild(menuUL)








    let contactsHeader = createEL('div')
    contactsHeader.className = 'contacts-header'

    contactsHeader.appendChild(headerTopMenu)

    // Create Search box
    let searchBtnicon = createEL('i')
    searchBtnicon.className = 'fa fa-angle-up'

    let searchBoxCloseBtn = createEL('button')
    searchBoxCloseBtn.id = 'searchBoxClose'
    searchBoxCloseBtn.appendChild(searchBtnicon)


    let searchInput = createEL('input')
    searchInput.type = 'text'
    searchInput.placeholder = 'Find contacts'
    searchInput.id = 'search'
    searchInput.addEventListener('keyup', secarchController)


    let searchBoxWrpper = createEL('div')
    searchBoxWrpper.className = 'search-box-wrpper'
    searchBoxWrpper.appendChild(searchInput)
    searchBoxWrpper.appendChild(searchBoxCloseBtn)

    searchBoxCloseBtn.addEventListener('click', function() {
        searchInput.value = ''
        searchBoxWrpper.classList.remove('active')
        addContactToDom(contactLists.getContacts())
    })

    let contactsHeaderTop = createEL('div')
    contactsHeaderTop.className = 'contacts-header__top clearfix'

    contactsHeaderTop.appendChild(searchBoxWrpper)


    // Contacts header top Heading
    let heading = createEL('h4')
    heading.className = 'contacts-header__top-inner'
    heading.innerHTML = 'Contacts'

    let contactsHeaderTopInnerHeading = createEL('div')
    contactsHeaderTopInnerHeading.className = 'contacts-header__top-inner contacts-header__top-inner--heading'
    contactsHeaderTopInnerHeading.appendChild(heading)

    contactsHeaderTop.appendChild(contactsHeaderTopInnerHeading)


    // Contacts header top search button

    let searchTriggerIcon = createEL('i')
    searchTriggerIcon.className = 'fa fa-search'

    let searchTriggerSpan = createEL('span')
    searchTriggerSpan.className = 'search-trigger'
    searchTriggerSpan.appendChild(searchTriggerIcon)
    searchTriggerSpan.addEventListener('click', function() {
        searchBoxWrpper.classList.add('active')
    })



    let contactsHeaderTopInnerSearch = createEL('div')
    contactsHeaderTopInnerSearch.className = 'contacts-header__top-inner contacts-header__top-inner--search'
    contactsHeaderTopInnerSearch.appendChild(searchTriggerSpan)

    contactsHeaderTop.appendChild(contactsHeaderTopInnerSearch)

    // Contacts header top menu button

    let menuTriggerIcon = createEL('i')
    menuTriggerIcon.className = 'fa fa-ellipsis-v'

    let menuTriggerSpan = createEL('span')
    menuTriggerSpan.className = 'menu-trigger header-menu'
    menuTriggerSpan.appendChild(menuTriggerIcon)


    let contactsHeaderTopInnerMenu = createEL('div')
    contactsHeaderTopInnerMenu.className = 'contacts-header__top-inner contacts-header__top-inner--menu'
    contactsHeaderTopInnerMenu.appendChild(menuTriggerSpan)


    contactsHeaderTop.appendChild(contactsHeaderTopInnerMenu)
    contactsHeader.appendChild(contactsHeaderTop)

    // Header buttons
    let contactsHeaderFavoriteBtn = createEL('span')
    contactsHeaderFavoriteBtn.id = 'favBtn'
    contactsHeaderFavoriteBtn.className = 'button'
    contactsHeaderFavoriteBtn.innerHTML = 'Favorites'


    let contactsHeaderAllContactsBtin = createEL('span')
    contactsHeaderAllContactsBtin.id = 'allContactsBtn'
    contactsHeaderAllContactsBtin.className = 'button active'
    contactsHeaderAllContactsBtin.innerHTML = 'All contacts'

    let contactsHeaderBottom = createEL('div')
    contactsHeaderBottom.className = 'contacts-header__bottom'
    contactsHeaderBottom.appendChild(contactsHeaderFavoriteBtn)
    contactsHeaderBottom.appendChild(contactsHeaderAllContactsBtin)

    contactsHeader.appendChild(contactsHeaderBottom)

    // Wrapper div
    let contactListWrapper = createEL('div')
    contactListWrapper.className = 'contact-list__wrapper'
    contactListWrapper.appendChild(contactsHeader)

    // Container
    let container = createEL('div')
    container.className = 'container'
    container.appendChild(contactListWrapper)


    return container


}