const checkbox = document.querySelector('#changeTheme')
const tagBody = document.querySelector('body')

checkbox.addEventListener('change', () => {
    tagBody.classList.toggle('theme-dark')
    tagBody.style.transition = '0.7s'
})