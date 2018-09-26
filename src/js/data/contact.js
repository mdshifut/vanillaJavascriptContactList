class Contact {
    constructor({ name = null, phone = null, email = null, fb = null, group = 'Other', id = null, favorite = false, profileImg = null }) {
        this.name = name
        this.phone = phone
        this.email = email
        this.fb = fb
        this.group = group
        this.id = id
        this.favorite = favorite
        this.profileImg = profileImg
    }
}


export default Contact