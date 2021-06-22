// making a trie node

function newNode(value) {
  this.value = value;
  this.pointer = {};
  this.words = [];
  this.isTerminate = false;
}

// function to insert word to trie

function insertWord(word, index, node) {
  // stopping condition for recursive function

  if (word.length === index) {
    node.isTerminate = true;
    return;
  }

  // check if node already present

  if (!node.pointer[word[index]]) {
    node.pointer[word[index]] = new newNode(word[index]);
  }

  // add word to root node

  node.words.push(word);

  // recursion call for other letter in a word
  insertWord(word, index + 1, node.pointer[word[index]]);
}

// Search for word

function searchWord(word, index, node) {
  if (word.length === index) {
    return node.words;
  }

  // if not present in a node

  if (!node.pointer[word[index]]) {
    return [];
  }

  // if present in a node

  return searchWord(word, index + 1, node.pointer[word[index]]);
}

// capitilizing first leter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
