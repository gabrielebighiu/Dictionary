let words = [];
let displayText = document.getElementById("displayText");

// Adds the word from the 'Add' section and stores in the words[] array
function addWord() {
    if (findWord(document.getElementById("addWordInput").value.toUpperCase())) {
        displayText.innerHTML = "This word has already been added to the ditionary";
        document.getElementById("display").appendChild(displayText);
    } else {
        words[words.length] = document.getElementById("addWordInput").value.toUpperCase();
        displayText.innerHTML = "This word has been added to the dictionary";
        document.getElementById("display").appendChild(displayText);
    }
}

// Looks for a word in words[] array. indexOf() returns a positive number if word is in words[], or else it returns -1
function findWord(word) {
    if (words.indexOf(word) > -1) {
        return true;
    }
    return false;
}

// Checks if the word the user inputs is in the dictionary
function checkWord() {
    if (findWord(document.getElementById("checkWordInput").value.toUpperCase())) {
        displayText.innerHTML = "The searched word is in the dictionary";
    } else {
        displayText.innerHTML = "The searched word is not in the dictionary";
    }
}
