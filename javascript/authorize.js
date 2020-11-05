
$( document ).ready(function () {
    console.log("authorize is running");
    //const redirect = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fwww.exabilityapp.com&scope=user-read-private%20user-read-email';
    const redirect = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fmanny1707.github.io%2FspotifyWork%2F&scope=user-read-private%20user-read-email';
    console.log("redirect uri : ${redirect}");
    window.location.replace(redirect);
});