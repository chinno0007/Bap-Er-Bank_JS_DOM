// step 1: add click event  handler with the submit btn
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email address inside the input field

    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    // step 3: get password
    // 3.a set id in html
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // do not verify email password on the clint side
    // step 4: verify email and password and cj=heck user valid or not

    if (email === 'sontan@baap.com' && password === 'secreet') {
        window.location.href = 'bank.html'
    }

    else {
        alert('toke ami tejjo ghosona korlam')
    }
})