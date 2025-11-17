# TypeScript Q&A Overview

## 1. Differences Between **Interfaces** and **Types** in TypeScript

Type aliases and interfaces are very similar, and in many cases you can
choose freely between them.\
However, the **key difference** is:

-   **Interfaces are extendable** --- they can be "re-opened" and new
    properties can be added.
-   **Types cannot be re-opened** --- once created, they cannot be
    extended in the same way.

------------------------------------------------------------------------

## 2. Use of the **keyof** Keyword

The `keyof` operator takes an object type and produces a **union of its
keys**.

### Example:

``` ts
type User = {
  id: number;
  name: string;
};

type UserKeys = keyof User; // "id" | "name"
```

This is useful for extracting or constraining key names in a type-safe
way.

------------------------------------------------------------------------

## 3. Difference Between **any**, **unknown**, and **never**

### **any**

-   Disables TypeScript type checking.
-   Use when you do not want a variable to cause type issues.

### **unknown**

-   Safer version of `any`.
-   You must check its type before using it.

### **never**

-   Represents a value that **never occurs**.
-   Used for functions that never return (e.g., throw errors) or
    unreachable code.

------------------------------------------------------------------------

## 4. Use of **Enums** in TypeScript

Enums allow developers to define a set of named constants.

### **Numeric Enum**

``` ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

### **String Enum**

``` ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED"
}
```

------------------------------------------------------------------------

## 5. Union and Intersection Types

### **Union Type**

Value can be **one of several types**.

``` ts
let id: string | number;
id = "abc123";
id = 456;
```

### **Intersection Type**

Value must satisfy **all combined types**.

``` ts
type Person = { name: string } & { age: number };

const person: Person = {
  name: "John",
  age: 30
};
```

------------------------------------------------------------------------

## 📄 Summary

This README contains explanations and examples of: - Interfaces vs
Types\
- keyof usage\
- any vs unknown vs never\
- Enums (numeric & string)\
- Union and intersection types

All formatted for easy understanding and quick revision.
