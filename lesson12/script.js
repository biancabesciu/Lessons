/**
 * Created by Bianca on 13/07/2017.
 */
const GIPHY_API_KEY = '7d9bcdfc92ef4d1f9fca302056368d04';

function displayResults () {
    const response = JSON.parse(this.responseText);
    const gifs = response.data;
    const resultDiv = document.getElementById('results');

    resultDiv.innerHTML = '';

    for (const gif of gifs) {
        const gifUrl = gif.images.preview_gif.url;

        let tile = '<div class="title is-parent">';
        tile = '<article class="tile is-child box thumbnail" style="background-img: url(' + gifUrl + ')">';
        tile += '</article>';
        tile += '</div>';

        resultDiv.innerHTML += '<img src="' + gifUrl + '">';
    }
}

function giphyApiRequest(query) {
    const xhr = new XMLHttpRequest();
    
    let url = 'http://api.giphy.com/v1/gifs/search?';
    url += 'q=' + query;
    url += '&api_key=' + GIPHY_API_KEY;
    url += '&limit=5';

    xhr.addEventListener('load', displayResults);
    xhr.open('GET', url);
    xhr.send();
}

//This function is called when I press the search button
function doSearch() {
    const searchbox = document.getElementById('searchbox').value;
    giphyApiRequest(searchbox)
}

//I select my search button and add an event listener to when it is clicked
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', doSearch);