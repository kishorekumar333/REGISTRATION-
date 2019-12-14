var users = sessionStorage.getItem('users');
users = JSON.parse(users);
var countryselect = document.getElementById('countries');
var stateselect = document.getElementById('states');
var cityselect = document.getElementById('cities');
var user_name = document.getElementById('username').value;
var user_mail = document.getElementById('email').value;
var user_password = document.getElementById('password1').value;
var user_designation = document.getElementById('designation').value;
var user_country, user_state, user_city;
for (let i = 0; i < country_arr.length; i++) {
    var option = document.createElement('OPTION');
    var country_name = document.createTextNode(country_arr[i]);
    option.appendChild(country_name);
    countryselect.appendChild(option);

}
var user_country_index, user_state_index;
function getcountry(event) {
    user_country_index = event.target.selectedIndex;
    user_country = event.target.value;
    getstate(user_country_index);
}
function getstatevalue(event) {
    user_state = event.target.value;
}
function getcityvalue(event) {
    user_city = event.target.value;

}
function getstate(pos) {
    user_state_index = user_country_index;
    for (let i = 1; i < s_a.length; i++) {
        if (i === pos) {
            stateselect.length = 1;
            var new_states = s_a[i].split("|");
            for (let j in new_states) {
                var option = document.createElement('OPTION');
                var data = document.createTextNode(new_states[j]);
                option.appendChild(data);
                option.setAttribute("value", new_states[j]);
                stateselect.appendChild(option);
            }
        }
    }
    getcity(user_state_index);
}
function getcity(pos) {
    for (let i = 0; i < c_a.length; i++) {
        if (i === pos) {
            cityselect.length = 1;
            var new_cities = c_a[i].split("|");
            for (let j in new_cities) {
                var option = document.createElement('OPTION');
                var data = document.createTextNode(new_cities[j]);
                option.appendChild(data);
                option.setAttribute("value", new_cities[j]);
                cityselect.appendChild(option);
            }
        }
    }
}

// var customers = [
//     {
//         id: 0,
//         name: "jeevan",
//         email: "jeeev.b@gmail.com",
//         password: "123",
//         designation: "fresher",
//         country: "India",
//         state: "telangana",
//         city: "hyderabad"
//     }
// ]


function adduser() {

    var user_name = document.getElementById('username').value;
    var user_mail = document.getElementById('email').value;
    var user_password = document.getElementById('password1').value;
    var user_designation = document.getElementById('designation').value;
    var user_storage =
    {
        id: Math.floor(Math.random() * 20),
        name: user_name,
        email: user_mail,
        password: user_password,
        designation: user_designation,
        country: user_country,
        state: user_state,
        city: user_city
    }
    var isExist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === user_name && users[i].email === user_mail) {
            isExist = true;
            break;
        }
    }
    if (isExist) {
        document.getElementById('message').innerHTML = 'Already Exist';
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password1').value = '';
        document.getElementById('password2').value = '';
        document.getElementById('designation').value = '';
        document.getElementById('countries').value = '';
        document.getElementById('states').value = '';
        document.getElementById('cities').value = '';
    } else {
        document.getElementById('message').className = 'message';
        document.getElementById('message').innerHTML = 'Added successfully';
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password1').value = '';
        document.getElementById('password2').value = '';
        document.getElementById('designation').value = '';
        document.getElementById('countries').value = '';
        document.getElementById('states').value = '';
        document.getElementById('cities').value = '';
        users.push(user_storage);
        sessionStorage.setItem("users", JSON.stringify(users));
    }

}

//console.log(customers);