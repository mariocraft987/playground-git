d = new Date();
yearNow = d.getYear;

console.log('Playground - '+yearNow)

function checkForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    if (username != "", password != "", email != "") {
document.getElementById('page').innerHTML = '<h2>Welcome ' + username + '!</h2>';
    }else {
document.getElementById('msg').innerHTML = '<br/>Pls fill out the form!!';
        window.error("form not filled out")
    }
}
