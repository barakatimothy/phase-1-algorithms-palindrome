function reverse(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  word === reversedWord
}

if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("b"))

  console.log("Expecting: true");
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Zig"));
}

module.exports = isPalindrome;