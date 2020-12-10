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

var maxSubArray = function(nums) {
  let best = nums[0]
  let sum = 0
  for (num of nums) {
      sum = Math.max(num, sum + num) //! add nums or replace with highest num
      // console.log("sum: ", sum)
      best = Math.max(best, sum) //! becomes highest possible sum of nums
      // console.log("best: ", best)
  }
  return best
};



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//* Merge two sorted linked lists and return it as a new sorted list. 
//* The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list
  
  while (l1 !== null && l2 !== null) {

  //! Select the smallest value from either linked list,
  //! then increment that list forward.
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val)
          l1 = l1.next
      } else {
          list.next = new ListNode(l2.val)
          l2 = l2.next
      }
      
      list = list.next
  }
  
//! It's possible that one linked list is shorter than the other so we just
//! add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2
  
//! return .next because this first element in the linkedlist is empty
  return head.next
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

