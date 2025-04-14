//1 Create a variable to store your name and display it in an alert.
let myName = "Eniola"
console.log(myName)

//2 Declare two number variables and show their sum, difference, product, and quotient.
let variable1 = 24;
let variable2 = 100;

let sum = variable1 + variable2;
let difference = variable1 - variable2;
let product = variable1 * variable2;
let quotient = variable1 / variable2;

console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)

//3 Write a program that converts Celsius to Fahrenheit.
let celsius = 32;
let fahrenheit = (celsius * 9/5) + 32

console.log(fahrenheit)

//4 Create a program that calculates the area of a rectangle using variables for length and width.
let length = 15;
let breadth = 20;
let area = length * breadth;

console.log(area)

//5 Write code that checks if a number is even or odd and displays the result.
let num = 5;
if (num % 2 == 0){
console.log("This number is an even number")}
else{
console.log("This number is an odd number")}

//6 Create a program that determines if a year entered is a leap year.
let year = 1997;
if ((year % 4 == 0 && year % 100 != 0 )|| ( year % 100 == 0 )){
    console.log( year + " is a leap year")
}else{
    console.log( year + " is not a leap year")
}

//7. Write a function that returns the reverse of a string input.
function reverseString(string){
    return string.split('').reverse().join('');
}
let reversed = reverseString("Techcrush")
console.log(reversed)

//8. Create a function that counts the number of vowels in a string.
function numberOfVowels(string){
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    string = string.toLowerCase();
    for(let i = 0 ; i < string.length; i++ ){
    if (vowels.includes(string[i])){
        count++;
      } 
    }
    return count;
}
let vowels = numberOfVowels("Eniola")
console.log(vowels)

//9. Write a program that finds the largest number in an array of 5 numbers.
function findLargestNumber(numbers){
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}
let numbers = [20, 45 , 39, 60, 12];
let largestNumber = findLargestNumber(numbers);
console.log(largestNumber);


//10. Create a function that checks if a string is a palindrome.
function isPalindrome(string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanString === cleanString.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan")); 
console.log(isPalindrome("hello")); 


//11. Write code that calculates the factorial of a number.
function factorial(n) {
    if (n < 0) return null; 
    if (n === 0) return 1;  

    let num = 1;
    for (let i = 1; i <= n; i++) {
        num *= i;  
    }
    return num;
}

console.log(factorial(8)); 

//12. Create a function that generates a random number between two given values.
function randomNumber(a,b){
   return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(randomNumber(1,10));

//13. Write a program that converts a number of seconds into hours, minutes, and seconds.
function convertSeconds(seconds) {
  const hours = Math.floor(seconds / 3600); 
  const minutes = Math.floor((seconds % 3600) / 60); 
  const remainingSeconds = seconds % 60; 

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds
  };
}

const result = convertSeconds(3000);  
console.log("Time: " + result.hours + " hours, " + result.minutes + " minutes, " + result.seconds + " seconds");


//14. Create a program that checks if a number is prime.
function isPrime(number) {
  if (number <= 1) return false;  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;  
  }
  
  return true;  
}

console.log(isPrime(2)); 

//15. Write a function that capitalizes the first letter of each word in a sentence.

//16. Create a program that calculates the sum of all numbers from 1 to n.
function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(11)); 


//17. Write code that finds the average of numbers in an array.
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; 

    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

console.log(calculateAverage([6, 5, 9, 4, 1, 3])); 
console.log(calculateAverage([]));


//18. Create a function that removes duplicate values from an array.
function removeDuplicates(array) {
    return [...new Set(array)];  
  }
 
  console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));  
  

//19. Write a program that counts down from 10 to 1, then displays "Blast off!".
function countdown() {
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
    console.log("Blast off!");
  }
  
  countdown();
//20. Create a function that determines if a string contains only numbers.
function isOnlyNumbers(str) {
    return /^\d+$/.test(str);  
  }
  
  console.log(isOnlyNumbers("629b45"));  
  
//21. Write code that finds the second smallest number in an array.
function secondSmallest(arr) {
    const uniqueArr = [...new Set(arr)];  
    uniqueArr.sort((a, b) => a - b);  
    return uniqueArr[1];  
  }
  
  console.log(secondSmallest([5, 2, 8, 1, 2])); 
  
//22. Create a program that displays the multiplication table for a given number.
function multiplicationTable(n){
    for(let i = 0; i <= 12; i++){
        console.log(n + " x " + i + " = " + n * i);
    }
}
multiplicationTable(12)

//23. Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).
function validePassword(password) {
    const hasUpper = /[A-Z]/.test(password);      
    const hasLower = /[a-z]/.test(password);      
    const hasNumber = /[0-9]/.test(password);     
    const isLongEnough = password.length >= 8;    
      
    return hasUpper && hasLower && hasNumber && isLongEnough;
      }
 
  console.log(validePassword("password"));   
  
//24. Create code that simulates a simple calculator with basic operations.
function calculator(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return b !== 0 ? a / b : 'Error: Division by zero';
      default:
        return 'Invalid operation';
    }
  }
  console.log(calculator(3, 3, 'add'));        
  console.log(calculator(1, 2, 'subtract'));    
  console.log(calculator(25, 0, 'divide'));     
  console.log(calculator(5, 6, 'multiply'));   


//25. Write a program that finds all factors of a given number.
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  console.log(findFactors(18));  

//26. Create a function that checks if two strings are anagrams.
function areAnagrams(string1, string2) {
    let sortString = str => str.toLowerCase().split('').sort().join('');
    return sortString(string1) === sortString(string2);
  }
  
  console.log(areAnagrams("listen", "silent"));  
  console.log(areAnagrams("techcrush", "mobile"));    
  
//27. Write a program that generates the Fibonacci sequence up to n terms.
function fibonacci(n) {
    if (n <= 0) {
        return [];  
      } else if (n === 1) {
        return [0];  
      }
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
  
  console.log(fibonacci(10));  

//28. Create code that sorts an array of numbers without using the built-in sort method.
function customSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];  
        }
      }
    }
    return arr;
  }
  
  console.log(customSort([9, 2, 8, 6, 4]));  

//29. Write a function that counts how many times a specific element appears in an array.
function countOccurrences(array, x) {
    let count = 0;  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === x) {
        count++;  
      }
    }
    return count;
  }
  let array = [7, 8, 7, 14, 4, 1, 7, 7];
  let x = 7;
  console.log(countOccurrences(array, x));
  
  
//30. Create a shopping cart program where users can add items, remove items, and calculate the total price.
let shoppingCart = []

function addItem(name, price) {
    shoppingCart.push({ name: name, price: price });
    console.log(name +" has been added to the cart.");
}

function removeItem(name) {
    const index = shoppingCart.findIndex(item => item.name === name);
        
    if (index !== -1) {
        shoppingCart.splice(index, 1);  
        console.log(name + " has been removed from the cart.");
    } else {
        console.log(name + " is not in the cart.");
    }
}
     
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price;
    }
    return total;
}

      addItem("Yam", 200);
      addItem("Plantain", 1000);
      addItem("Pepper", 570);
      
      console.log("Total price: $ " + calculateTotal());  
      
      // Remove an item from the cart
      removeItem("Yam");
      
      // Calculate the total price again after removing an item
      console.log("Total price after removal: $ " + calculateTotal());