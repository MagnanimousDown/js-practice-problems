// Write a function countVowels(str) that:
// Takes a string str
// Returns the count of vowels (a, e, i, o, u — both lowercase and uppercase)
// Example: countVowels("Omkar") → 2

function countVowels (str) {
    const strToArray = Array.from(str)
    let totalVowelCount = 0
    strToArray.forEach(alphabet => {
        if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u' || alphabet === 'A' || alphabet === 'E' || alphabet === 'I' || alphabet === 'O' || alphabet === 'U') {
            totalVowelCount++
        }
    });

    return totalVowelCount
    
}

const totalVowelCount = countVowels("Omkar wants to achieve best out of his life.")
console.log(`Total count of vowels is: ${totalVowelCount}`);
