console.log('act')

function load() {
    let el = Object.values(document.querySelectorAll(".hidden"));
    el.map(e=>e.addEventListener(
        "click",
        function(){setBool(e.id)},
        false)
    );

    let backv = document.querySelector('#back-value');
    let frontv = document.querySelector('#front-value');
    let digited = [];
    frontv.addEventListener(
        'click',
        function() {
            let a = this.value.length;
            this.setSelectionRange(a, a);
        },
        false
    );
    frontv.addEventListener(
        'input',
        function() {
            let dft = ["0", ",", "0", "0"];
            let current = frontv.value.split("");
            if ( current > 4 ) {
                digited.push(current.pop());
                current.splice(-digited.length, digited.length);
                frontv.value = current.join("");
            }
            console.log(current);
            console.log(digited);

            

        },
        false
    );

    backv.addEventListener(
        'input',
        function() {
            /* receive front and respond*/
            
            
            backv.setAttribute('value', backv.value);
            console.log(backv.getAttribute('value'));
        },
        false
    );
}

function setBool(id) {
    let trigger = document.getElementById(id);
    let hidden = document.getElementsByName(id)[0];
    if (hidden.getAttribute("value") === "false") {
        hidden.setAttribute("value", "true");
        //trigger.innerHTML = "true";
        trigger.className = "hidden green";
    } else {
        hidden.setAttribute("value", "false");
        //trigger.innerHTML = "false";
        trigger.className = "hidden red";
    }

    //console.log('trocou  para ');
}    