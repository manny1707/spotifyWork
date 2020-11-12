var accessToken = null;
var currentSongName = null;
var currentSongPicture = null;
var currentSongId = null;
var isPlaying = null;

function Redirect() {
    window.location = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&redirect_uri=https%3A%2F%2Fmanny1707.github.io%2FspotifyWork&scope=user-read-currently-playing%20user-modify-playback-state&response_type=token';
}

async function spotify() {
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
        .then(result => result.json())
        .then(apiResponse => {
            const response = apiResponse;
            console.log(response);
            console.log(response.item);
            isPlaying = response.is_playing;
            currentSongName = response.item.name;
            currentSongId = response.item.id;
            currentSongPicture = response.item.album.images[1].url
            console.log(isPlaying);
            console.log(currentSongName);
            console.log(currentSongId);
            console.log(currentSongPicture);
            let image = `<img src=${currentSongPicture}>`
            let name = `<p>${currentSongName}</p>`
            //let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            let parent_div = $('.music-box');
            parent_div.append(image);
            parent_div.append(name);
            parent_div.append(play);

            //somewhere here we populate front end
        })
        .catch(error => console.log(error));    
}

//there is going to be a front end button that will call a function in the back end

async function playSong(){

    let apiPlayRequest = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    };
    await fetch('https://cors-anywhere.herokuapp.com/api.spotify.com/v1/me/player/play', apiPlayRequest)
        .then(result => console.log(result))
        .catch(error => console.log(error));   
}

async function pauseSong(){

    let apiPauseRequest = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    };

    await fetch('https://cors-anywhere.herokuapp.com/api.spotify.com/v1/me/player/pause', apiPauseRequest)
        .then(result => console.log(result))
        .catch(error => console.log(error));   
}

console.log(document.cookie);
console.log(document.cookie.indexOf("Access-Token="));

if (document.cookie.indexOf("Access-Token=") === -1){
    document.cookie = `Access-Token=${accessToken}`;
    console.log("no current access token");
}
else if (document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1].length < 5){
    console.log("access token exists but is unpopulated");
    var hash = window.location.hash.substring(1);
    var accessString = hash.indexOf("&");
    accessToken = hash.substring(13, accessString);
    document.cookie = `Access-Token=${accessToken}`;
    console.log("Access_Token: " + accessToken);
    console.log("cookie returns: " + document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1]);
}
else {
    console.log("access token exists and is populated");
    accessToken = document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1];
    console.log("Access_Token: " + accessToken);
    console.log("cookie returns: " + document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1]);
}




//accessToken = cookies.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1];

console.log(accessToken);
if (accessToken != null && accessToken.length > 5){
    $(".spotifyStatement").hide();
    $(".spotifyButton").hide();
    console.log("BUTTONS SHOULD BE GONE");
    spotify();
}

