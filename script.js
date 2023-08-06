// DISPLAY AQUA BUTTON //
let divRef = document.querySelector('div');

let buttonRefAqua = document.getElementById("aqua");

buttonRefAqua.onclick = function() {
    if(divRef.style.backgroundColor != "aqua"){
        divRef.style.backgroundColor = "aqua";
        divRef.innerHTML = "aqua";
    }
}

// DISPLAY TEAL BUTTON //
let buttonRefTeal = document.getElementById("teal");

buttonRefTeal.onclick = function() {
    if(divRef.style.backgroundColor != "teal"){
        divRef.style.backgroundColor = "teal";
        divRef.innerHTML = "teal";
    }
}

// DISPLAY PINK BUTTON //
let buttonRefPink = document.getElementById("pink");

buttonRefPink.onclick = function() {
    if(divRef.style.backgroundColor != "pink"){
        divRef.style.backgroundColor = "pink";
        divRef.innerHTML = "pink";
    }
}

// DISPLAY PURPLE BUTTON //
let buttonRefPurple = document.getElementById("purple");

buttonRefPurple.onclick = function() {
    if(divRef.style.backgroundColor != "purple"){
        divRef.style.backgroundColor = "purple";
        divRef.innerHTML = "purple";
    }
}

// COLORLESS FUNCTION //
let colorLess= document.getElementById("colorless");

colorLess.onclick = function(){
    if(divRef.style.backgroundColor !== "none"){
        divRef.style.backgroundColor = "";
        divRef.innerHTML = 'colorless';
    }
}