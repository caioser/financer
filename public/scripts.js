console.log('act')

function load() {
    let el = Object.values(document.querySelectorAll(".hidden"));
    el.map(e=>e.addEventListener(
        "click",
        function(){setBool(e.id)},
        false)
    );
}

function setBool(id) {
    let trigger = document.getElementById(id);
    let hidden = document.getElementsByName(id)[0];
    if (hidden.getAttribute("value") === "false") {
        hidden.setAttribute("value", "true");
        trigger.innerHTML = "true";
    } else {
        hidden.setAttribute("value", "false");
        trigger.innerHTML = "false";
    }

    //console.log('trocou para ');
}