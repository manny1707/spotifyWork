/*$( document ).ready(function() {
    console.log( 'script.js ready!' );
    console.log('version 6')

    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

    const accessToken = getUrlParameter('access_token');
    console.log(`accessToken ${accessToken}`);

  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=dance+off&type=track',
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log(' ');
        console.log(' ');
        console.log('Got data back');
        // Let's console what gets returned for our search
        console.log(JSON.stringify(data));
        // Example: Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(' ');
        console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
        // Constructing a iframe to embed a song
        let src_str = `https://open.spotify.com/embed/track/${id}`;
        console.log(`src_str ${src_str}`);
        let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        let parent_div = $('#content');
        parent_div.append(iframe);
      }
  });

});*/

function spotify() {
    console.log(window.location.search.substr(6, window.location.search.length-6));
}

spotify();
/*async function getspotify() {
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

getspotify();*/