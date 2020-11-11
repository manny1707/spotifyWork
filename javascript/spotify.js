var accessToken = null;
var currentSongName = null;
var currentSongPicture = null;
var currentSongId = null;
var isPlaying = null;

function Redirect() {
    window.location = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&redirect_uri=https%3A%2F%2Fmanny1707.github.io%2FspotifyWork&scope=user-read-currently-playing%20user-modify-playback-state&response_type=token';
}

async function spotify() {
    console.log("Access_Token: " + accessToken);
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
            currentSongPicture = response.item.album.images[0].url
            console.log(isPlaying);
            console.log(currentSongName);
            console.log(currentSongId);
            console.log(currentSongPicture);
            let image = `<img src=${currentSongPicture}>`
            //let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
            let parent_div = $('.music-box');
            parent_div.append(image);

            //somewhere here we populate front end
        })
        .catch(error => console.log(error));    
}

//there is going to be a front end button that will call a function in the back end

async function playSong(){

    let apiRequest = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    };
    await fetch('https://cors-anywhere.herokuapp.com/api.spotify.com/v1/me/player/play', apiRequest)
        /*.then(result => result.json())
        .then(apiResponse=>{

        })
        .catch(error => console.log(error));*/    
}

async function pauseSong(){

    let apiRequest = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    };

    await fetch('https://cors-anywhere.herokuapp.com/api.spotify.com/v1/me/player/pause', apiRequest)
        /*.then(result => result.json())
        .then(apiResponse=>{

        })
        .catch(error => console.log(error));*/    
}


var hash = window.location.hash.substring(1);
var accessString = hash.indexOf("&");
accessToken = hash.substring(13, accessString);


accessToken = cookies.split('; ').find(element => element.startsWith('Access-Token')).split('=')[1];

var hash = window.location.hash.substring(1);
var accessString = hash.indexOf("&");
accessToken = hash.substring(13, accessString);


if (accessToken != null){
    $('.spotifyStatement').hide();
    $('.spotifyButton').hide();
    document.cookie = `Access-Token=${accessToken}`; 
    spotify();
}

