// PERSONALIZING
let timestamp = new Date();
let c = (query)=>document.querySelector(query);
let logtime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
let como = tx=>console.log(tx);
como('focused '+logtime);
function autof5(){
    location.reload();
    
}

let to = {
    lightBlack:['#222325','34,35,37'],
    mainBlack:['#1b1b1b','27,27,27'],
    red:['#d3322a','211,50,42'],
    green:['#006813','0,104,19'],
    gray:['#464646','70,70,70'],
    fontWhite:['#f8ffff','248,255,255'],
    fontGray:['#b8c2ca','184,194,202'],
    fontCyan:['#0fbbf2','15,187,242'],
    fontGreen:['#25c773','37,199,115'],
    fontRed:['#fa7170','250,113,112'],
}
function paint(element, color, font=false, opacity=1) {
    if (font) {
        return c(element).style.color = `rgba(${color[1]},${opacity})`;
    }
    return c(element).style.backgroundColor = `rgba(${color[1]},${opacity})`;
}



// EVENT LISTENERS
function load() {
    // window.addEventListener('focus', autof5, false);
    el.map(e=>e.addEventListener('click', function(){setBool(e.id)}, false));
    op.map(e=>e.addEventListener('click', slideType, false));
    frontv.addEventListener('click', inputToEnd, false);
    frontv.addEventListener('input', moneyFormatWhenTyping, false);
    status.addEventListener('click', flip, false);
}

// OPERATION expense, incoming and transfer input
let op = Object.values(document.querySelectorAll('#op-line1 div'));
op.map((e)=>paint('#'+e.id, to.fontWhite, true, 0.5));
paint('#ex', to.fontWhite, true);
let opIndex = 1;
let setBallMoveDefaultDistance = c('#op-line1 a').offsetWidth*2;
function slideType() {
    op.map((e)=>paint('#'+e.id, to.fontWhite, true, 0.5));
    switch (this.innerHTML){
        case 'Incoming':
            opIndex = 2;
            paint('#bkgrd', to.green);
            paint('#in', to.fontWhite, true);
            c('#op-icon-img').src = '/income.png';
            break;
        case 'Transfer':
            opIndex = 3;
            paint('#bkgrd', to.gray);
            paint('#tr', to.fontWhite, true);
            c('#op-icon-img').src = '/transfer.png';
            break;
        default:
            opIndex = 1;
            paint('#bkgrd', to.red);
            paint('#ex', to.fontWhite, true);
            c('#op-icon-img').src = '/expense.png';
            break;
    }
    c('#move').style.width = `${setBallMoveDefaultDistance*opIndex}px`;
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


// STATUS INPUT
let status = c('#status-container');
let statusTumbling = [
    { transform: 'scale(0.5,0.5)'},
    { transform: 'scale(1,1)'},
    { transform: 'scale(0.8,0.8)'},
    { transform: 'scale(1,1)'}
];
  
let statusTiming = {
    duration: 200,
    iterations: 1
}

function flip() {
    como("click");
    if (c('#status-container input').value === 'false') {

        // c('#status').style.transform = 'rotate(-180deg)';
        c('#status').src = "/like.png";
        c('#status-container input').value= 'true';
        c('#status').animate(statusTumbling, statusTiming);
    } else {
        // c('#status').style.transform = 'rotate(360deg)';
        c('#status').src = "/unlike.png";
        c('#status-container input').value= 'false';
        c('#status').animate(statusTumbling, statusTiming);
    }
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