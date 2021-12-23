
// =========================================</[ Styling ]\>========================================= ; like bruh but idk web and css and this just 5 min copilot test
// create a div with an input                                                                            jeez this grew quite alot
var div = document.createElement('div');
div.innerHTML += '<h1 id="1" class="vanishD"></h1>';
div.innerHTML += '<h1 id="2" class="vanishD">C</h1>';
div.innerHTML += '<h1 id="3" class="vanishD">o</h1>';
div.innerHTML += '<h1 id="4" class="vanishD">l</h1>';
div.innerHTML += '<h1 id="5" class="vanishD">o</h1>';
div.innerHTML += '<h1 id="6" class="vanishD">r</h1>';
div.innerHTML += '<h1 id="7" class="vanishD">-</h1>';
div.innerHTML += '<h1 id="8" class="vanishD">V</h1>';
div.innerHTML += '<h1 id="9" class="vanishD">i</h1>';
div.innerHTML += '<h1 id="10" class="vanishD">e</h1>';
div.innerHTML += '<h1 id="11" class="vanishD">w</h1>';


div.innerHTML += '<div></div<><input type="text" id="input" />';

div.style.cursor = 'none';
var icon = document.querySelector('link[rel="icon"]');
// ==================</[ input ]\>==================
// style the input to have flat ui with Segoe UI font
div.querySelector('input').style.border = 'none';
div.querySelector('input').style.background = 'transparent';
div.querySelector('input').style.fontSize = '1.5em';
div.querySelector('input').style.padding = '0.5em';
div.querySelector('input').style.outline = 'none';
div.querySelector('input').style.fontFamily = 'Segoe UI Light';

// show bottom border on input
div.querySelector('input').style.borderBottom = '2px solid #17181a';

//increase character sapaceing
div.querySelector('input').style.letterSpacing = '0.1em';

// disable input spell check
div.querySelector('input').spellcheck = false;

// align text to center
div.querySelector('input').style.textAlign = 'center';
div.querySelector('input').style.cursor = 'none';
div.querySelector('input').placeholder = "Enter a color";
div.querySelector('input').classList.add('plcDark');




// ==================</[ H1 ]\>==================

// change h1 font to Segoe UI Light
div.querySelector('h1').style.fontFamily = 'Segoe UI Light';
div.querySelector('h1').style.letterSpacing = '0.1em';

div.querySelector('h1').style.textAlign = 'center';

//add left padding to h1
div.querySelector('h1').style.paddingRight = '0.em';

// enlarge h1
div.querySelector('h1').style.fontSize = '3em';
div.querySelector('h1').style.cursor = 'none';
div.querySelector('h1').classList.add = 'none';

document.body.appendChild(div);



// ==================</[ RGB-val ]\>==================

var color = '#17181a';

//add text to bottom right of screen
var p = document.createElement('p');

p.innerHTML = '255, 255, 255';
p.style.position = 'fixed';
p.style.bottom = '0';
p.style.right = '2em';
p.style.fontSize = '1em';
p.style.fontFamily = 'Segoe UI Light';
p.style.letterSpacing = '0.1em';
p.style.textAlign = 'center';
p.style.color = color;
p.style.padding = '0.5em';
p.style.background = 'transparent';
p.style.border = '2px solid ' + color;
p.style.opacity = '0';
p.style.cursor = 'none ';
p.classList.add('pCl')

// make p unseletable
p.onselectstart = function () {
    return false;
}
document.body.appendChild(p);


// center the div
div.style.position = 'absolute';
div.style.left = '50%';
div.style.top = '50%';
div.style.transform = 'translate(-50%, -50%)';

// ==================</[ Reset-button ]\>==================

// add flat ui button at middle-bottom of screen
var button = document.createElement('button');
button.innerHTML = '<i class="material-icons">Reset</i>';
button.style.position = 'fixed';
// align button to middle-bottom of screen
button.style.position = 'absolute';
button.style.bottom = '1%';
button.style.right = '48.5%';
button.style.background = 'transparent';

button.style.border = 'solid 1px';
button.style.borderColor = '#17181a';
button.style.borderRadius = '0.2em';
button.style.textAlign = 'center';

//change button text font to Segoe UI Light
button.style.fontFamily = 'Segoe UI';
button.style.letterSpacing = '0.1em';
button.style.fontSize = '1em';

button.style.opacity = '0';
button.style.cursor = 'none';
button.classList.add('resetButton');
document.body.appendChild(button);


document.getElementById('cu').style.cursor = 'none';

document.getElementById('lmg').style.cursor = 'none';
// =========================================</[ Script.js ]\>=========================================



// Make h1 unselectable
div.querySelector('h1').onselectstart = function () {
    return false;
}


//listen click on p
p.addEventListener('click', function() {
    if (pVis){
        copyToClipboard(p.innerHTML);
        if (lght){
            Toastify({
                text: "Color Copied To Clipboard!",
                className: "info",
                style: {
                  background: "#17181a",
                  opacity: '0.9',
                  color: "#edf0f5",
                  fontFamily: 'Segoe UI',
                  border: '1px solid #fff',
                  cursor: 'none',
                }
              }).showToast();
        }
        else{
            Toastify({
                text: "Color Copied To Clipboard!",
                className: "info",
                style: {
                  background: "#edf0f5",
                  opacity: "0.9",
                  color: "#17181a",
                  fontFamily: 'Segoe UI',
                  border: '1px solid #000',
                  cursor: 'none',
                }
              }).showToast();
        }
    }
});


function ChangeColRubb(){
    if (lght == true){
        document.getElementById(1).className = "vanishL";
        document.getElementById(2).className = "vanishL";
        document.getElementById(3).className = "vanishL";
        document.getElementById(4).className = "vanishL";
        document.getElementById(5).className = "vanishL";
        document.getElementById(6).className = "vanishL";
        document.getElementById(7).className = "vanishL";
        document.getElementById(8).className = "vanishL";
        document.getElementById(9).className = "vanishL";
        document.getElementById(10).className = "vanishL";
        document.getElementById(11).className = "vanishL";
    }
    else {
        document.getElementById(1).className = "vanishD";
        document.getElementById(2).className = "vanishD";
        document.getElementById(3).className = "vanishD";
        document.getElementById(4).className = "vanishD";
        document.getElementById(5).className = "vanishD";
        document.getElementById(6).className = "vanishD";
        document.getElementById(7).className = "vanishD";
        document.getElementById(8).className = "vanishD";
        document.getElementById(9).className = "vanishD";
        document.getElementById(10).className = "vanishD";
        document.getElementById(11).className = "vanishD";

    }

}

//listen for click on lmg
document.getElementById('lmg').addEventListener('click', function() {
    //Open web page
    window.open('https://github.com/BrAtUkA');
});

//invert lmg on hover
document.getElementById('lmg').addEventListener('mouseover', function() {
    if (lght == true) {
        document.getElementById('lmg').style.filter = 'invert(70%)';
    }
    else {
        document.getElementById('lmg').style.filter = 'invert(20%)';
    }

    document.getElementById('lmg').style.transition = 'all 0.5s ease-in-out';
});

document.getElementById('lmg').addEventListener('mouseleave', function() {
    if (lght == true) {
        document.getElementById('lmg').style.filter = 'invert(100%)';
    }
    else{
        document.getElementById('lmg').style.filter = 'invert(0%)';
    }

    document.getElementById('lmg').style.transition = 'all 0.5s ease-in-out';
});


//listen for click on button reset
button.addEventListener('click', function () {
    p.style.opacity = '0';
    p.style.transition = 'opacity 0.5s ease-in-out';
    p.style.cursor = 'none';
    button.style.cursor = 'none';
    pVis = false;
    //Change title
    document.getElementsByClassName('wrapper')[0].style.opacity = '1';
    document.getElementsByClassName('wrapper')[0].style.transition = 'opacity 1s ease-in-out';
    
    div.querySelector('input').value = '';
    // reset color
    ChangeColor('#17181a', '#ffffff', '#17181a');


    document.title = 'Color View';
    icon.href = 'https://cdn.discordapp.com/attachments/900002221188583474/916943588665999370/favico.png';

    button.style.opacity = '0';
    button.style.transition = 'opacity 0.5s ease-in-out';

});

// list of all hex chars
var hexs = ['a', 'b', 'c', 'd', 'e', 'f',
            'A', 'B', 'C', 'D', 'E', 'F',
             '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ' '];

// check if str contains a letter not in hexs
function isHex(str) {
    for (var i = 0; i < str.length; i++) {
        if (hexs.indexOf(str[i]) == -1) {
            return false;
        }
    }
    return true;
}


var previn
var pVis = false;
// add an input even listener to the input
input.addEventListener('input', async function(e) {

    // console.log(e.target.value);
    // console.log(isHex(e.target.value));

    if (!isHex(e.target.value)) {
        input.value = input.value.substring(0, input.value.length - 1);
    }

    if (input.value.length > 13) {
        input.value = previn;
    }

    // get the value of the input
    var value = '#' + e.target.value;
    value = value.substring(0, 7);

    //check if the value is a valid hex color
    if (value.match(/^#[0-9a-f]{6}$/i)) {
        // remove wrapper div
        document.getElementsByClassName('wrapper')[0].style.opacity = '0';
        document.getElementsByClassName('wrapper')[0].style.transition = 'opacity 1s ease-in-out';


        // set title to value
        document.title = 'Viewing ' + value;
        
        //limit input to 6 chars
        if (input.value.length > 6) {
            input.value = previn;
        }
        
        color = OppBrightnessOf(value);
        p.innerHTML = hexToRgb(value).r + ', ' + hexToRgb(value).g + ', ' + hexToRgb(value).b;
        ChangeColor(color, value, value);
        
        //if not PVis set p and button opacity to 1 and cursor to pointer
        if (!pVis){
            p.style.opacity = '1';
            p.style.transition = 'opacity 0.5s ease-in-out';
            button.style.opacity = '1';
            button.style.transition = 'opacity 0.5s ease-in-out';
            pVis = true;
        }
    }

    value = 'rgb(' + e.target.value + ')';
    // check if the value is a valid rgb color
    if (value.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/)) {
        document.getElementsByClassName('wrapper')[0].style.opacity = '0';
        document.getElementsByClassName('wrapper')[0].style.transition = 'opacity 1s ease-in-out';
        //console.log('rgb')
        
        var vals = [input.value.split(',')[0], input.value.split(',')[1], input.value.split(',')[2]];
        // check if the values are in range
        for (var i = 0; i < 4; i++) {
            if (vals[i] > 255) {
                vals[i] = 255;
            }
        }
        document.title = 'Viewing ' + 'rgb('+ vals[0] + ', ' + vals[1] + ', ' + vals[2] + ')';
        
        var hexCol = '#' + rgbToHex(vals[0]) + rgbToHex(vals[1]) + rgbToHex(vals[2]);
        
        color = OppBrightnessOf(hexCol);
        p.innerHTML = hexCol.toUpperCase();
        ChangeColor(color, value, hexCol);

        if (!pVis){
            p.style.opacity = '1';
            p.style.transition = 'opacity 0.5s ease-in-out';
            button.style.opacity = '1';
            button.style.transition = 'opacity 0.5s ease-in-out';
            pVis = true;
        }
    }

    previn = e.target.value;
});

var prevCol
var lght = false;
async function ChangeColor(color, value, hexCol) {

        p.style.color = color;
        p.style.border = '2px solid ' + color;
        p.style.transition = 'all 1s ease';

        // change color of h1 input and border with a slow fade to color change
        div.querySelector('h1').style.color = color;
        div.querySelector('h1').style.transition = 'color 0.5s ease';
        
        div.querySelector('input').style.color = color;
        div.querySelector('input').style.transition = 'all 0.4s ease-in-out';

        div.querySelector('input').style.borderBottom = '2px solid ' + color;

        button.style.borderColor = color;
        button.style.color = color;
        button.style.transition = 'all 0.4s ease-in-out';

        // set the background color
        document.body.style.backgroundColor = value;
        document.body.style.transition = 'background-color 1s ease';

        if (color == '#edf0f5'){
            document.getElementById('mouse').src = 'curW.png';

            document.getElementById('lmg').style.filter = 'invert(100%)';
            document.getElementById('lmg').style.transition = 'filter 1s ease';
            div.querySelector('input').classList.remove('plcDark');
            div.querySelector('input').classList.add('plcLight');

            lght = true;
        }
        else{
            document.getElementById('mouse').src = 'curB.png';

            document.getElementById('lmg').style.filter = 'invert(0%)';
            document.getElementById('lmg').style.transition = 'filter 1s ease';
            div.querySelector('input').classList.remove('plcLight');
            div.querySelector('input').classList.add('plcDark');
            lght = false;
        }
        ChangeColRubb(lght);
        // only get new icon if color is different
        if (prevCol != hexCol || prevCol == undefined) {
            // await response from https://some-random-api.ml/canvas/colorviewer, set icon herf to it
            
            // change the icon image
            icon.href = 'https://some-random-api.ml/canvas/colorviewer?hex=' + hexCol.substring(1);
            console.log('New iconColor Requested! : ' + icon.href);

            prevCol = hexCol;
        }

}

//hexcolor To image.png

// function to tell if color is dark or light
function OppBrightnessOf(color) {
    var r = parseInt(color.substr(1, 2), 16);
    var g = parseInt(color.substr(3, 2), 16);
    var b = parseInt(color.substr(5, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#17181a' : '#edf0f5';
}

//rgb to hex
function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

// hex to rgb funtion
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function copyToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

const ball = document.getElementById("mouse")

document.body.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });



// get current resolution

var e = document.documentElement,
    g = document.getElementsByTagName('body')[0],
    x = window.innerWidth || e.clientWidth || g.clientWidth,
    y = window.innerHeight|| e.clientHeight|| g.clientHeight;
console.log(x + 'x' + y);

let mouseX = 0;
let mouseY = 0;
let speed = 0.2;

let ballX = 0;
let ballY = 0;

function animate(){
    x = window.innerWidth || e.clientWidth || g.clientWidth,
    y = window.innerHeight|| e.clientHeight|| g.clientHeight;

    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    if (x - ballX < 60 && y - ballY < 60){
        if(x - ballX < 20) {ball.style.left = x - 20 + "px";} else {ball.style.left = ballX + "px";}
        if(y - ballY < 20) {ball.style.top = y - 20 + "px";} else {ball.style.top = ballY + "px";}

    } else if (y - ballY < 60){
        ball.style.left = ballX + "px";
        if(y - ballY < 20) {ball.style.top = y - 20 + "px";} else {ball.style.top = ballY + "px";}
        speed = 0.15;

    } else if (x - ballX < 60){
        if(x - ballX < 20) {ball.style.left = x - 20 + "px";} else {ball.style.left = ballX + "px";}
        ball.style.top = ballY + "px";
        speed = 0.15;

    } else{
        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";
        speed = 0.2;
    }

    prevX = ballX - 10;
    prevY = ballY - 10 ;
    requestAnimationFrame(animate);
}
animate();