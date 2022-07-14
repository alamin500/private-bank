// document.getElementById('login-submit').addEventListener('click', function(){
//     const emailField = document.getElementById('user-email');
//     const userEmail = emailField.value;

//     // get user password
//     const passwordField = document.getElementById('user-password');
//     const userPassword = passwordField.value;

//     if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
//         window.location.href = 'banking.html'

//     }

// })

document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value
    const userPassword = document.getElementById('user-password').value

    if (userEmail == 'alamin@gmail.com' && userPassword == 'alamin') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('Password is incorrect')
    }
})