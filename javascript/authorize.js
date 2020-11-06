
$( document ).ready(function () {
    console.log("authorize is running");
    //const redirect = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&response_type=code&redirect_uri=https%3A%2F%2Fwww.exabilityapp.com&scope=user-read-private%20user-read-email';
    const redirect = 'https://accounts.spotify.com/authorize?client_id=7715989104f9481bb709eb42822290e1&redirect_uri=https%3A%2F%2Fmanny1707.github.io%2FspotifyWork&scope=user-read-currently-playing%20user-read-email&response_type=token';
    window.location.replace(redirect);
});