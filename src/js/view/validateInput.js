import Selector from "../selctor";

export default function(input, submitButton) {
    Selector(input).on('change', function() {
        console.log(this)
    })

}