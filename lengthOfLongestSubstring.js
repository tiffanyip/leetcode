/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longest = "";
  var curr = "";
  var i = 0;
  while(i < s.length){
    //build string
    var j = i;
    while(!curr.includes(s[j]) && j < s.length){
      curr += s.charAt(j);
      j++;
    }
    if(curr.length > longest.length){
      longest = curr;
    }
    curr = "";
    i++;
  }
  return longest.length;
};
