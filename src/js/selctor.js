function Selector(selector) {


    class Selector {


        constructor(selector) {
            this.el = (() => {
                if (typeof selector === 'string') {

                    let selctors = document.querySelectorAll(selector)

                    return [...selctors]
                }
                return selector
            })()

        }


        on(type, cb) {
            if (Array.isArray(this.el)) {
                this.el.forEach(element => {
                    element.addEventListener(type, cb)


                });
            } else {
                this.el.addEventListener(type, cb)
            }

        }

        remove() {
            if (Array.isArray(this.el)) {

                this.el.forEach(element => {
                    element.parentElement.removeChild(element)


                });
            } else {
                this.el.parentElement.removeChild(this.el)
            }

        }

        addClass(className) {

            if (Array.isArray(this.el)) {
                this.el.forEach(element => {
                    element.classList.add(className)


                });

            } else {
                this.el.classList.add(className)
            }
        }

        removeClass(className) {

            if (Array.isArray(this.el)) {
                if (this.el) {
                    this.el.forEach(element => {
                        element.classList.remove(className)
                    });
                }
            } else {
                if (this.el) {
                    this.el.classList.remove(className)
                }
            }
        }





        parent(className) {







            if (Array.isArray(this.el)) {



            } else {

                let targetElement = this.el
                if (className) {
                    do {

                        if (targetElement.classList.contains(className)) {
                            break;
                        }


                        targetElement = targetElement.parentNode;
                    } while (targetElement);
                    return new Selector(targetElement);
                } else {
                    return new Selector(targetElement.parentNode)
                }
            }
        }


        child(className) {
            if (Array.isArray(this.el)) {
                let childElements = [];
                this.el.forEach(function(element) {


                    [...element.childNodes].forEach(function(element) {
                        if (element.nodeType === 1) {

                            if (element.classList.contains(className)) {
                                childElements.push(element)
                            }
                        }

                    })

                })
                if (childElements.length === 0) {
                    return false
                } else {

                    return new Selector(childElements)
                }

            } else {
                let childElements = [];
                [...this.el.childNodes].forEach(function(element) {

                    if (element.nodeType === 1) {
                        if (element.classList.contains(className)) {
                            childElements.push(element)
                        }
                    }

                })
                if (childElements.length === 0) {

                    return false
                } else {

                    return new Selector(childElements)
                }
            }
        }


        hasClass(className) {

            if (Array.isArray(this.el)) {
                let condiion
                var BreakException = {};

                try {
                    this.el.forEach(element => {
                        condiion = element.classList.contains(className)
                        if (condiion) throw BreakException;
                    });
                } catch (e) {
                    if (e !== BreakException) throw e;
                }

                return condiion
            } else {
                return this.el.classList.contains(className)
            }
        }


        append(newElement) {

            if (Array.isArray(this.el)) {

                this.el.forEach(element => {
                    element.appendChild(newElement)
                });
                return new Selector(this.el)

            } else {

                this.el.appendChild(newElement)

                return new Selector(this.el)
            }
        }

        val(value) {
            if (value) {
                this.el.value = value
                return new Selector(this.el)
            }

            return this.el.value
        }

        AttVal(attr) {
            // if (value) {
            //     this.el.value = value
            //     return new Selector(this.el)
            // }

            return this.el.getAttribute(attr)
        }

        length() {
            // if (value) {
            //     this.el.value = value
            //     return new Selector(this.el)
            // }

            return this.el.length
        }

        forEach(cb) {
            this.el.forEach((element, index, arr) => {
                cb(element, index, arr)
            })
        }
        every(cb) {
            this.el.every((element, index, arr) => {
                cb(element, index, arr)
            })
        }

    }

    return new Selector(selector)
}



export default Selector