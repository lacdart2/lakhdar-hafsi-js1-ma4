const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url2 = "https://api.rawg.io/api/games/" + id;

console.log(url2);

async function gamesApi() {

  try {
    const response = await fetch(url2);
    const details = await response.json();

    console.log(details);

    createHtml(details);

  }
  catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }

}

gamesApi();

function createHtml(details) {
  detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.background_image}')"></div>
                                <div class="details-description">${details.description}</div>
                                <time class="details-date">Released: ${details.released}</time>`;
}
