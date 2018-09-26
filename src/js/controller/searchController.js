import { contactLists } from '../data/contacts'
import addContactToDom from '../view/addcontact'

export default function(e) {
    let filter = e.target.value.toUpperCase()
    let filteredContaracts = []

    contactLists.getContacts().forEach(contact => {
        if (contact.name.toUpperCase().indexOf(filter) > -1) {
            filteredContaracts.push(contact)
        }
    })
    addContactToDom(filteredContaracts)
}


// var input, filter, ul, li, a, i;
// input = document.getElementById("myInput");
// filter = input.value.toUpperCase();
// ul = document.getElementById("myUL");
// li = ul.getElementsByTagName("li");
// for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }
// }