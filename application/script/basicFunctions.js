


const basicf = {
    _toggleHidden: (elem, forcedTo) => {
        /*
        elem: node element
        forcedTo: boolean
        */
        if( (elem.style.display == "none" || forcedTo == false) && forcedTo != true) {
            elem.style.display = ""
        } else {
            elem.style.display = "none"
        }
    }

}