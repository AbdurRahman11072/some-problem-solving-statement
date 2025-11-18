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
  return newArr;
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
