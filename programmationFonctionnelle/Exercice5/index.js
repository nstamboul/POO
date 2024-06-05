    function squareEachDigit(number) {
    return number.toString().split('').map(digit => digit * digit).join('');
}
//Test avec 9119
  console.log(squareEachDigit(9119)); 