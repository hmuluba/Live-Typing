const textarea = document.querySelector('textarea');
const result = document.querySelector('.result');
const msg = "Entrain d'ecire";

textarea.addEventListener('keyup', function() {
    result.innerHTML = textarea.value;
} );
