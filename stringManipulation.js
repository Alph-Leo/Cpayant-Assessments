function manipulateString(input) {
    if(typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    const vowels = 'aieouAIEOU';
    let result = '';

    for(let alphabets of input) {
        if(!vowels.includes(alphabets)) {
            if(alphabets === alphabets.toLowerCase()) {
                result += alphabets.toUpperCase();
            } else if(alphabets === alphabets.toUpperCase()) {
                result += alphabets.toLowerCase();
            } else {
                result += alphabets;
            }

        }
        
    }
    return result;

    
}

const userInput = manipulateString("Hello, World");
console.log(userInput);