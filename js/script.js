var getBack = [
    'We will get back to you in 20 years!',
    'We will get back to you in 1000 years!',
    'You will never hear from us again!',
    'We will get back to you in -999 years!',
    'We will get back to you in 24 hours.'
]
let thanksMessage = document.getElementById('thanksMessage')
function submitContact() {
document.getElementById('firstName').value = ' '
document.getElementById('lastName').value = ' '
document.getElementById('email').value = ' '
document.getElementById('phone').value = ' '
document.getElementById('country').value = ' '
document.getElementById('comments').value = ' '
    setTimeout(() => {
        let response = Math.floor(Math.random()*getBack.length)
        thanksMessage.innerHTML = getBack[response]
    }, 500)
}