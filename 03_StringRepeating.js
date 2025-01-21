    let maxLength = 0;
    let currentSubstring = "";
    let longestSubstring = "";  

function lengthOfLongestSubstring(s) {

    for (let char of s) {
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);                   
        }
        currentSubstring += char;
        if (currentSubstring.length > maxLength) {
            maxLength = currentSubstring.length;
            longestSubstring = currentSubstring;
        }
    }
    console.log("Longest Substring:", longestSubstring);
    return maxLength;
}


console.log("Length:", lengthOfLongestSubstring("abcadba")); 