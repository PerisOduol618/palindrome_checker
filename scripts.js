function palindrome(str){

    const alphanumericOnly = str

    //1)Lowercase the input (toLowerCase method)
    .toLowerCase()

  // 2) Strip out non-alphanumeric characters
   .match(/[a-z0-9]/g);

  // 3) return string === reversedString return true! if it's a Palindrome If not we return false

    return alphanumericOnly.join('')===alphanumericOnly.reverse().join('');

}
palindrome('eye');