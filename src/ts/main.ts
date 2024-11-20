import { Product, calculateTotalPrice } from './product';
import {isValidEmail} from "./emailValidation";

const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
];
console.log(calculateTotalPrice(products));

console.log(isValidEmail("example@domain.com"));
console.log(isValidEmail("invalid-email"));
