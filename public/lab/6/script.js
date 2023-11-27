function displayGreeting() {
    var inputText = document.getElementById("input-text").value;
    var translatedText = translateToPigLatin(inputText);
    var greetingMessage = "Hello, here is that translation, " + translatedText + ". Welcome to our interactive page!";
    document.getElementById("piglatin-message").innerText = greetingMessage;
}
function translateToPigLatin(text) {
    return text.split(' ').map(word => {
        // Check if the first character is a vowel
        if (/[aeiouAEIOU]/.test(word[0])) {
            return word + "way";
        } else {
            // Find the index of the first vowel
            const index = word.search(/[aeiouAEIOU]/);
            // If no vowel is found, return the original word
            if (index === -1) return word;
            // Move all characters before the first vowel to the end and add "ay"
            return word.substring(index) + word.substring(0, index) + "ay";
        }
    }).join(' ');
