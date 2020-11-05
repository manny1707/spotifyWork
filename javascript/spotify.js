async function getspotify() {
    console.log("apiResponse")
    let apiHeaders = new Headers();
    let apiBody = null;

    apiHeaders.append('Content-Type', 'application/json');

    let apiRequest = {
        method: 'GET',
        headers: apiHeaders,
        redirect: 'follow'
    };

    fetch(`https://cors-anywhere.herokuapp.com/accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fwww.exabilityapp.com&scope=user-read-private%20user-read-email&state=34fFs29kd09`, apiRequest)
        .then(apiResponse => {
            console.log(apiResponse)
        })
        .catch(error => console.log(error));
}

getspotify();