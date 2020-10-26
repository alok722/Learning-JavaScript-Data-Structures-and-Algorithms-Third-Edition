const { decimalToBinary } = PacktDataStructuresAlgorithms;
const { baseConverter } = PacktDataStructuresAlgorithms;
const { baseConverterValues } = PacktDataStructuresAlgorithms;
const { baseConverterWithInbuiltFunc } = PacktDataStructuresAlgorithms;

// 233 == 11101001
// 2x(10x10) + 3x(10) + 3x(1)
console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0

console.log(baseConverterValues(11)); // 1111101000

console.log(baseConverterWithInbuiltFunc(10, 2));
