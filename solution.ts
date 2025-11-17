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

const getUniqueValues = (array1: number[], array2: number[]) => {
  const NewArray = [...array1, ...array2];
  const uniqueValue = new Set(NewArray);

  return [...uniqueValue];
};
