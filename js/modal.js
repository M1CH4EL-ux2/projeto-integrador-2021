const button = document.querySelector('.btnShow');
const modal = document.querySelector('.bgModal')

const visibility = () => {
    modal.classList.toggle('show')
}

button.addEventListener('click', visibility)
