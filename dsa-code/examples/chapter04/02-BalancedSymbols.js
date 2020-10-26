const { parenthesesChecker, isBalanced } = PacktDataStructuresAlgorithms;

console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false
console.log('[{()}[]}', isBalanced('isBalanced')); // false
console.log('[{()}[]]', isBalanced('isBalanced')); // true
