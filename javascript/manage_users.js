let createUser = async (username, password, nickname) => {
    let apiHeaders = new Headers();
    let apiBody = null;

    apiHeaders.append('Content-Type', 'application/json');
    apiBody = JSON.stringify({ "username": username, "password": password, "nickname": nickname });

    let apiRequest = {
        method: 'POST',
        headers: apiHeaders,
        body: apiBody,
        redirect: 'follow'
    };

    fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/create-user', apiRequest)
        .then(apiResponse => apiResponse.text())
        .then(apiResult => { 
            console.log(JSON.parse(apiResult).body);
            alert('You have successfully created a user account!');
            document.getElementById('id02').style.display='none' })
        .catch(error => console.log(error));
}

let loginUser = async (username, password) => {
    let dynamicHeader = document.querySelector('#dynamic-header');
    
    let apiHeaders = new Headers();
    let apiBody = null;

    apiHeaders.append('Content-Type', 'application/json');
    apiBody = JSON.stringify({ "username": username, "password": password });

    let apiRequest = {
        method: 'POST',
        headers: apiHeaders,
        body: apiBody,
        redirect: 'follow'
    };

    fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/login-user', apiRequest)
        .then(apiResponse => apiResponse.text())
        .then(apiResult => {
            let statusCode = JSON.parse(apiResult).statusCode;
            if (statusCode == 200) {
                alert('Successfully logged in!');
                let responseBody = JSON.parse(apiResult).body;
                sessionStorage.setItem('username', responseBody.username);
                document.getElementById('id01').style.display='none';
                let loginAndCreateButtons = document.getElementsByClassName('login-btn');
                loginAndCreateButtons[0].style.display='none';
                loginAndCreateButtons[1].style.display='none';

                let uppermostHeader = document.getElementById('uppermost-header');
                let welcomeMessage = document.createElement('p');
                
                let userNickname = responseBody.nickname.replaceAll('"', '');
                welcomeMessage.innerHTML = 'Welcome back, ' + userNickname + '!';
                welcomeMessage.setAttribute('class', 'user-welcome-message');

                uppermostHeader.appendChild(welcomeMessage);
            }
            else if (statusCode == 401) {
                alert('Incorrect password!');
            }
        })
        .catch(error => console.log(error));
}