async function updateLocale() {  
  let cookies = document.cookie;
  let username = cookies.split('; ').find(element => element.startsWith('username')).split('=')[1];
  let apiHeaders = new Headers();
  let apiBody = null;

  let indoorCheckBox = document.getElementById('indoorCheck');
  console.log(indoorCheckBox.checked);
  let outdoorCheckBox = document.getElementById('outdoorCheck');
  console.log(outdoorCheckBox.checked);

  let localeInfo = {
      'indoor': indoorCheckBox.checked,
      'outdoor': outdoorCheckBox.checked
  };

  apiHeaders.append('Content-Type', 'application/json');
  apiBody = JSON.stringify({ "username": username, "newLocale": localeInfo});

  let apiRequest = {
      method: 'POST',
      headers: apiHeaders,
      body: apiBody,
      redirect: 'follow'
  };

  await fetch('https://n8nj1139da.execute-api.us-east-2.amazonaws.com/prod/update-user', apiRequest)
      .then(apiResponse => apiResponse.text())
      .then(apiResult => {
          console.log(apiResult);
      })
      .catch(error => console.log(error));
};

// set submit button to get values from checkboxes

// let updateLocalBtn = document.getElementById('testBtn');
// updateLocalBtn.addEventListener('click', updateLocale);
