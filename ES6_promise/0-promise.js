getResponseFromAPI()
  .then(responseData => {
    console.log(responseData.message); // Data from API
  })
  .catch(error => {
    console.error(error); // Handle any errors here
  });
