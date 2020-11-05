let createUser = async (username, password) => {
    let apiHeaders = new Headers();
    let apiBody = null;
    
    apiHeaders.append('Content-Type', 'application/json');
    apiBody = JSON.stringify({"username":username, "password":password});

    let apiRequest = {
        method: 'POST',
        headers: apiHeaders,
        body: apiBody, 
        redirect: 'follow'
    };

    fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/create-user', apiRequest)
    .then(apiResponse => apiResponse.text())
    .then(apiResult => console.log(JSON.parse(apiResult).body))
    .catch(error => console.log(error));
}

let loginUser = async (username, password) => {
    let apiHeaders = new Headers();
    let apiBody = null;
    
    apiHeaders.append('Content-Type', 'application/json');
    apiBody = JSON.stringify({"username":username, "password":password});

    let apiRequest = {
        method: 'POST',
        headers: apiHeaders,
        body: apiBody, 
        redirect: 'follow'
    };

    fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/login-user', apiRequest)
    .then(apiResponse => apiResponse.text())
    .then(apiResult => console.log(JSON.parse(apiResult).body))
    .catch(error => console.log(error));
}