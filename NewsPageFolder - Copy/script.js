// Function to fetch JSON data
function fetchData() {
  fetch('data.json') // Replace 'data.json' with the path to your JSON file
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.log(error));
}

// Function to display data on the web page
function displayData(data) {
  var cardContainer = document.getElementById('cardContainer');

  // Loop through each item in the JSON array
  data.forEach(item => {
    var card = document.createElement('div');
    card.className = 'card';

    var textElement = document.createElement('p');
    textElement.className = 'text';
    textElement.textContent = item.text;
    card.appendChild(textElement);

    var imageLink = document.createElement('a');
    imageLink.href = item.link;
    imageLink.target = '_blank';

    var imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageLink.appendChild(imageElement);
    card.appendChild(imageLink);

    var dateElement = document.createElement('p');
    dateElement.className = 'date';
    dateElement.textContent = item.date;
    card.appendChild(dateElement);

    cardContainer.appendChild(card);
  });
}

// Call the fetchData function
fetchData();
