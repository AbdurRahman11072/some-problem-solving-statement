const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return (value *= 10);
  } else if (!value) {
    return false;
  } else return true;
};

const getLength = (str: string | any[]) => {
  return str.length;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const data = `'Name: ${this.name}, Age: ${this.age}'`;
    return data;
  }
}

type bookType = {
  title: string;
  rating: number;
};

const filterByRating = (books: bookType[]) => {
  const result = books.filter(
    (book: bookType) => book.rating >= 4 && book.rating < 5
  );
  return result;
};

interface userType {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: userType[]) => {
  const result = users.filter((user: userType) => user.isActive);
  return result;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (myBook: Book) => {
  const book = `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable}`;
  console.log(book);
};
//* Q7

const getUniqueValues = (
  arr1: string[] | number[],
  arr2: string[] | number[]
) => {
  const newArr: any = [];

  const isValueExist = (value: string | number): boolean => {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === value) return true;
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!isValueExist(arr1[i] as string | number)) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!isValueExist(arr2[i] as string | number)) {
      newArr.push(arr2[i]);
    }
  }
};

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};
console.log("---------------------");

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
console.log("---------------------");
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
console.log("---------------------");
const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
console.log("---------------------");
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
console.log("---------------------");
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));
console.log("---------------------");
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
console.log("---------------------");
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
console.log("---------------------");
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
