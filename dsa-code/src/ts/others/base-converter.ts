import Stack from '../data-structures/stack';

export function decimalToBinary(decNumber: number) {
  const remStack = new Stack();
  let rem: number;
  let binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export function baseConverter(decNumber: number, base: number) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

/**
 * if `11` is passed it will return `3` in Binary key as in binary 3 is `11`
 */
export function baseConverterValues(inputNumber: string) {
  let convertedObj: any = {};

  convertedObj.decimal = Number.parseInt(inputNumber, 10);
  convertedObj.binary = Number.parseInt(inputNumber, 2);
  convertedObj.octal = Number.parseInt(inputNumber, 8);
  convertedObj.hex = Number.parseInt(inputNumber, 16);

  return convertedObj;
}

export function baseConverterWithInbuiltFunc(inputNumber: number, inputBase: number) {

  if (!(inputBase >= 2 && inputBase <= 36)) {
    return '';
  }

  return inputNumber.toString(inputBase);
}
