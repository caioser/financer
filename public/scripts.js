// PERSONALIZING
let timestamp = new Date();
let logtime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
let como = tx=>console.log(tx);
como('focused '+logtime);
function autof5(){
    location.reload();
    
}



// EVENT LISTENERS
function load() {
    window.addEventListener('focus', autof5, false);
    el.map(e=>e.addEventListener('click', function(){setBool(e.id)}, false));
    frontv.addEventListener('click', inputToEnd, false);
    frontv.addEventListener('input', moneyFormatWhenTyping, false);
}


// VALUE INPUT
let backv = document.querySelector('#back-value');
let frontv = document.querySelector('#front-value');
let current = '0,00';
let historic = '';

function inputToEnd() {
    let a = this.value.length;
    this.setSelectionRange(a, a);
}
 
function moneyFormatWhenTyping() {
    if (frontv.value === '' ) {frontv.value='0'}
    current = frontv.value;
    historic = parseInt(current
            .split('')
            .filter(el => {if (!isNaN(el)){return el}})
            .join('')
            )
        .toString()
        .padStart(3,'0');
    if (isNaN(historic)) {historic = '000'}
    backv.value = historic.slice(0,-2)+'.'+historic.slice(-2);
    frontv.setAttribute('value', backv.value)
    if (historic.length>5){
        let aux = '';
        let dif = 0;
        let ints = historic.slice(0,-2);
        
        ints = ints.split('').reverse().join('');
        for (var i = 3; i < ints.length ; i+=3){
            aux += ints.slice(-3+i,i)+'.';
            dif = ints.length - i;
        }
        ints = ints.split('').reverse().join('');
        aux = aux.split('').reverse().join('');
        ints = ints.slice(0,dif)+aux;
        historic = ints+','+historic.slice(-2);
    } else {
        historic = historic.slice(0,-2)+','+historic.slice(-2)
    }
    current = historic;
    frontv.value = current;
}



// HIDDEN INPUTS WITH SWITCHERS: STATUS, REPEAT
let el = Object.values(document.querySelectorAll('.hidden'));
function setBool(id) {
    let trigger = document.getElementById(id);
    let hidden = document.getElementsByName(id)[0];
    if (hidden.getAttribute('value') === 'false') {
        hidden.setAttribute('value', 'true');
        trigger.className = 'hidden green';
    } else {
        hidden.setAttribute('value', 'false');
        trigger.className = 'hidden red';
    }
}    