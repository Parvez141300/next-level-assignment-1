# 1. What are some differences between interfaces and types in TypeScript?

Ans: interface এবং types এর মাঝে কিছু পার্থক্য আছে। যা নিম্নে দেওয়া হলোঃ

১) type property বৃদ্ধি করার জন্য interface এ extends ব্যবহার করা হয় এবং type এ ইউনিয়ন (&) ব্যবহার করা হয়।

২) type alias দিয়ে object type এবং normal variable type তৈরি করা যায় কিন্তু interface দিয়ে শুধুমাত্র object type তৈরি করা যায়।

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: keyof একটি TypeScript অপারেটর যা একটি object type-এর সব key এর union type রিটার্ন করে। নিম্নে এর উদাহরণ দেওয়া হলোঃ

const Person = {
    name: string;
    age: number;
    email: string;
}

// keyof Person creates: "name" | "age" | "email"
type PersonKeys = keyof Person;

const personInfo : 