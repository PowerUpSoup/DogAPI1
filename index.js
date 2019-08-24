function getDogImage() {
    console.log(dogNumber);
    fetch('https://dog.ceo/api/breeds/image/random/' + dogNumber)
        .then(response => response.json())
        .then(responseJson =>
            console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        dogNumber = document.getElementById("NumberofDogs").value;
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });