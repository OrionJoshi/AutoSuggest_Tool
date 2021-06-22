const searchBtn = document.getElementById("btn-search");
const searchInput = document.getElementById("input-search");
const item = document.getElementById("item");

// make a trie and add countries
const root = new newNode("\0");
for (const country of countryList) {
  insertWord(country, 0, root);
}

//event listner for displaying search bar
searchBtn.addEventListener("click", () => {
  searchInput.classList.add("search");
});

// event listner for displaying suggestion list
searchInput.addEventListener("keyup", (e) => {
  const value = capitalizeFirstLetter(e.target.value);

  // searching words in trie
  const resultWords = searchWord(value, 0, root);
  const countWords = resultWords.length;

  // add to ul
  item.innerHTML = "";
  if (countWords > 5) {
    for (let i = 0; i < 5; i++) {
      item.innerHTML += `<li onclick="handleClick(this)" >${resultWords[i]}</li>`;
    }
  } else {
    for (let i = 0; i < countWords; i++) {
      item.innerHTML += `<li onclick="handleClick(this)" >${resultWords[i]}</li>`;
    }
  }
});

function handleClick(e) {
  const text = e.innerHTML;
  searchInput.value = text;
  item.innerHTML = "";
}
