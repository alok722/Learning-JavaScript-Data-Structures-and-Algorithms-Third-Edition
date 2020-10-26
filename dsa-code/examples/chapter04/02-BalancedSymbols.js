const { parenthesesChecker, isBalanced } = PacktDataStructuresAlgorithms;

console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false
console.log('[{()}[]}', isBalanced('[{()}[]}')); // false
console.log('[{()}[]]', isBalanced('[{()}[]]')); // true
console.log('[(a+b)+(c+d)]', isBalanced('[(a+b)+(c+d)]')); // true
