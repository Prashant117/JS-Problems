/**
 * Problem 9: Capitalize First Letter
 * Topic: String
 *
 * Description:
 * Write a JavaScript function that takes a string as input and capitalizes the first letter
 * of each word in the string. All other letters in each word should remain unchanged unless specified otherwise.
 * 
 * Rules:
 * - Words are separated by spaces.
 * - Ignore extra spaces at the start or end of the string.
 * - Maintain existing case for other letters unless they are the first letter.
 * 
 * Example:
 *   Input: "hello world"
 *   Output: "Hello World"
 * 
 *   Input: "javaScript is fun"
 *   Output: "JavaScript Is Fun"
 * 
 *   Input: "   capitalize   multiple   spaces   "
 *   Output: "Capitalize   Multiple   Spaces"
 * 
 * Instructions:
 * - Implement the solution inside the function.
 * - Do not modify the function name.
 * - Return the transformed string.
 */


function solution(str) {
  
  const strArray = str.trim().split(" ")
  let capitalizedStringArray = strArray.map((element) => {
    let capitalizedElement = element.charAt(0).toUpperCase() + element.slice(1)
    return capitalizedElement
  })

  return (capitalizedStringArray.join(" "));
}


console.log(solution("javaScript is fun"));

// module.exports = solution;
