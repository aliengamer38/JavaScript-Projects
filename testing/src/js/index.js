import word from "./models/Search";
import {add, multiply, ID} from "./views/searchView"

console.log(`Using imported functions ${add(ID, 2)} and multiply ${multiply(3, 5)}. ${word}`);