// Removes leading whitespaces
function LTrim(value) {
    var re = /\s*((\S+\s*)*)/;
    return value.replace(re, "$1");
}

// Removes ending whitespaces
function RTrim(value) {
    var re = /((\s*\S+)*)\s*/;
    return value.replace(re, "$1");
}

// Removes leading and ending whitespaces
function trim(value) {
    return LTrim(RTrim(value));
}


//Toggle text
function toggleMe(toggleId, linktextId) {

    var toggle_id = document.getElementById(toggleId);
    var linktext_id = document.getElementById(linktextId);

    if (toggle_id.style.display == "block") {
        toggle_id.style.display = "none";
        linktext_id.innerHTML = "+";
    }
    else {
        toggle_id.style.display = "block";
        linktext_id.innerHTML = "-";
    }
}