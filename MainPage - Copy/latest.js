function showGameDetails(gameId) {
  fetch("latest-releases.json")
    .then(response => response.json())
    .then(data => {
      const gameDetails = data.find(game => game.name.toLowerCase() === gameId.toLowerCase());
      const gameDetailsContainer = document.getElementById("game-details");
      gameDetailsContainer.innerHTML = `
        <div class="game-details-container">
          <h3>${gameDetails.name}</h3>
          <p>${gameDetails.description}</p>
          <a href="${gameDetails.link}" target="_blank"><img src="icons/itchicon.png" alt="${gameDetails.name}"></a>
        </div>
      `;
      gameDetailsContainer.style.display = "block";

      const screenshotImage = document.getElementById("screenshot-image");
      screenshotImage.src = gameDetails.screenshot;
    })
    .catch(error => console.log(error));
}

fetch("latest-releases.json")
  .then(response => response.json())
  .then(data => {
    const gameIconsContainer = document.getElementById("game-icons-container");
    data.forEach(game => {
      const gameIcon = document.createElement("div");
      gameIcon.classList.add("game-icon");
      gameIcon.setAttribute("onclick", `showGameDetails('${game.name}')`);
      gameIcon.innerHTML = `<img src="${game.image}" alt="${game.name}">`;
      gameIconsContainer.appendChild(gameIcon);
    });

    // Set the initial screenshot image to the first game's screenshot
    const initialGame = data[0];
    const screenshotImage = document.getElementById("screenshot-image");
    screenshotImage.src = initialGame.screenshot;
  })
  .catch(error => console.log(error));
