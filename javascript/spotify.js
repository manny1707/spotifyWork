var accessToken = null;
var currentSongName = null;
var currentSongPicture = null;
var currentSongId = null;
var isPlaying = null;
let parent_div = $('.music-box');
var image = document.getElementById("spotifyImage");
var spotifyName = document.getElementById("spotifyName");
var spotifyPlay = document.getElementById("spotifyPlay");
var spotifyPause = document.getElementById("spotifyPause");
var errorMessage = document.getElementById("errorMessage");

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
            errorMessage.style.visibility = "hidden";
            const response = apiResponse;
            console.log(response);
            isPlaying = response.is_playing;
            currentSongName = response.item.name;
            currentSongId = response.item.id;
            currentSongPicture = response.item.album.images[1].url;

            spotifyPlay.style.visibility = "visible";
            spotifyPause.style.visibility = "visible";
            image.style.visibility = "visible";
            spotifyName.style.visibility = "visible";
            image.src = `${currentSongPicture}`;
            spotifyName.innerHTML = `${currentSongName}`;
            //`<img class="image" src=${currentSongPicture}>`
            //name = `<p class="name" >${currentSongName}</p>`

            //somewhere here we populate front end
        })
        .catch(error => {
            console.log(error)
            errorMessage.style.visibility = "visible";
            parent_div.append(errorMessage);
        });  
        
        setTimeout(spotify, 5000);
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
    await fetch('https://api.spotify.com/v1/me/player/play', apiPlayRequest)
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

    await fetch('https://api.spotify.com/v1/me/player/pause', apiPauseRequest)
        .then(result => console.log(result))
        .catch(error => console.log(error));   
}

console.log(document.cookie);

if (document.cookie.indexOf("Access-Token=") === -1){
    document.cookie = `Access-Token=${accessToken}`;
}
else if (document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1].length < 5){
    var hash = window.location.hash.substring(1);
    var accessString = hash.indexOf("&");
    accessToken = hash.substring(13, accessString);
    document.cookie = `Access-Token=${accessToken}`;
}
else {
    accessToken = document.cookie.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1];
}




//accessToken = cookies.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1];

if (accessToken != null && accessToken.length > 5){
    console.log("BUTTONS SHOULD BE GONE");
    var button = document.getElementById("spotifyButton");
    var statement = document.getElementById("spotifyStatement");
    button.remove();
    statement.remove()
    spotify();
}

