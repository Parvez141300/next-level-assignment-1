type formatValueInput = string | number | boolean;

const formatValue = (value: formatValueInput): formatValueInput | undefined => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
}





type lengthInput = string | number[]

const getLength = (value: lengthInput): number | undefined => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}




class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        const fullInfo = `'Name: ${this.name}, Age: ${this.age}'`;
        console.log(fullInfo);
    }
}

const person1 = new Person("Parvez", 25);
// person1.getDetails()

type filterByRatingInput = { title: string, rating: number }[];

const filterByRating = (books: filterByRatingInput): filterByRatingInput | string => {
    const validBooks = books.every(book => book.rating >= 0 && book.rating <= 5);
    if (!validBooks) {
        return "Not Valid rating the rating must be 0 to 5"
    }
    const newArray = books.filter(book => book.rating >= 4);

    return newArray
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
// console.log(filterByRating(books));

type filterActiveUsersInput = { id: number, name: string, email: string, isActive: boolean }[];

const filterActiveUsers = (users: filterActiveUsersInput): filterActiveUsersInput => {
    const newArray = users.filter(user => user.isActive === true);
    return newArray
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    const bookDetails = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
    console.log(bookDetails);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);

type getUniqueValuesInput = string[] | number[];

const getUniqueValues = (array1: getUniqueValuesInput, array2: getUniqueValuesInput): getUniqueValuesInput => {
    let tempArray = [...array1, ...array2] as getUniqueValuesInput;
    let newArray: getUniqueValuesInput = [];
    for (const arr of tempArray) {
        if (!(newArray as any[]).includes(arr)) {
            (newArray as any[]).push(arr);
        }
    }
    return newArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

type calculateTotalPriceInput = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}[];

const calculateTotalPrice = (products: calculateTotalPriceInput) : number => {
    const total = products.reduce((previousValue, currentProduct) => {
        let isAvailableDiscount: number = currentProduct.discount ? (100 - currentProduct.discount) / 100 : 1
        return (previousValue + (currentProduct.price * currentProduct.quantity * isAvailableDiscount))
    }, 0);

    return total
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));