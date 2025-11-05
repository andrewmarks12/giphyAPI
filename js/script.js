
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=DqWi1st8YrW6yLyn3A8jYaSStWJieyh4&q=hockey&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

/*let data = fetch(endpoint);
console.log(data);*/

async function getGif() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);

    const gifs = data.data;
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    const gifUrl = randomGif.images.original.url;

    const img = document.getElementById("GIF");
    img.src = gifUrl;
}



getGif();