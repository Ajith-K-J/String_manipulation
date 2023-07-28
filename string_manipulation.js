// Given example string
const exampleString = `A thing of beauty is a joy forever, 
Its loveliness increases, it will never 
Pass into malayalam nothingness; But still keep 
A bower quiet for us, and a sleep 
Full of sweet Dreams, health, and quiet breathing. 
Therefore, on every morrow, are we wreathing? 
A flowery band to bind Us to the earth, 
Spite of despondence, of the inhuman dearth 
Of noble natures, of gloomy days, 
Of all the Unhealthy and over-darkened ways 
Made for our searching: yes, in spite of all, 
Some shape of beauty moves away the pall 
From our dark spirits. Such the sun, the moon, 
Trees old, and Young, sprout a shady boon 
For simple sheep; and such are daffodils 
With the green world they live in; and clear rivers 
That for themselves, a cooling covert makes 
'Gainst the hot season; the mid-forest brake, 
Rich with a Sprinkling of fair musk-rose blooms: 
And such Too is the Grandeur of the dooms 
We have imagined for the mighty dead; 
All lovely tales that we have heard or read: 
An endless Fountain of immortal drink, 
Pouring unto us from the heaven's brink.`;

// Parse the given example string into an array of words
const arrayOfWords = exampleString
  .match(/[a-zA-Z']+/g)
  .filter(word => word !== '');
const stringArray = exampleString.split('\n').filter(line => line.trim() !== '');

// Objective 1: Print all repeating letters and their count for each element in the string array
function printRepeatingLettersForArrayElements(stringArray) {
  // Function to count repeating letters in a string
  function countRepeatingLetters(inputString) {
    const charCounts = {};
    for (const char of inputString) {
      if (/[a-zA-Z]/.test(char)) {
        const charLower = char.toLowerCase();
        charCounts[charLower] = (charCounts[charLower] || 0) + 1;
      }
    }
    return charCounts;
  }



  // Iterate through each string in the input array
  for (const inputString of stringArray) {
    const lowerCaseInputString = inputString.toLowerCase(); // Convert the string to lowercase
    const charCounts = countRepeatingLetters(inputString);
    const repeatingLetters = {};
    for (const [char, count] of Object.entries(charCounts)) {
      if (count > 1) {
        repeatingLetters[char] = count;
      }
    }
    if (Object.keys(repeatingLetters).length > 0) {
      console.log(`String Element: ${inputString}, Repeating Letters:`, JSON.stringify(repeatingLetters));
    }
  }
}








// Objective 2: Print all words that start with the upper case, and in each word, replace the case of each letter with the opposite case.

function toggleCaseForUppercaseWordsInArray(words) {
  // Step 1: Filter words that start with an uppercase letter and modify them
  const modifiedWords = words
    .filter(word => /^[A-Z]/.test(word)) // Filter words that start with an uppercase letter
    console.log(modifiedWords);

    const upperCaseWords = modifiedWords.map(word => {
      // Replace the case of each letter with the opposite case
      return word
        .split('')
        .map(letter => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()))
        .join('');
    });

  // Step 2: Print the modified words
  console.log(upperCaseWords.join(', '));
}

// Objective 3: Print word starting or ending with the given letter
function printWordStartingOrEndingWithLetter(words, letter) {
  const matchingWords = words.filter(word => {
    if(word.length===1){
      return (word[0].toLowerCase() === letter )
    }
    else{
    // console.log(word[0],letter);
          return ((word[0].toLowerCase() === letter && word[word.length-1].toLowerCase() !== letter) ||
                (word[0].toLowerCase() !== letter && word[word.length-1].toLowerCase() === letter));
        }
  });

  if (matchingWords.length === 0) {
    console.log(`No word starts or ends with the letter '${letter}'.`);
  } else {
    for (const word of matchingWords) {
      console.log(word);
    }
  }
}

// Objective 4: Print middle letter for odd length words
function printMiddleLetterForOddLengthWords(words) {
  for (const word of words) {
    if (word.length % 2 === 1) {
      const middleIndex = Math.floor(word.length / 2);
      console.log(`Word: ${word}, Middle Letter: ${word[middleIndex]}`);
    }
  }
}

// Call the functions to achieve the objectives
printRepeatingLettersForArrayElements(stringArray);
toggleCaseForUppercaseWordsInArray(arrayOfWords);
const inputLetter = 'a'
// console.log(inputLetter);
printWordStartingOrEndingWithLetter(arrayOfWords, inputLetter.toLowerCase());
printMiddleLetterForOddLengthWords(arrayOfWords);
// console.log(arrayOfWords);

