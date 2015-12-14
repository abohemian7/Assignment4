

var ruleOne = function(position, englishWords){
    if(new RegExp(/^[r]\b/).test(englishWords.substr(position,2))){return true;}
    return false;
}

// 2. an "a" or "A" will be replaced with "hra".
var ruleTwo = function(position, englishWords){
    if(new RegExp(/[a]/i).test(englishWords.substr(position,1))){return true;}
    return false;
}

// 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
//   ".!?", followed by a space, followed by a letter.)
var ruleThree = function(position, englishWords){
    if(new RegExp(/[.!?]\s\w/).test(englishWords.substr(position,3))){return true;}
    return false;
}

// 4. "e" or "E" is replaced by "rr"
var ruleFour = function(position, englishWords){
    if(new RegExp(/[eE]/).test(englishWords.substr(position,1))){return true;}
    return false;
}

// 5. "i" or "I" is replaced by "rrRr"
var ruleFive = function(position, englishWords){
    if(new RegExp(/[iI]/).test(englishWords.substr(position,1))){return true;}
    return false;
}

// 6. "o" or "O" is replaced by "rrrRr"
var ruleSix = function(position, englishWords){
    //if(new RegExp(/[oO]/).test(englishWords.substr(position,1))){return true;}
    //return false;

    return new RegExp(/[oO]/).test(englishWords.substr(position,1));
}

// 7. "u" or "U" is replaced by "rrrrRr"
var ruleSeven = function(position, englishWords){
    //if(new RegExp(/[uU]/).test(englishWords.substr(position,1))){return true;}
    //return false;

    return new RegExp(/[uU]/).test(englishWords.substr(position,1));
}

// 8. "r" or "R' is replaced by "RR"
var ruleEight = function(position, englishWords){
    if(new RegExp(/[rR]/).test(englishWords.substr(position,1))){return true;}
    return false;
}

// 9. if the last character is not alphanumeric, end with " ... unggggghhh"
var ruleNine = function(aWord){
    if(new RegExp(/\W/).test(aWord.substr(-1,1))){return true;}
    return false;
}


// translate from zombie to english
// whatever is in the english box
module.exports.zombify = function(englishWords){

    var zombieWords = "";
    var spaces = 0;

    for(var i = 0; i < englishWords.length; i++){
        // rule 10
        if(englishWords[i]===" "){
            spaces++;
            zombieWords += englishWords[i];
            if(spaces%4 === 0){
                zombieWords += " ... brains ... "
            }
        }
        // rule 1
        else if(ruleOne(i, englishWords)){
            zombieWords += "rh";}
        // rule 2
        else if(ruleTwo(i, englishWords)){
            zombieWords += "hra";}
        // rule 3
        else if (ruleThree(i, englishWords)){
            zombieWords += englishWords.substr(i,3).toUpperCase();
            i += 2;}
        // rule 4
        else if (ruleFour(i, englishWords)){
            zombieWords += "rr";}
        // rule 5
        else if (ruleFive(i, englishWords)){
            zombieWords += "rrRr";}
        // rule 6
        else if (ruleSix(i, englishWords)){
            zombieWords += "rrrRr";}
        // rule 7
        else if (ruleSeven(i, englishWords)){
            zombieWords += "rrrrRr";}
        // rule 8
        else if (ruleEight(i, englishWords)){
            zombieWords += "RR";}
        else {zombieWords += englishWords[i]}
    }

    // rule 9
    if(ruleNine(englishWords)){zombieWords +=" ... unggggghhh";}

    return zombieWords;

}

// translate from Zombie to English
// take parameter and return parameter
module.exports.unzombify = function(zombieWords){

    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/ ... unggggghhh/g,"");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrrrRr/g,"u");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrrRr/g,"o");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrRr/g,"i");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rr/g,"e");
    console.log("zombieWords: " + zombieWords);
    zombieWords = zombieWords.replace(/RR/g,"r");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/hra/g,"a");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rh\b/g,"r ");
    console.log("zombieWords: " + zombieWords)

    var englishWords = zombieWords;

    // logically, this is what is happening
    return englishWords;

}