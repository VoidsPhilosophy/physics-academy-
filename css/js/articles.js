/* js/articles.js */

const searchInput = document.getElementById('article-search');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterArticles(query);
});

function filterArticles(query) {
    console.log("Searching for:", query);
    // Future logic: Fetch from api/articles.json 
    // and hide elements that don't match the query
}
