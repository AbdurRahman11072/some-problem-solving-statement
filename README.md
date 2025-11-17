# TypeScript Q&A Overview

## 1. Differences Between **Interfaces** and **Types** in TypeScript

Type aliases and interfaces are very similar, and in many cases you can
choose freely between them.\
However, the **key difference** is:

- Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable

---

## 2. Use of the **keyof** Keyword

The `keyof` operator takes an object type and produces a **union of its
keys**.

### Example:

```ts
type User = {
  id: number;
  name: string;
};

type UserKeys = keyof User; // "id" | "name"
```

This is useful for extracting or constraining key names in a type-safe
way.

---

## 3. Difference Between **any**, **unknown**, and **never**

### **any**

- any type is a type used when you don't want unspected variable to casue issue. In stop the type safety.

### **unknown**

- unkonw is a a javascript premitive value. In typescirpt we use unkown if the value is uninitialized.

### **never**

- Used for functions that never return.

---

## 4. Use of **Enums** in TypeScript

Enums allow developers to define a set of named constants.

### **Numeric Enum**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

### **String Enum**

```ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}
```

---

## 5. Union and Intersection Types

### **Union Type**

Value can be **one of several types**.

```ts
let id: string | number;
id = "abc123";
id = 456;
```

### **Intersection Type**

Value must satisfy **all combined types**.

```ts
type Person = { name: string } & { age: number };

const person: Person = {
  name: "John",
  age: 30,
};
```
