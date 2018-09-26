class Contacts {
    constructor() {
        this.contractLists = []
    }


    getContacts() {
        return this.contractLists
    }

    createNewContact(contact) {
        contact.id = this.contractLists.length + 1
        this.contractLists.push(contact)
    }

    deleteContact(contactId) {
        let index = this.getIndex(parseInt(contactId))
        if (index >= 0) {
            this.contractLists.splice(this.getIndex(contactId), 1)
        }

    }

    updateContact(contact) {

        let index = this.getIndex(contact.id)

        for (let i in contact) {


            this.contractLists[index][i] = contact[i]
        }
    }

    getSingleContact(contactId) {
        let index = this.getIndex(contactId)
        return this.contractLists[index]
    }

    getIndex(contactId) {
        return this.contractLists.findIndex(function(contact) {
            return contact.id === contactId
        })
    }
}


export const contactLists = new Contacts()