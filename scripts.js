const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

function displayNews(articles) {
  const newsDiv = document.querySelector("#news");

  articles.map((article) => {
    const articleDiv = document.createElement("div");
    const title = document.createElement("h4");
    const imgClick = document.createElement("img");

    title.className = "text-muted d-flex align-items-start text-left";
    title.textContent = article.title;

    imgClick.src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTM5IDMySDQwLjVDNDIuMTU2OSAzMiA0My41IDMzLjM0MzEgNDMuNSAzNVY0N0M0My41IDQ4LjY1NjkgNDIuMTU2OSA1MCA0MC41IDUwSDI1LjM5MjRDMjQuMjM2MiA1MCAyMy4xODI5IDQ5LjMzNTYgMjIuNjg0OSA0OC4yOTIyTDE0LjIxNyAzMC41NUMxMy41NTggMjkuMTY5MiAxNC4yMDI5IDI3LjUxODggMTUuNjIzNSAyNi45NTA2TDE1Ljg1ODIgMjYuODU2N0MxNy4wNTI3IDI2LjM3ODkgMTguNDEwOSAyNi45MzM5IDE4LjkyOSAyOC4xMTE0TDIwLjg4MjIgMzIuNTUwNEMyMS40Nzc5IDMzLjkwNDIgMjMuNSAzMy40NzkgMjMuNSAzMlYzMlYxNi43NUMyMy41IDE1LjIzMTIgMjQuNzMxMiAxNCAyNi4yNSAxNFYxNEMyNy43Njg4IDE0IDI5IDE1LjIzMTIgMjkgMTYuNzVWMjQuNU0zOSAzMlYzMUMzOSAyOS4zNDMxIDM3LjY1NjkgMjggMzYgMjhIMzRNMzkgMzJWMzMuNU0zNCAyOFYyNy41QzM0IDI1Ljg0MzEgMzIuNjU2OSAyNC41IDMxIDI0LjVIMjlNMzQgMjhWMzJNMjkgMjQuNVYyOS41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=";

    articleDiv.appendChild(title);
    articleDiv.prepend(imgClick);
    articleDiv.className = "d-flex justify-content-start align-items-center p-2 btn";

    newsDiv.appendChild(articleDiv);

    articleDiv.addEventListener("click", () => alert("Maybe next time :)"))
  });
}

fetchNews();
