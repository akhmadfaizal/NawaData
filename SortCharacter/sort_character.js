function sortCharaterVowel(string){
    const vowel = string.toLowerCase();
    const letters = {};
    for (const letter of vowel) {
        if (/[aeiou]/i.test(letter)) {
            letters[letter] = (letters[letter] || '') + letter;
        }
    }
    const vowels = Object.values(letters).join('');
    console.log("Vowel Characters: ");
    console.log(vowels);
}

function sortCharaterConsonant(string){
    const vowel = string.toLowerCase();

    const vs = {};
    const cs = {};
    for (const letter of vowel.replaceAll(' ', '')) {
        const obj = /[aeiou]/i.test(letter) ? vs : cs;
        obj[letter] = (obj[letter] || '') + letter;
    }
    const consonants = Object.values(cs).join('');
    console.log("Consonant Characters: ");
    console.log(consonants);
    
}

sortCharaterVowel("Sample Case");
sortCharaterConsonant("Sample Case");

sortCharaterVowel("Next Case");
sortCharaterConsonant("Next Case");