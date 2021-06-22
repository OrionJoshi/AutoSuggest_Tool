const searchBtn = document.getElementById("btn-search");
const searchInput = document.getElementById("input-search");
const item = document.getElementById("item");

// make a trie and add countries
const root = new newNode("\0");
for (const country of countryList) {
  insertWord(country, 0, root);
}
