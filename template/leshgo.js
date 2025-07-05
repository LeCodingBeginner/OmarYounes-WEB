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
