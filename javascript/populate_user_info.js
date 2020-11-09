let apiHeaders = new Headers();
let apiBody = null;
let cookies = document.cookie;
let username = cookies.split('; ').find(element => element.startsWith('username')).split('=')[1];

apiHeaders.append('Content-Type', 'application/json');
apiBody = JSON.stringify({ "username": username });

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
            let userLocale = JSON.parse(responseBody.locale)
            console.log(userLocale.outdoor);
            // console.log(responseBody.locale);
            
            console.log(responseBody);
            let userGreeting = document.getElementById('user-greeting');
            let userLocation = document.getElementById('user-location');
            let userCurrentCity = cookies.split('; ').find(element => element.startsWith('user-city')).split('=')[1];

            console.log('user city is ', userCurrentCity);

            userGreeting.innerHTML = "Greetings, " + userNickname + "!";
            userLocation.innerHTML = "Current location: " + userCurrentCity;
        }
    })
    .catch(error => console.log(error));