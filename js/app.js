const textarea = document.querySelector('textarea');
const result = document.querySelector('.result');
const msg = "Entrain d'ecire";

textarea.addEventListener('keyup', function() {
    result.innerHTML = textarea.value;
} );


const bouton = document.querySelector('.btn');


bouton.addEventListener("mouseover", function () {
   alert(Math.random());
})