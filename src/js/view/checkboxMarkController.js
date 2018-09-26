import Selector from "../selctor";

export default () => {
    let inputsChecked = false


    Selector('.checkbox-container input').forEach(element => {
        // if (element.checked) {
        //     console.log(element)
        // }
        element.checked ? inputsChecked = true : false

    });


    console.log(inputsChecked)
}