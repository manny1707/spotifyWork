let apiHeaders = new Headers();
let apiBody = null;
let cookies = document.cookie;
let username = cookies.split('; ').find(element => element.startsWith('username')).split('=')[1];

apiHeaders.append('Content-Type', 'application/json');
apiBody = JSON.stringify({ "username": username, "getWorkout": false });

let apiRequest = {
    method: 'POST',
    headers: apiHeaders,
    body: apiBody,
    redirect: 'follow'
};

fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/query-user-info', apiRequest)
    .then(apiResponse => apiResponse.text())
    .then(apiResult => {
        let statusCode = JSON.parse(apiResult).statusCode;
        if (statusCode == 200) {
            let responseBody = JSON.parse(apiResult).body;
            let userNickname = responseBody.nickname;
            let userGreeting = document.getElementById('user-greeting');
            let userLocation = document.getElementById('user-location');
            let userCurrentCity = cookies.split('; ').find(element => element.startsWith('user-city')).split('=')[1];
            let userCurrentState = cookies.split('; ').find(element => element.startsWith('user-state')).split('=')[1];

            userGreeting.innerHTML = "Greetings, " + userNickname + "!";
            userLocation.innerHTML = "Current location: " + userCurrentCity + ", " + userCurrentState;
        }
    })
    .catch(error => console.log(error));