module.exports = function check(str, bracketsConfig) {
	if (str.length % 2) {
		return false;
	}

    let closeBrackets = [];
    let openBracketsPair = [];
    let stack = [];
	
	let n = bracketsConfig.length;
    for (let j = 0; j < n; j++) {
    	closeBrackets.push(bracketsConfig[j][1]);
		openBracketsPair[closeBrackets[j]]= bracketsConfig[j][0];
        }

    for (let i = 0; i < str.length; i++) {
         let currentBracket = str[i];

		if (!closeBrackets.includes(currentBracket) || !(stack.length>0)) {
            stack.push(currentBracket);
        } else {
         let lastStackElement = stack[stack.length - 1];
         if (openBracketsPair[currentBracket] === lastStackElement) {
                 stack.pop();
            } else {
                stack.push(currentBracket);
            }
        }
    }
    return stack.length === 0;
}