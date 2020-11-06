var codeForAuth = null

function spotify() {
    codeForAuth = window.location.search.substr(6, window.location.search.length-6);
    let redirect = "https%3A%2F%2Fmanny1707.github.io%2FspotifyWork";
    let params = { 
        grant_type : "authorization_code", 
        code: codeForAuth, 
        redirect_uri: redirect
    };

    var encoded = "NzcxNTk4OTEwNGY5NDgxYmI3MDllYjQyODIyMjkwZTE6NGM5ZDg5MDhlZDJiNDlkODliYjdiN2M4OTBkODgxNjY="


    let apiRequest = {
        method: 'POST',
        headers: {
            'Content-Type' : "application/x-www-form-urlencoded",
            'Authorization': 'Basic ' + encoded
        },
        body: JSON.stringify(params)
    };

    fetch(`https://cors-anywhere.herokuapp.com/accounts.spotify.com/api/token`, apiRequest)
        .then(apiResponse => {
            console.log(apiResponse)
        })
        .catch(error => console.log(error));

    
    /*fetch(`https://cors-anywhere.herokuapp.com/accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fwww.exabilityapp.com&scope=user-read-private%20user-read-email&state=34fFs29kd09`, apiRequest)
        .then(apiResponse => {
            console.log(apiResponse)
        })
        .catch(error => console.log(error));*/
}


spotify();