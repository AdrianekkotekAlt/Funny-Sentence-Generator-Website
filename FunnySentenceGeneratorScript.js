function generateRandomSentence() {

    var inputElement = document.getElementById("userInput");
    var inputValue = inputElement.value;

    var words = inputValue.split(' ');

    var replacements = {
        "hello": ["Hi", "Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha", "Saludo"],
        "saludo": ["Hi", "Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha"],
        "aloha": ["Hi", "Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Sup","Saludo"],
        "howdy": ["Hi", "Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Sup", "Aloha", "Saludo"],
        "sup": ["Hi", "Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Aloha", "Saludo"],
        "salutations": ["Hi", "Hey", "Hola", "Greetings", "Yo","Sup","Howdy", "Bonjour","Saludo"],
        "bonjour": ["Hi", "Hey", "Hola", "Greetings", "Yo","Sup","Howdy", "Salutations", "Saludo"],
        "yo": ["Hi", "Hey", "Hola", "Greetings", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha", "Saludo"],
        "greetings": ["Hi", "Hey", "Hola", "Yo", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha", "Saludo"],
        "hey": ["Hi", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha", "Saludo"],
        "hi": ["Hey", "Hola", "Greetings", "Yo", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha", "Saludo"],
        "welcome": ["Yo", "Hello", "Greetings", "What's up", "Hola", "Salutations", "Bonjour", "Howdy", "Sup", "Aloha"],
        "to": ["from", "into", "on", "with", "to the land of"],
        "i'm": ["I'm", "I am", "I feel", "I seem to be", "I was thinking I'm"],
        "you": ["the universe", "everyone", "someone", "they", "he who must not be named"],
        "love": ["hate", "adore", "embrace", "despise", "shun"],
        "are": ["were", "is", "could be", "seem to be", "will be"],
        "good": ["bad", "great", "average", "weird", "strange"],
        "bad": ["amazing", "wonderful", "horrible", "fantastic", "terrible"]
    };

    var randomSentence = words.map(function(word) {
        var lowercaseWord = word.toLowerCase();
        var replacementList = replacements[lowercaseWord];
        
        if (replacementList) {

            var replacement = replacementList[Math.floor(Math.random() * replacementList.length)];

            if (word.charAt(0) === word.charAt(0).toUpperCase()) {
                replacement = capitalizeFirstLetter(replacement);
            }

            return replacement;
        }

        return word;
    });

    var randomSentenceString = randomSentence.join(' ');

    document.getElementById("output").textContent = randomSentenceString;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
