export function getID(id) {
    return document.getElementById(id)
}


export function createEL(element) {
    return document.createElement(element)
}


export function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}