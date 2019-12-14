var users = sessionStorage.getItem('users');
users = JSON.parse(users);
var userloginid;
var username = sessionStorage.getItem('username');
for (let i = 0; i < users.length; i++) {
    if (users[i].name === username) {
        userloginid = i;
    }
}
var table = document.getElementById('table');
table.className = "table";
if (users.length < 1) {
    document.getElementById('empty').innerHTML = "SORRY TABLE IS EMPTY!! PLEASE REGITSER";
}
for (let i = 0; i < users.length; i++) {
    var tr = document.createElement('TR');
    for (let j in users[i]) {
        var td = document.createElement('TD');
        var data;
        if (j == 'id') {
            var itag = document.createElement('I');
            itag.className = 'fa fa-trash itag ';
            td.appendChild(itag);
            td.className = 'td';
            tr.appendChild(td);
            data = document.createTextNode(users[i][j]);
        }
        data = document.createTextNode(users[i][j]);
        td.classList.add('td');
        td.appendChild(data);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
var trashbutton = document.getElementsByTagName('I');
console.log(trashbutton.length);
for (let i = 0; i < trashbutton.length; i++) {
    trashbutton[i].setAttribute("onclick", 'deleteduser(' + i + ')');
}
function deleteduser(userid) {
    for (let i = 0; i < users.length; i++) {
        if (userid === i && userid === userloginid) {
            users.splice(i, 1);
            // var item=sessionStorage.getItem('session_time');
            // sessionStorage.setItem('session_time',item);
            // window.location.href = "../views/login.html";
            logout();
            sessionStorage.setItem('users', JSON.stringify(users));
        }
        else if (userid == i) {
            users.splice(i, 1);
            sessionStorage.setItem('users', JSON.stringify(users));
            window.location.reload(true);
            break;
        }
    }

}








