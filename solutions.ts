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

//Solution-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

//Solution-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

//Solution-7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}
