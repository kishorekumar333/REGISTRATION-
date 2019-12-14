var username=sessionStorage.getItem('username');
var time=sessionStorage.getItem('lastseen');
 var users=sessionStorage.getItem('users');
 var users=JSON.parse(users);
 document.getElementById('name').innerHTML=username;
 //document.getElementById('time').innerHTML=time;
 console.log(username);
 console.log(time);
 function logout()
 {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day =date.getDay();
    var hrs=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    //var time=hrs+":"+min;
    var new_date1=new Date(year,month,day,hrs,min,sec);
    var session_time=new_date1-new Date(time);
    sessionStorage.setItem('session_time',session_time);
     sessionStorage.removeItem(username);
     window.location.href='login.html';
 }
 
