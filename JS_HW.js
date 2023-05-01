// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

// const x = 32243

// function reverseNUmber(x) {
//    return x.toString().split('').reverse().join('')
// }
// console.log(reverseNUmber(x))

// --------------------------------------------------------------------

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// let str = "madam"

// function palindrome(str) {
//     let l = 0
//     let r = str.length - 1

//     while (l < r) {
//         if (str[l] == str[r]) {
//             l++, r--
//         }
//         else {
//             return false
//         }
//     }

//     return true
// }

// console.log(palindrome(str))

// --------------------------------------------------------------------

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

// let str = 'dog'

// function generate_all_combination(str) {
//     newlist = []
//     for (i = 0; i < str.length; i++) {
//         for (j = i + 1; j <= str.length; j++) {
//             newlist.push(str.slice(i,j))
//         }
//     }
//     return newlist
// }

// console.log(generate_all_combination(str))

// --------------------------------------------------------------------

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// str = 'webmaster'

// function rearrange(str) {
//     return str.split('').sort().join('')
// }

// console.log(rearrange(str))

// --------------------------------------------------------------------

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

// str = 'the quick brown fox'

// function convertUpperCase(str) {
//     newArr = str.split(' ')
//     res = []
//     for (i=0; i < newArr.length; i++) {
//         res.push(newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1))
//     }
    
//     return res.join(' ')

// }

// console.log(convertUpperCase(str))

// --------------------------------------------------------------------

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

// str = 'Web Development Tutorial'

// function longest_word(str) {
//     arr = str.split(' ')
//     maxlength = 0

//     for (i = 0; i < arr.length; i++) {
//         maxlength = Math.max(maxlength, arr[i].length)
//         return maxlength
//     }
// }

// console.log(longest_word(str))

// --------------------------------------------------------------------

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

// str = "The quick brown fox"


// function countVowel(str){
//     vowel_list = "aeiouAEIOU"
//     res = 0
//     for (i = 0; i < str.length; i++) {
//         if (vowel_list.indexOf(str[i]) != -1) {
//             res  = res + 1
//         }
//     }
//     return res
// }

// console.log(countVowel(str))

// --------------------------------------------------------------------

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// n = 18

// function checkPrime(n) {
//     if (n == 1) {
//         return false
//     }
//     else if (n == 2) {
//         return true
//     }
//     else {
//         for (i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false
//             }
//         }
//         return true
//     }
// }

// console.log(checkPrime(n))

// --------------------------------------------------------------------

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function returnType(arg) {
//     return typeof arg
// }

// console.log(returnType(true))

// --------------------------------------------------------------------

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

// function getIdentityMatrix(n) {
//     let matrix = []

//     for (let i = 0; i < n; i++) {
//         let row = []
//         for (let j = 0; j < n; j++) {
//             row.push(i === j ? 1 : 0)
//         }
//         matrix.push(row)
//     }
//     return matrix
// }

// console.log(getIdentityMatrix(3))

// --------------------------------------------------------------------

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

// arr = [5,2]
// function returnList(arr) {
//     return [arr.sort()[1], arr.sort().reverse()[1]]
// }

// console.log(returnList(arr))

// --------------------------------------------------------------------

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function perfectNumber(n) {
//     arr = [];
//     let sum = 0;
//     for (i = 1; i <= n; i++) {        
//         if (n % i == 0){
//             arr.push(i)
//         }
//     }
    
//     arr.forEach(element => {sum = sum + element})

//    if (sum / 2 == n){
//     return true
//    }
//    else {
//     return false
//    }

// }

// console.log(perfectNumber(496))

// --------------------------------------------------------------------

// 13. Write a JavaScript function to compute the factors of a positive integer. 

// function factors(n) {
//     arr = [];
//     let sum = 0;
//     for (i = 1; i <= n; i++) {        
//         if (n % i == 0){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(factors(6))

// --------------------------------------------------------------------

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
//Greedy
// n = 46
// coins = [25, 10, 5, 2, 1]


// function amountTocoins(n, coins) {
//     lst=[]
//     left = n
//     for (i = 0; i < coins.length; i++) {
//         choice = Math.floor(left/coins[i])
//         left = left % coins[i]
//         for (j=0;j<choice;j++){
//             lst.push(coins[i])
//         }
//     }
//     return lst
// }

// console.log(amountTocoins(n, coins))

// --------------------------------------------------------------------

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 

// n = 3
// b = 2

// function exponential(n,b) {
//     return n ** b
// }

// console.log(exponential(n,b))

// --------------------------------------------------------------------

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

// str = "thequickbrownfoxjumpsoverthelazydog"
// function uniqueCharacter() {
//     obj = {}
//     arr = []
//     for (i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]] ++
//         }
//         else {
//             obj[str[i]] = 1
//         }
//     }
    
//     for (i = 0; i < str.length; i++) {
//         if (obj[str[i]] == 1) {
//             arr.push(str[i])
//         }
//     }
//     return arr.join('')
// }

// console.log(uniqueCharacter(str))

// --------------------------------------------------------------------

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

// str = "apple"

// function findOccurrences(str) {
//     obj = {}
//     for (i = 0; i < str.length; i++) {     
//         str = str.toLowerCase()
//         if(obj[str[i]]) {
//            obj[str[i]] ++
//         }
//         else {
//             obj[str[i]] = 1
//         }
//     }
//     return obj
// }

// console.log(findOccurrences(str))

// --------------------------------------------------------------------

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// arr = [-1, 1, 3, 6, 9, 15, 16, 17]
// target = 9

// function binarySearch(arr, target) {
    
//     l = 0
//     r = arr.length - 1

//     while (l <= r) {
//         mid = l +  Math.floor((r - l) / 2)
        
//         if (target == arr[mid]) {
//             return mid
//         }
//         else if (target < arr[mid]) {
//             r = mid - 1
//         }
//         else {
//             l = mid + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr, target))

// --------------------------------------------------------------------

// 19. Write a JavaScript function that returns array elements larger than a number. 

// array = [1, 2, 3, 4, 5, 6, 7, 8]
// num = 5

// function largerNumber(array) {
//     newList = []
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > num) {
//             newList.push(array[i])
//         }
//     }
//     return newList
// }

// console.log(largerNumber(array))

// --------------------------------------------------------------------

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// len = 8
// function randomCharacter(len) {  
//     res = ''
//     for (i = 0; i < len; i++) {
//         res = res + charList.charAt(Math.floor(Math.random() * charList.length))
        
//     }
//     return res
// }

// console.log(randomCharacter(len))
// --------------------------------------------------------------------

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

// arr = [1, 2, 3, 4]
// subsetLength = 3

// function getSubset(arr, subsetLength) {
    
//     let res = []

//     function combine(startIndex, combination) {
//         if (combination.length === subsetLength) {
//             res.push(combination)
//             return
//         }

//         for (let i = startIndex; i < arr.length; i++) {
//             combine(i+1, combination.concat(arr[i]));
//         }
//     }

//     combine(0, [])
//     return res

// }

// console.log(getSubset(arr, subsetLength))

// --------------------------------------------------------------------

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

// str = 'microsoft.com'
// target = 'o'

// function countOccurrences(str, target) {
//     res = 0
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == target) {
//             res ++
//         }
//     }
//     return res
// }

// console.log(countOccurrences(str, target))
// --------------------------------------------------------------------

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

// str = 'abacddbec' 
// function first_not_repeat(str) {
//     for (i = 0; i< str.length; i++) {
//         doubudengyu=true
//         for (j = i + 1; j < str.length; j++) {
//             if (str[i] != str[j]) {
//             }
//             else {
//                 doubudengyu=false;
//             }
//         }
//         if (doubudengyu){
//             return str[i]
//         }
        
//     }
// }

// --------------------------------------------------------------------

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// arr = [3, 2, 1]
// function swap(arr, l, r){
//     let temp = arr[l]
//     arr[l] = arr[r]
//     arr[r] = temp
// }

// function bubble_Sort(arr) {
//     let len = arr.length
    
//     for(i = 0; i < len; i++) {
//         for (j = 0; j < len - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble_Sort(arr))
// --------------------------------------------------------------------

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// arr = ["Australia", "Germany", "United States of America"]

// function Longest_Country_Name(arr) {
//     return arr.reduce((longest, currentname) => { 
//         if (longest.length > currentname.length) {
//             return longest} 
//         else {
//             return currentname}})
// }

// console.log(Longest_Country_Name(arr))
// --------------------------------------------------------------------

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

// s = 'abcabcbb'

// function LongestSubstring(s) {
//     // using set to determine the duplicates char, and using sliding window l and r, l initially is 0 l is i, increment every loop
//     charSet = new Set()
//     l = 0
//     let res = ""
//     let longest = ""
//     // evertime the right poiter meet the duplicates char we have to remove it s[l] from the list
//     for (r = 0; r < s.length; r++) {
//         while (charSet.has(s[r])) {
//             charSet.delete(s[l])
//             l += 1
//         }       
//         charSet.add(s[r])        
//         if (charSet.size > res.length) {
//             res = s.slice(l, r + 1)
//         }
//         if (res.length > longest.length) {
//             longest = res
//         }
//     }
//     return longest
// }

// console.log(LongestSubstring(s))
// --------------------------------------------------------------------

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric 
// factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a 
// palindrome. For example, the longest palindromic substring of "bananas" is "anana". 
// The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", 
// there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, 
// "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings 
// (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) 
// rather than returning only one substring or returning the maximum length of a palindromic substring.

// str = 'babad'
// function longestPalindrome(str) {
//     res = ''
//     longestlen = 0

//     for (i = 0; i < str.length; i++) {
//         // odd length
//         let l = i
//         let r = i
//         while (l >= 0 && r < str.length && str[l] == str[r]) {
//             if ((r - l + 1) > longestlen) {
//                 res = str.slice(l, r+1)
//                 longestlen = r-l + 1
//             }
//             l --
//             r ++
//         }

//         // even length
//         l = i
//         r = i + 1

//         while (l >= 0 && r < str.length && str[l] == str[r]) {
//             if ((r - l + 1) > longestlen) {
//                 res = str.slice(l, r + 1)
//                 longestlen = r - l + 1
//             }
//             l -= 1
//             r += 1
//         }
//     }
//     return res
// }
// console.log(longestPalindrome(str))

// --------------------------------------------------------------------

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// function hello(name) {
//     console.log("Hello " + name)
// }

// function sayhello(hellofunction, name) {
//     hellofunction(name)
// }

// sayhello(hello, "Bob")

// --------------------------------------------------------------------

// 29. Write a JavaScript function to get the function name. 

// function getFunctionName(parameter) {
//     return parameter.name
// }

// console.log(getFunctionName(getFunctionName))
// --------------------------------------------------------------------