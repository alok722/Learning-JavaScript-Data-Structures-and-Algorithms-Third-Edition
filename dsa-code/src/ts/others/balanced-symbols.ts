import Stack from '../data-structures/stack';

export function parenthesesChecker(symbols: string) {
  const stack = new Stack<string>();
  const opens = '([{';
  const closers = ')]}';
  let balanced = true;
  let index = 0;
  let symbol: string;
  let top: string;

  while (index < symbols.length && balanced) {
    symbol = symbols[index];
    if (opens.indexOf(symbol) >= 0) {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        top = stack.pop();
        if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
          balanced = false;
        }
      }
    }
    index++;
  }
  return balanced && stack.isEmpty();
}

export function isBalanced(symbol: string) {
  const stack = new Stack();
  for (let index = 0; index < symbol.length; index++) {
    if (symbol[index] === '(' || symbol[index] === '{' || symbol[index] === '[') {
      stack.push(symbol[index]); // push left bracket
    } else {
      if (stack.isEmpty()) { // unmatched right bracket
        return false;
      }
      if (((symbol[index] === ')') && (stack.peek() !== '(')) || ((symbol[index] === '}') && (stack.peek() !== '{')) || ((symbol[index] === ']') && (stack.peek() !== '['))) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}
