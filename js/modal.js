const open = document.querySelector('.btnShow');
const close = document.getElementById('closeModal')

const modal = document.querySelector('.bgModal');

const visibility = () => {
    modal.classList.toggle('show')
}

open.addEventListener('click', visibility);
close.addEventListener('click', visibility);
