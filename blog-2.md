# Using `Pick` and `Omit` to Keep TypeScript Code DRY

## Introduction

When working with interfaces in TypeScript, we often need different versions of the same object. Instead of creating new interfaces with repeated properties, we can use the `Pick` and `Omit` utility types. This helps keep our code **DRY (Don't Repeat Yourself)**.

## `Pick`

`Pick` creates a new type by selecting only the properties you need from an existing interface.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserInfo = Pick<User, "name" | "email">;
```

Here, `UserInfo` contains only the `name` and `email` properties.

## `Omit`

`Omit` creates a new type by removing specific properties from an existing interface.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type NewUser = Omit<User, "id">;
```

`NewUser` includes `name` and `email` but excludes `id`.

## How They Keep Code DRY

Using `Pick` and `Omit` lets us reuse a single master interface instead of creating multiple similar interfaces. If the original interface changes, the derived types update automatically, reducing duplication and making the code easier to maintain.

## Conclusion

`Pick` and `Omit` are simple but powerful TypeScript utility types. They help create specialized versions of existing interfaces, reduce repetitive code, and improve maintainability by following the **DRY (Don't Repeat Yourself)** principle.
