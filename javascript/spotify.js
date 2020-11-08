var accessToken = null

async function spotify() {
    var hash = window.location.hash.substring(1);
    var accessString = hash.indexOf("&");

    accessToken = hash.substring(13, accessString);
    console.log("Access Token: " + accessToken);
    let redirect = "https%3A%2F%2Fmanny1707.github.io%2FspotifyWork";

    var encoded = "NzcxNTk4OTEwNGY5NDgxYmI3MDllYjQyODIyMjkwZTE6NGM5ZDg5MDhlZDJiNDlkODliYjdiN2M4OTBkODgxNjY="

    
    let apiRequest = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    };

    await fetch(`https://cors-anywhere.herokuapp.com/api.spotify.com/v1/me/player/currently-playing?market=US`, apiRequest)
        .then(apiResponse => {
            console.log(apiResponse.json);
            console.log(apiResponse.json.context);
            console.log(apiResponse.json.timestamp);
        })
        .catch(error => console.log(error));

    
    /*fetch(`https://cors-anywhere.herokuapp.com/accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fwww.exabilityapp.com&scope=user-read-private%20user-read-email&state=34fFs29kd09`, apiRequest)
        .then(apiResponse => {
            console.log(apiResponse)
        })
        .catch(error => console.log(error));*/
}


spotify();
