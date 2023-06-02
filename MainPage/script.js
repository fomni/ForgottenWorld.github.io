let currentSlideIndex = 0;

function showDetails(game) {
  const gameDetails = document.getElementById('game-details');
  gameDetails.innerHTML = `
    <h3>${game.name}</h3>
    <p>${game.description}</p>
  `;
}

function changeSlide(n) {
  const slides = document.getElementsByClassName('slide');
  const numSlides = slides.length;

  currentSlideIndex += n;

  if (currentSlideIndex >= numSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = numSlides - 1;
  }

  for (let i = 0; i < numSlides; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlideIndex].style.display = 'block';
}

function loadLatestReleases() {
  fetch('latest-releases.json')
    .then(response => response.json())
    .then(data => {
      const carouselContainer = document.getElementById('carousel-container');

      data.forEach((game, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.name;
        slide.appendChild(gameImage);

        const gameButton = document.createElement('button');
        gameButton.textContent = game.name;
        gameButton.onclick = () => showDetails(game);
        slide.appendChild(gameButton);

        carouselContainer.appendChild(slide);

        if (index === 0) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    })
    .catch(error => console.log(error));
}


function showDetails(sponsor) {
  const sponsorDetails = document.getElementById(sponsor);
  sponsorDetails.style.display = 'block';
}

function openSponsorLink(sponsor) {
  const sponsorLink = sponsor.link;
  window.open(sponsorLink);
}

function loadSponsors() {
  fetch('sponsors.json')
    .then(response => response.json())
    .then(data => {
      const sponsorContainer = document.getElementById('sponsor-container');
      data.forEach(sponsor => {
        const sponsorDiv = document.createElement('div');
        sponsorDiv.classList.add('sponsor');

        const sponsorImage = document.createElement('img');
        sponsorImage.src = sponsor.image;
        sponsorImage.alt = sponsor.name;
        sponsorImage.onclick = () => openSponsorLink(sponsor);
        sponsorDiv.appendChild(sponsorImage);

        const sponsorDetails = document.createElement('div');
        sponsorDetails.classList.add('sponsor-details');
        sponsorDetails.id = sponsor.id;

        const sponsorName = document.createElement('h3');
        sponsorName.textContent = sponsor.name;
        sponsorDetails.appendChild(sponsorName);

        const sponsorDescription = document.createElement('p');
        sponsorDescription.textContent = sponsor.description;
        sponsorDetails.appendChild(sponsorDescription);

        sponsorDiv.appendChild(sponsorDetails);

        sponsorContainer.appendChild(sponsorDiv);
      });
    })
    .catch(error => console.log(error));
}


loadSponsors();