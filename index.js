function checkForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username != "") {
document.getElementById('page').innerHTML = '<h2>Welcome ' + username + '!</h2>';
    }else {
document.getElementById('msg').innerHTML = '<br/>Pls enter a username!';
    }
}