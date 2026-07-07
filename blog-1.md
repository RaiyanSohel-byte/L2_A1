# Why `any` Is a Type Safety Hole and Why `unknown` Is Safer

## Introduction

TypeScript helps prevent bugs by checking types before the code runs. While both `any` and `unknown` can store any type of value, they behave very differently.

## Why is `any` a Type Safety Hole?

The `any` type disables TypeScript's type checking. This allows any operation on a value, even if it causes runtime errors.

```ts
let value: any = 100;
value.toUpperCase(); // No compile-time error, but crashes at runtime.
```

Because TypeScript cannot detect mistakes, `any` is called a **type safety hole**.

## Why is `unknown` Safer?

The `unknown` type also accepts any value, but it requires type checking before the value can be used.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

This prevents invalid operations and makes the code safer.

## What is Type Narrowing?

**Type narrowing** is the process of checking a variable's type so TypeScript can treat it as a more specific type.

```ts
function print(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return "Not a string";
}
```

Here, `typeof` narrows `value` from `unknown` to `string`.

## Conclusion

`any` removes TypeScript's type safety and can lead to runtime bugs. `unknown` keeps your code safe by requiring type checks before use. In most cases where the data type is unknown, `unknown` is the better and safer choice.
