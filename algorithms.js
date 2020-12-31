//* First Unique Character in a String
//* Given a string, find the first non-repeating character in it
//* and return its index.
//* If it doesn't exist, return -1.

var firstUniqChar = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, map.get(char) + 1 || 1);
    //! sets the character as a key and increases its value by 1 OR sets the value at 1
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
    //! the first unique character will always have a value of 1
  }

  return -1;
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//* Maximum Subarray
// *Given an integer array nums, find the contiguous subarray
//*(containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function (nums) {
  let best = nums[0];
  let sum = 0;
  for (num of nums) {
    sum = Math.max(num, sum + num); //! add nums or replace with highest num
    // console.log("sum: ", sum)
    best = Math.max(best, sum); //! becomes highest possible sum of nums
    // console.log("best: ", best)
  }
  return best;
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//* Merge two sorted linked lists and return it as a new sorted list.
//* The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    //! Select the smallest value from either linked list,
    //! then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    list = list.next;
  }

  //! It's possible that one linked list is shorter than the other so we just
  //! add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  //! return .next because this first element in the linkedlist is empty
  return head.next;
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//* We'll pass you an array of two numbers.
//*Return the sum of those two numbers plus the sum of all the numbers between them.
//*The lowest number will not always come first.

function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Compare two arrays and return a new array with any items
//*only found in one of the two given arrays, but not both.
//*In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((n) => !arr1.includes(n) || !arr2.includes(n));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*You will be provided with an initial array
//*(the first argument in the destroyer function), followed by one or more arguments.
//*Remove all elements from the initial array
//*that are of the same value as these arguments.

function destroyer(arr) {
  let args = Object.values(arguments).slice(1);
  return arr.filter((n) => !args.includes(n));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Convert a string to spinal case.
//*Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

//! checkout regex splits

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Translate the provided string to Pig Latin.
//*Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");

//! check the regex!!!

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Write a function that takes two or more arrays
//*and returns a new array of unique values in the order of the original provided arrays.
//*In other words, all values present from all arrays s
//*hould be included in their original order, but with no duplicates in the final array.
//*The unique numbers should be sorted by their original order,
//*but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  return [...new Set(arr.flat())];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//! Set object in JS

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Given a positive integer num, return the sum of all odd Fibonacci numbers
//*that are less than or equal to num.
//*The first two numbers in the Fibonacci sequence are 1 and 1.
//*Every additional number in the sequence is the sum of the two previous numbers.
//*The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);

//! fib algos are common

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*If we list all the natural numbers below 10 that are multiples of 3 or 5,
//*we get 3, 5, 6 and 9. The sum of these multiples is 23.

//*Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let sum = 0,
    i = 3;
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
    i++;
  }
  return sum;
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//*Each new term in the Fibonacci sequence is generated by adding the previous two terms.
//*By starting with 1 and 2, the first 10 terms will be:

//*1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//*By considering the terms in the Fibonacci sequence whose values do not exceed n,
//*find the sum of the even-valued terms.

const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      // According to problem description our Fibonacci series starts with 1, 2
      fibNum = 2;
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};
