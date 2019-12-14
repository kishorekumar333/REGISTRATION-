var users = sessionStorage.getItem('users');
users = JSON.parse(users);
var profiler_name = sessionStorage.getItem('username');


for (let i = 0; i < users.length; i++) {
    if (users[i].name === profiler_name) {
        document.getElementById('username').value = users[i].name;
        document.getElementById('email').value = users[i].email;
        document.getElementById('password1').value = users[i].password;
        document.getElementById('designation').value = users[i].designation;
        document.getElementById('country').value = users[i].country;
        document.getElementById('state').value = users[i].state;
        document.getElementById('city').value = users[i].city;
    }
}
function changename() {
    document.getElementById('username').disabled = false;
}
function changedesig() {
    document.getElementById('designation').disabled = false;
}
function changepass() {
    document.getElementById('password1').disabled = false;
    document.getElementById('password1').type = "text";
}
var password_before_edit=document.getElementById('password1').value;
function saveedits() {
    var user_name = document.getElementById('username').value;//edited value
    var user_mail = document.getElementById('email').value;
    var user_password = document.getElementById('password1').value;
    var user_designation = document.getElementById('designation').value;
    var user_country = document.getElementById('country').value;
    var user_state = document.getElementById('state').value;
    var user_city = document.getElementById('city').value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === profiler_name) {
            users[i].name = user_name;
            users[i].email = user_mail;
            users[i].password = user_password;
            users[i].designation = user_designation;
            users[i].country = user_country;
            users[i].city = user_city;
            users[i].state = user_state;
            document.getElementById('username').value = users[i].name;
            //document.getElementById('username').value = users[i].name;
            document.getElementById('email').value = users[i].email;
            document.getElementById('password1').value = users[i].password;
            document.getElementById('designation').value = users[i].designation;
            document.getElementById('country').value = users[i].country;
            document.getElementById('state').value = users[i].state;
            document.getElementById('city').value = users[i].city;
            sessionStorage.setItem('users', JSON.stringify(users));
            sessionStorage.setItem('username', users[i].name);
            document.getElementById('username').disabled = true;
            document.getElementById('designation').disabled = true;
            document.getElementById('password1').disabled = true;
            document.getElementById('password1').type = "password";
        }
    }
    if(password_before_edit===user_password)
    {
        document.getElementById('message').innerHTML="VALUES HAS BEEN UPDATED"
    }
    else{
        sessionStorage.removeItem('username');
        window.location.href='../views/login.html';
    }
}
console.log(users);