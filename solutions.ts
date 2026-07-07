// Solution-1
function filterEvenNumbers(number: number[]): number[] {
  return number.filter((n) => n % 2 === 0);
}

//Solution-2
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
