function body(action, newcontent) {
    if (action === "get" ) {
        return document.body;
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
