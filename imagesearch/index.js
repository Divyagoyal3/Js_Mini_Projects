const accessKey = "5wi8vcUQziqs_Y25ySPGN-1sPz-ORP5ykujcsvTFqJI";

const searchForm = document.querySelector("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.querySelector("search-results");
const showMore = document.getElementById("show-more-button");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.vaue;
    const url = `https://api.unsplash.com/search/users/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

}

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page =1;
    searchImages();
})










