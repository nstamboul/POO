function longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
  }
  
  console.log(longestWord('a b c d e fgh'));
  console.log(longestWord('one two three'));
  console.log(longestWord('red blue grey'));