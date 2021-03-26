
let current = "0,00";
let como = tx=>console.log(tx);

function load() {
    let el = Object.values(document.querySelectorAll(".hidden"));
    el.map(e=>e.addEventListener(
        "click",
        function(){setBool(e.id)},
        false)
    );

    let backv = document.querySelector('#back-value');
    let frontv = document.querySelector('#front-value');
    let history = "";
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
            if (frontv.value === "" ) {frontv.value="0"}
            current = frontv.value;
            history = parseInt(current
                    .split("")
                    .filter(el => {if (!isNaN(el)){return el}})
                    .join("")
                    )
                .toString()
                .padStart(3,"0");
            if (isNaN(history)) {history = "000"}
// como(`current1:${current}`);
// como(`history1:${history}`);
            if (history.length>5){
                let aux = "";
                let dif = 0;
                let ints = history.slice(0,-2);
                ints = ints.split("").reverse().join("");
                for (var i = 3; i < ints.length ; i+=3){
                    aux += ints.slice(-3+i,i)+".";
                    dif = ints.length - i;
                }
                ints = ints.split("").reverse().join("");
                aux = aux.split("").reverse().join("");
                ints = ints.slice(0,dif)+aux;
// como(`history 2:${history}`);
                history = ints+","+history.slice(-2);
// como(`current 2:${current}`);
// como(`history 3:${history}`);
// como(`inteiros:${ints} = ${typeof ints}`);
            } else {
                history = history.slice(0,-2)+","+history.slice(-2)
            }
            current = history;
            frontv.value = current;
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

    //  console.log('trocou  para ');
}    