/**
 * Problem 4: FizzBuzz
 * Topic: Looping
 *
 * Description:
 * Write a program that prints the numbers from 1 to `n`. 
 * But for multiples of 3, print "Fizz" instead of the number, 
 * and for multiples of 5, print "Buzz". 
 * For numbers that are multiples of both 3 and 5, print "FizzBuzz".
 *
 * Input:
 * - A positive integer n (1 <= n <= 10^4).
 *
 * Output:
 * - An array of strings representing the FizzBuzz sequence from 1 to n.
 *
 * Examples:
 *
 * Example 1:
 *   Input: n = 5
 *   Output: ["1", "2", "Fizz", "4", "Buzz"]
 *
 * Example 2:
 *   Input: n = 15
 *   Output: [
 *     "1", "2", "Fizz", "4", "Buzz",
 *     "Fizz", "7", "8", "Fizz", "Buzz",
 *     "11", "Fizz", "13", "14", "FizzBuzz"
 *   ]
 *
 * Instructions:
 * - Implement the solution inside the function below.
 * - Do not modify the function name.
 */


function solution(n) {
  let outputArray = [];

  for(let i = 1; i<n+1; i++){
    if(i%3==0 && i%5==0){
      outputArray.push("FizzBuzz")
    }else if(i%3 == 0){
      outputArray.push("Fizz")
    }else if(i%5 == 0){
      outputArray.push("Buzz")
    }else{
      outputArray.push(i)
    }
  }

  return (outputArray);
}

console.log(solution(15));

// module.exports = solution;
