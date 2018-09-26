export default (optionsArr) => {
    // function take an array of objects as argument
    // object look like {text:'text for list',eventType:'click', eventHandler:clickOccur}



    let ul = document.createElement('ul')

    optionsArr.forEach(option => {
        let li = document.createElement('li')
        let textNode = document.createTextNode(option.text)
        li.appendChild(textNode)
        if (option.eventType) {
            li.addEventListener(option.eventType, option.eventHandler)
        }
        if (option.className) {
            li.className = option.className
        }
        ul.appendChild(li)
    });

    return ul



}