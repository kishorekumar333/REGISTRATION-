var users = sessionStorage.getItem('users');
users = JSON.parse(users);
var session_time = sessionStorage.getItem('session_time');
var dummy = session_time;
var time_min = Math.floor(dummy / 1000 / 60);
//dummy -= ss * 1000*60; 120000
if (session_time) {
    if(time_min>59)
    {
        var time_hr_min=Math.floor(time_min/60);
        document.getElementById('time').innerHTML = "Your session time was " + time_hr_min + " Hours";
    }
    document.getElementById('time').innerHTML = "Your session time was " + time_min + " minutes";
}
sessionStorage.removeItem('session_time');
var session_name = "";
var session_pass = "";
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hrs = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
//var time=hrs+":"+min;
var new_date = new Date(year, month, day, hrs, min, sec);
console.log(new_date);
console.log(session_time);
function dash() {
    var loginname = document.getElementById('login_name').value;
    var loginpass = document.getElementById('login_pass').value;
    var isExist = false;
    // var i=0;
    for (let i = 0; i < users.length; i++) {
        session_name = users[i].name;
        session_pass = users[i].password;
        if (loginname === session_name && loginpass === session_pass) {
            sessionStorage.setItem("username", session_name);
            sessionStorage.setItem('lastseen', new_date);
            isExist = true;
            break;
        }
    }
    if (isExist) {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('errortext').innerHTML = 'Wrong password';


    }
}

// var msec = diff;
// var hh = Math.floor(msec / 1000 / 60 / 60);
// msec -= hh * 1000 * 60 * 60;
// var mm = Math.floor(msec / 1000 / 60);
// msec -= mm * 1000 * 60;
// var ss = Math.floor(msec / 1000);
// msec -= ss * 1000;