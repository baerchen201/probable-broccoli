const get = "get";
const set = "set"
//const body = document.body;

function body(action, newcontent) {
    if (action === "get" ) {
        return document.body.innerHTML;
    } else if (action === "set") {
        document.body.innerHTML = newcontent;
        return document.body.innerHTML;
    } else {
        return null;
    };
};
function getelement(element, type) {
    if (type === "id") {
        return document.getElementById(element);
    } else if (type === "class") {
        return document.getElementsByClassName(element);
    } else {
        return null;
    };
};
