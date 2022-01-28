// let text = "Ho,wma,ny";
// const myArray = text.split(",");
// console.log(myArray)



// let age = 20;
// const oldEnough = (age >= 21) ? "You may enter." : "You may not enter.";
// console.log (oldEnough);


function palindrome(str){
    event.preventDefault();
const myInput=document.querySelector("input").value
const isPalindrome = document.getElementById("result")
const lowString = myInput.toLowerCase();
const splitSring = lowString.split("");
const reverseString = splitSring.reverse();
const newStr = reverseString.join("")

if (myInput==""){
    alert("Please input word")
}
else if (newStr == lowString){
isPalindrome.innerHTML="This is a palindrome"
}
else{
    isPalindrome.innerHTML="This is not a palindrome"}


}


palindrome();




// function palindrome(str){

  //   const alphanumericOnly = str

  //   //1)Lowercase the input (toLowerCase method)
  //   .toLowerCase()

  // // 2) Strip out non-alphanumeric characters
  //  .match(/[a-z0-9]/g);

  // // 3) return string === reversedString return true! if it's a Palindrome If not we return false

  //   return alphanumericOnly.join('')===alphanumericOnly.reverse().join('');
    

// }
// palindrome('eye');











// const myButton = document.querySelector("button")
// console.log (myButton)
// myButton.addEventListener('click', function(){
//     alert('Thanks for clicking')
// })

// program to check if the string is palindrome or not

