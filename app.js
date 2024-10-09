document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const clientId = document.getElementById('clientId').value;
  const clientSecret = document.getElementById('clientSecret').value;

  const formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  formData.append('client_id', clientId);
  formData.append('client_secret', clientSecret);
  formData.append('scope', 'api://ead7bae1-0328-41fd-8714-bfb2584b9516/.default');  // Example scope

  fetch('https://login.microsoftonline.com/afdc9428-1856-495e-a93e-384b4d7bfec5/oauth2/v2.0/token', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Signed in', data);
    document.getElementById('response').innerText = 'Signed in: ' + JSON.stringify(data);
  })
  .catch(error => {
    console.error('Error signing in', error);
    document.getElementById('response').innerText = 'Error signing in: ' + JSON.stringify(error);
  });
});

