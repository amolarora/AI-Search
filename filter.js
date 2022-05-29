const filter = (userInput) => {
    if (userInput.charAt(userInput.length - 1) == "%" | userInput.charAt(userInput.length - 1) == "!" | userInput.charAt(userInput.length - 1) == "?" | userInput.charAt(userInput.length - 1) == ";" | userInput.charAt(userInput.length - 1) == "-"){
        userInput = userInput.substring(0,userInput.length - 1);
    }
    if (userInput.charAt(0) == "%" | userInput.charAt(0) == "!" | userInput.charAt(0) == "?" | userInput.charAt(0) == ";" | userInput.charAt(0) == "-"){
        userInput = userInput.substring(1);
    }

    userInput = userInput.replace(/%|!|\?|;|-/g, " ");
    
    return userInput;
}

module.exports = filter;