// Solution-1
function filterEvenNumbers(number: number[]): number[] {
  return number.filter((n) => n % 2 === 0);
}

//Solution-2
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

//solution-3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

//Solution-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
