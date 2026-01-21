const generateButton = document.querySelector(".generate-button");
const memeTitle = document.querySelector(".meme-title");
const authorOutput = document.querySelector(".author");
const memeImage = document.querySelector(".meme-image");

function getMeme() {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {
        const {author, title, url} = data
        memeTitle.innerText = title
        authorOutput.innerText = `Meme by: ${author}`
        memeImage.src = url
})
}

getMeme()

generateButton.addEventListener("click", () => {
    getMeme()
})