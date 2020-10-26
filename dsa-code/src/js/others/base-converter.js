// @ts-check
import Stack from '../data-structures/stack';

export function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

/**
 * if `11` is passed it will return `3` in Binary key as in binary 3 is `11`
 */
export function baseConverterValues(inputNumber) {
  const convertedObj = {};

  convertedObj.decimal = Number.parseInt(inputNumber, 10);
  convertedObj.binary = Number.parseInt(inputNumber, 2);
  convertedObj.octal = Number.parseInt(inputNumber, 8);
  convertedObj.hex = Number.parseInt(inputNumber, 16);

  return convertedObj;
}

export function baseConverterWithInbuiltFunc(inputNumber, inputBase) {

  if (!(inputBase >= 2 && inputBase <= 36)) {
    return '';
  }

  const num = Number(inputNumber);
  const base = Number(inputBase);

  return num.toString(base);
}
