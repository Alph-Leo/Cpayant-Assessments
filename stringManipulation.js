function manipulateString(input) {
    if(typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    const vowels = 'aieouAIEOU'; // String vowels containing all uppercase and lowercase vowel l
    let result = ''; // result initialized to empty string to score processed alphabets

    for(let alphabets of input) {
        if(!vowels.includes(alphabets)) { // check if each alphabet is not vowel
            if(alphabets === alphabets.toLowerCase()) {
                result += alphabets.toUpperCase(); // if the alphabet is lowercase, convert it to uppercase and add it to result
            } 
            else if(alphabets === alphabets.toUpperCase()) {
                result += alphabets.toLowerCase(); // if the alphabet is uppercase, convert it to lowercase and add it to result
            } 
            else {
                result += alphabets; 
            }

        }
        
    }
    return result; // return the results

    
}

const userInput = manipulateString("Hi, I am Your Brother FROM another Mother");
console.log(userInput);