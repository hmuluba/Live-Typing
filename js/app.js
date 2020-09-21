const textarea = document.querySelector('textarea');
const result = document.querySelector('.result');

textarea.addEventListener('keyup', function() {
    result.innerHTML = textarea.value;
} );
