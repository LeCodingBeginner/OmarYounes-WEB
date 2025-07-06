// let's make the first exercice interface fully fonctionning:

// let's declare all of the variables from the DOM:

const radio_1 = document.getElementById("e1-qst1");
const radio_2 = document.getElementById("e1-qst2");
const radio_3 = document.getElementById("e1-qst3");
const radio_4 = document.getElementById("e1-qst4");
const radio_5 = document.getElementById("e1-qst5");

const button11 = document.getElementById("cor-1");
const button12 = document.getElementById("ver-1");

const button21 = document.getElementById("cor-2");
const button22 = document.getElementById("ver-2");

const button31 = document.getElementById("cor-3");
const button32 = document.getElementById("ver-3");

const button41 = document.getElementById("cor-4");
const button42 = document.getElementById("ver-4");

const button51 = document.getElementById("cor-5");
const button52 = document.getElementById("ver-5");

const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");
const message5 = document.getElementById("message5");

// now let's define the function needed:
// display message:

function displayStyleCorrect(num){
    if (num == "1"){
        message1.textContent = "Bravo! C'est la bonne réponse!";
        message1.style.width = "350px";
        message1.style.height = "40px";
        message1.style.backgroundColor = "rgb(195, 223, 213)";
        message1.style.color = "rgb(57, 104, 87)";
        message1.style.textAlign = "center";
        message1.style.padding = "5px";
        message1.style.borderRadius = "5px";
        message1.style.display = "block";

        
    }

    if (num == "2"){
        message2.textContent = "Bravo! C'est la bonne réponse!";
        message2.style.width = "350px";
        message2.style.height = "40px";
        message2.style.backgroundColor = "rgb(195, 223, 213)";
        message2.style.color = "rgb(57, 104, 87)";
        message2.style.textAlign = "center";
        message2.style.padding = "5px";
        message2.style.borderRadius = "5px";
        message2.style.display = "block";

    }

    if (num == "3"){
        message3.textContent = "Bravo! C'est la bonne réponse!";
        message3.style.width = "350px";
        message3.style.height = "40px";
        message3.style.backgroundColor = "rgb(195, 223, 213)";
        message3.style.color = "rgb(57, 104, 87)";
        message3.style.textAlign = "center";
        message3.style.padding = "5px";
        message3.style.borderRadius = "5px";
        message3.style.display = "block";
    }

    if (num == "4"){
        message4.textContent = "Bravo! C'est la bonne réponse!";
        message4.style.width = "350px";
        message4.style.height = "40px";
        message4.style.backgroundColor = "rgb(195, 223, 213)";
        message4.style.color = "rgb(57, 104, 87)";
        message4.style.textAlign = "center";
        message4.style.padding = "5px";
        message4.style.borderRadius = "5px";
        message1.style.display = "block";
    }

    else if (num == "5"){
        message5.textContent = "Bravo! C'est la bonne réponse!";
        message5.style.width = "350px";
        message5.style.height = "40px";
        message5.style.backgroundColor = "rgb(195, 223, 213)";
        message5.style.color = "rgb(57, 104, 87)";
        message5.style.textAlign = "center";
        message5.style.padding = "5px";
        message5.style.borderRadius = "5px";
        message1.style.display = "block";
    }
}

// incorrect message display:
function displayStyleInCorrect(num){
    if (num == "1"){
        message1.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        message1.style.width = "350px";
        message1.style.height = "60px";
        message1.style.backgroundColor = "rgb(242, 236, 236)";
        message1.style.color = "rgb(136, 50, 50)";
        message1.style.textAlign = "center";
        message1.style.padding = "5px";
        message1.style.borderRadius = "5px";
        message1.style.display = "block";
    
        
    }

    if (num == "2"){
        message2.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        message2.style.width = "350px";
        message2.style.height = "60px";
        message2.style.backgroundColor = "rgb(242, 236, 236)";
        message2.style.color = "rgb(136, 50, 50)";
        message2.style.textAlign = "center";
        message2.style.padding = "5px";
        message2.style.borderRadius = "5px";
        message2.style.display = "block";
    }

    if (num == "3"){
        message3.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        message3.style.width = "350px";
        message3.style.height = "60px";
        message3.style.backgroundColor = "rgb(242, 236, 236)";
        message3.style.color = "rgb(136, 50, 50)";
        message3.style.textAlign = "center";
        message3.style.padding = "5px";
        message3.style.borderRadius = "5px";
        message3.style.display = "block";
    }

    if (num == "4"){
        message4.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        message4.style.width = "350px";
        message4.style.height = "60px";
        message4.style.backgroundColor = "rgb(242, 236, 236)";
        message4.style.color = "rgb(136, 50, 50)";
        message4.style.textAlign = "center";
        message4.style.padding = "5px";
        message4.style.borderRadius = "5px";
        message4.style.display = "block";
    }

    else if (num == "5"){
        message5.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        message5.style.width = "350px";
        message5.style.height = "60px";
        message5.style.backgroundColor = "rgb(242, 236, 236)";
        message5.style.color = "rgb(136, 50, 50)";
        message5.style.textAlign = "center";
        message5.style.padding = "5px";
        message5.style.borderRadius = "5px";
        message5.style.display = "block";
    }
}

// pour la question 1:
function check1(){
    if (radio_1.checked){
        displayStyleCorrect(1);
    }
    else{
        displayStyleInCorrect(1);
    }
}

// link it with its respectiv button:
button12.addEventListener("click",check1);

// pour la question 2:
function check2(){
    if (radio_2.checked){
        displayStyleCorrect(2);
    }
    else{
        displayStyleInCorrect(2);
    }
}

// link it with its respectiv button:
button22.addEventListener("click",check2);

// pour la question 3:
function check3(){
    if (radio_3.checked){
        displayStyleCorrect(3);
    }
    else{
        displayStyleInCorrect(3);
    }
}

// link it with its respectiv button:
button32.addEventListener("click",check3);

// pour la question 4:
function check4(){
    if (radio_4.checked){
        displayStyleCorrect(4);
    }
    else{
        displayStyleInCorrect(4);
    }
}

// link it with its respectiv button:
button42.addEventListener("click",check4);


// pour la question 5:
function check5(){
    if (radio_5.checked){
        displayStyleCorrect(5);
    }
    else{
        displayStyleInCorrect(5);
    }
}

// link it with its respectiv button:
button52.addEventListener("click",check5);


// now let's link the second button: 
// Q1:

function reset1(){
    message1.style.display = "none";
}

//link it with its button:
button11.addEventListener("click",reset1);


// Q2:

function reset2(){
    message2.style.display = "none";
}

//link it with its button:
button21.addEventListener("click",reset2);



// Q3:

function reset3(){
    message3.style.display = "none";
}

//link it with its button:
button31.addEventListener("click",reset3);



// Q4:

function reset4(){
    message4.style.display = "none";
}

//link it with its button:
button41.addEventListener("click",reset4);


// Q5:

function reset5(){
    message5.style.display = "none";
}

//link it with its button:
button51.addEventListener("click",reset5);


// Officialy Done with exo1...Great job!!:

//exo2:


// let's declare all of the variables from the DOM:

const radi_1 = document.getElementById("e2-qst1");
const radi_2 = document.getElementById("e2-qst2");
const radi_3 = document.getElementById("e2-qst3");


const butto11 = document.getElementById("cor1-1");
const butto12 = document.getElementById("ver1-1");

const butto21 = document.getElementById("cor1-2");
const butto22 = document.getElementById("ver1-2");

const butto31 = document.getElementById("cor1-3");
const butto32 = document.getElementById("ver1-3");

const messag1 = document.getElementById("mssg1");
const messag2 = document.getElementById("mssg2");
const messag3 = document.getElementById("mssg3");

// now let's define the function needed:
// display message:

function displayStyleCorrect2(num){
    if (num == "1"){
        messag1.textContent = "Bravo! C'est la bonne réponse!";
        messag1.style.width = "350px";
        messag1.style.height = "40px";
        messag1.style.backgroundColor = "rgb(195, 223, 213)";
        messag1.style.color = "rgb(57, 104, 87)";
        messag1.style.textAlign = "center";
        messag1.style.padding = "5px";
        messag1.style.borderRadius = "5px";
        messag1.style.display = "block";

        
    }

    if (num == "2"){
        messag2.textContent = "Bravo! C'est la bonne réponse!";
        messag2.style.width = "350px";
        messag2.style.height = "40px";
        messag2.style.backgroundColor = "rgb(195, 223, 213)";
        messag2.style.color = "rgb(57, 104, 87)";
        messag2.style.textAlign = "center";
        messag2.style.padding = "5px";
        messag2.style.borderRadius = "5px";
        messag2.style.display = "block";

    }

    if (num == "3"){
        messag3.textContent = "Bravo! C'est la bonne réponse!";
        messag3.style.width = "350px";
        messag3.style.height = "40px";
        messag3.style.backgroundColor = "rgb(195, 223, 213)";
        messag3.style.color = "rgb(57, 104, 87)";
        messag3.style.textAlign = "center";
        messag3.style.padding = "5px";
        messag3.style.borderRadius = "5px";
        messag3.style.display = "block";
    }
}

// incorrect message display:
function displayStyleInCorrect2(num){
    if (num == "1"){
        messag1.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messag1.style.width = "350px";
        messag1.style.height = "60px";
        messag1.style.backgroundColor = "rgb(242, 236, 236)";
        messag1.style.color = "rgb(136, 50, 50)";
        messag1.style.textAlign = "center";
        messag1.style.padding = "5px";
        messag1.style.borderRadius = "5px";
        messag1.style.display = "block";
    
        
    }

    if (num == "2"){
        messag2.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messag2.style.width = "350px";
        messag2.style.height = "60px";
        messag2.style.backgroundColor = "rgb(242, 236, 236)";
        messag2.style.color = "rgb(136, 50, 50)";
        messag2.style.textAlign = "center";
        messag2.style.padding = "5px";
        messag2.style.borderRadius = "5px";
        messag2.style.display = "block";
    }

    if (num == "3"){
        messag3.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messag3.style.width = "350px";
        messag3.style.height = "60px";
        messag3.style.backgroundColor = "rgb(242, 236, 236)";
        messag3.style.color = "rgb(136, 50, 50)";
        messag3.style.textAlign = "center";
        messag3.style.padding = "5px";
        messag3.style.borderRadius = "5px";
        messag3.style.display = "block";
    }
}

// pour la question 1:
function check21(){
    if (radi_1.checked){
        displayStyleCorrect2(1);
    }
    else{
        displayStyleInCorrect2(1);
    }
}

// link it with its respectiv button:
butto12.addEventListener("click",check21);

// pour la question 2:
function check22(){
    if (radi_2.checked){
        displayStyleCorrect2(2);
    }
    else{
        displayStyleInCorrect2(2);
    }
}

// link it with its respectiv button:
butto22.addEventListener("click",check22);

// pour la question 3:
function check23(){
    if (radi_3.checked){
        displayStyleCorrect2(3);
    }
    else{
        displayStyleInCorrect2(3);
    }
}

// link it with its respectiv button:
butto32.addEventListener("click",check23);


// now let's link the second button: 
// Q1:

function reset21(){
    messag1.style.display = "none";
}

//link it with its button:
butto11.addEventListener("click",reset21);



// Q2:

function reset22(){
    messag2.style.display = "none";
}

//link it with its button:
butto21.addEventListener("click",reset22);



// Q3:

function reset23(){
    messag3.style.display = "none";
}

//link it with its button:
butto31.addEventListener("click",reset23);


// now let's do it for exo4:
//exo4:


// let's declare all of the variables from the DOM:

const rad_1 = document.getElementById("e4-qst1");
const rad_2 = document.getElementById("e4-qst2");
const rad_3 = document.getElementById("e4-qst3");


const butt11 = document.getElementById("cor4-1");
const butt12 = document.getElementById("ver4-1");

const butt21 = document.getElementById("cor4-2");
const butt22 = document.getElementById("ver4-2");

const butt31 = document.getElementById("cor4-3");
const butt32 = document.getElementById("ver4-3");

const messa1 = document.getElementById("result1");
const messa2 = document.getElementById("result2");
const messa3 = document.getElementById("result3");

// now let's define the function needed:
// display message:

function displayStyleCorrect4(num){
    if (num == "1"){
        messa1.textContent = "Bravo! C'est la bonne réponse!";
        messa1.style.width = "350px";
        messa1.style.height = "40px";
        messa1.style.backgroundColor = "rgb(195, 223, 213)";
        messa1.style.color = "rgb(57, 104, 87)";
        messa1.style.textAlign = "center";
        messa1.style.padding = "5px";
        messa1.style.borderRadius = "5px";
        messa1.style.display = "block";

        
    }

    if (num == "2"){
        messa2.textContent = "Bravo! C'est la bonne réponse!";
        messa2.style.width = "350px";
        messa2.style.height = "40px";
        messa2.style.backgroundColor = "rgb(195, 223, 213)";
        messa2.style.color = "rgb(57, 104, 87)";
        messa2.style.textAlign = "center";
        messa2.style.padding = "5px";
        messa2.style.borderRadius = "5px";
        messa2.style.display = "block";

    }

    if (num == "3"){
        messa3.textContent = "Bravo! C'est la bonne réponse!";
        messa3.style.width = "350px";
        messa3.style.height = "40px";
        messa3.style.backgroundColor = "rgb(195, 223, 213)";
        messa3.style.color = "rgb(57, 104, 87)";
        messa3.style.textAlign = "center";
        messa3.style.padding = "5px";
        messa3.style.borderRadius = "5px";
        messa3.style.display = "block";
    }
}

// incorrect message display:
function displayStyleInCorrect4(num){
    if (num == "1"){
        messa1.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messa1.style.width = "350px";
        messa1.style.height = "60px";
        messa1.style.backgroundColor = "rgb(242, 236, 236)";
        messa1.style.color = "rgb(136, 50, 50)";
        messa1.style.textAlign = "center";
        messa1.style.padding = "5px";
        messa1.style.borderRadius = "5px";
        messa1.style.display = "block";
    
        
    }

    if (num == "2"){
        messa2.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messa2.style.width = "350px";
        messa2.style.height = "60px";
        messa2.style.backgroundColor = "rgb(242, 236, 236)";
        messa2.style.color = "rgb(136, 50, 50)";
        messa2.style.textAlign = "center";
        messa2.style.padding = "5px";
        messa2.style.borderRadius = "5px";
        messa2.style.display = "block";
    }

    if (num == "3"){
        messa3.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        messa3.style.width = "350px";
        messa3.style.height = "60px";
        messa3.style.backgroundColor = "rgb(242, 236, 236)";
        messa3.style.color = "rgb(136, 50, 50)";
        messa3.style.textAlign = "center";
        messa3.style.padding = "5px";
        messa3.style.borderRadius = "5px";
        messa3.style.display = "block";
    }
}

// pour la question 1:
function check41(){
    if (rad_1.checked){
        displayStyleCorrect4(1);
    }
    else{
        displayStyleInCorrect4(1);
    }
}

// link it with its respectiv button:
butt12.addEventListener("click",check41);

// pour la question 2:
function check42(){
    if (rad_2.checked){
        displayStyleCorrect4(2);
    }
    else{
        displayStyleInCorrect4(2);
    }
}

// link it with its respectiv button:
butt22.addEventListener("click",check42);

// pour la question 3:
function check43(){
    if (rad_3.checked){
        displayStyleCorrect4(3);
    }
    else{
        displayStyleInCorrect4(3);
    }
}

// link it with its respectiv button:
butt32.addEventListener("click",check43);


// now let's link the second button: 
// Q1:

function reset41(){
    messa1.style.display = "none";
}

//link it with its button:
butt11.addEventListener("click",reset41);



// Q2:

function reset42(){
    messa2.style.display = "none";
}

//link it with its button:
butt21.addEventListener("click",reset42);



// Q3:

function reset43(){
    messa3.style.display = "none";
}

//link it with its button:
butt31.addEventListener("click",reset43);


//exo5:


// let's declare all of the variables from the DOM:

const ra_1 = document.getElementById("e5-qst1");
const ra_2 = document.getElementById("e5-qst2");



const but11 = document.getElementById("cor5-1");
const but12 = document.getElementById("ver5-1");

const but21 = document.getElementById("cor5-2");
const but22 = document.getElementById("ver5-2");


const mess1 = document.getElementById("alert1");
const mess2 = document.getElementById("alert2");

// now let's define the function needed:
// display message:

function displayStyleCorrect5(num){
    if (num == "1"){
        mess1.textContent = "Bravo! C'est la bonne réponse!";
        mess1.style.width = "350px";
        mess1.style.height = "40px";
        mess1.style.backgroundColor = "rgb(195, 223, 213)";
        mess1.style.color = "rgb(57, 104, 87)";
        mess1.style.textAlign = "center";
        mess1.style.padding = "5px";
        mess1.style.borderRadius = "5px";
        mess1.style.display = "block";

        
    }

    if (num == "2"){
        mess2.textContent = "Bravo! C'est la bonne réponse!";
        mess2.style.width = "350px";
        mess2.style.height = "40px";
        mess2.style.backgroundColor = "rgb(195, 223, 213)";
        mess2.style.color = "rgb(57, 104, 87)";
        mess2.style.textAlign = "center";
        mess2.style.padding = "5px";
        mess2.style.borderRadius = "5px";
        mess2.style.display = "block";

    }

}

// incorrect message display:
function displayStyleInCorrect5(num){
    if (num == "1"){
        mess1.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        mess1.style.width = "350px";
        mess1.style.height = "60px";
        mess1.style.backgroundColor = "rgb(242, 236, 236)";
        mess1.style.color = "rgb(136, 50, 50)";
        mess1.style.textAlign = "center";
        mess1.style.padding = "5px";
        mess1.style.borderRadius = "5px";
        mess1.style.display = "block";
    
        
    }

    if (num == "2"){
        mess2.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        mess2.style.width = "350px";
        mess2.style.height = "60px";
        mess2.style.backgroundColor = "rgb(242, 236, 236)";
        mess2.style.color = "rgb(136, 50, 50)";
        mess2.style.textAlign = "center";
        mess2.style.padding = "5px";
        mess2.style.borderRadius = "5px";
        mess2.style.display = "block";
    }

}

// pour la question 1:
function check51(){
    if (ra_1.checked){
        displayStyleCorrect5(1);
    }
    else{
        displayStyleInCorrect5(1);
    }
}

// link it with its respectiv button:
but12.addEventListener("click",check51);

// pour la question 2:
function check52(){
    if (ra_2.checked){
        displayStyleCorrect5(2);
    }
    else{
        displayStyleInCorrect5(2);
    }
}

// link it with its respectiv button:
but22.addEventListener("click",check52);



// now let's link the second button: 
// Q1:

function reset51(){
    mess1.style.display = "none";
}

//link it with its button:
but11.addEventListener("click",reset51);



// Q2:

function reset52(){
    mess2.style.display = "none";
}

//link it with its button:
but21.addEventListener("click",reset52);


//exo6:


// let's declare all of the variables from the DOM:

const r_1 = document.getElementById("e6-qst1");
const r_2 = document.getElementById("e6-qst2");
const r_3 = document.getElementById("e6-qst3");


const bu11 = document.getElementById("cor6-1");
const bu12 = document.getElementById("ver6-1");

const bu21 = document.getElementById("cor6-2");
const bu22 = document.getElementById("ver6-2");

const bu31 = document.getElementById("cor6-3");
const bu32 = document.getElementById("ver6-3");

const mes1 = document.getElementById("res1");
const mes2 = document.getElementById("res2");
const mes3 = document.getElementById("res3");

// now let's define the function needed:
// display message:

function displayStyleCorrect6(num){
    if (num == "1"){
        mes1.textContent = "Bravo! C'est la bonne réponse!";
        mes1.style.width = "350px";
        mes1.style.height = "40px";
        mes1.style.backgroundColor = "rgb(195, 223, 213)";
        mes1.style.color = "rgb(57, 104, 87)";
        mes1.style.textAlign = "center";
        mes1.style.padding = "5px";
        mes1.style.borderRadius = "5px";
        mes1.style.display = "block";

        
    }

    if (num == "2"){
        mes2.textContent = "Bravo! C'est la bonne réponse!";
        mes2.style.width = "350px";
        mes2.style.height = "40px";
        mes2.style.backgroundColor = "rgb(195, 223, 213)";
        mes2.style.color = "rgb(57, 104, 87)";
        mes2.style.textAlign = "center";
        mes2.style.padding = "5px";
        mes2.style.borderRadius = "5px";
        mes2.style.display = "block";

    }

    if (num == "3"){
        mes3.textContent = "Bravo! C'est la bonne réponse!";
        mes3.style.width = "350px";
        mes3.style.height = "40px";
        mes3.style.backgroundColor = "rgb(195, 223, 213)";
        mes3.style.color = "rgb(57, 104, 87)";
        mes3.style.textAlign = "center";
        mes3.style.padding = "5px";
        mes3.style.borderRadius = "5px";
        mes3.style.display = "block";
    }
}

// incorrect message display:
function displayStyleInCorrect6(num){
    if (num == "1"){
        mes1.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        mes1.style.width = "350px";
        mes1.style.height = "60px";
        mes1.style.backgroundColor = "rgb(242, 236, 236)";
        mes1.style.color = "rgb(136, 50, 50)";
        mes1.style.textAlign = "center";
        mes1.style.padding = "5px";
        mes1.style.borderRadius = "5px";
        mes1.style.display = "block";
    
        
    }

    if (num == "2"){
        mes2.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        mes2.style.width = "350px";
        mes2.style.height = "60px";
        mes2.style.backgroundColor = "rgb(242, 236, 236)";
        mes2.style.color = "rgb(136, 50, 50)";
        mes2.style.textAlign = "center";
        mes2.style.padding = "5px";
        mes2.style.borderRadius = "5px";
        mes2.style.display = "block";
    }

    if (num == "3"){
        mes3.textContent = "Ce n'est pas la bonne réponse. Click sur \"corrigé\" pour corriger!";
        mes3.style.width = "350px";
        mes3.style.height = "60px";
        mes3.style.backgroundColor = "rgb(242, 236, 236)";
        mes3.style.color = "rgb(136, 50, 50)";
        mes3.style.textAlign = "center";
        mes3.style.padding = "5px";
        mes3.style.borderRadius = "5px";
        mes3.style.display = "block";
    }
}

// pour la question 1:
function check61(){
    if (r_1.checked){
        displayStyleCorrect6(1);
    }
    else{
        displayStyleInCorrect6(1);
    }
}

// link it with its respectiv button:
bu12.addEventListener("click",check61);

// pour la question 2:
function check62(){
    if (r_2.checked){
        displayStyleCorrect6(2);
    }
    else{
        displayStyleInCorrect6(2);
    }
}

// link it with its respectiv button:
bu22.addEventListener("click",check62);

// pour la question 3:
function check63(){
    if (r_3.checked){
        displayStyleCorrect6(3);
    }
    else{
        displayStyleInCorrect6(3);
    }
}

// link it with its respectiv button:
bu32.addEventListener("click",check63);


// now let's link the second button: 
// Q1:

function reset61(){
    mes1.style.display = "none";
}

//link it with its button:
bu11.addEventListener("click",reset61);



// Q2:

function reset62(){
    mes2.style.display = "none";
}

//link it with its button:
bu21.addEventListener("click",reset62);



// Q3:

function reset63(){
    mes3.style.display = "none";
}

//link it with its button:
bu31.addEventListener("click",reset63);
