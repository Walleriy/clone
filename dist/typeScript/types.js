"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = "Hello TypeScript";
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello", "TypeScript"];
// Tuple
var contact = ['Vladilen', 1234567];
// Any
var variable = 42;
variable = 'New String';
// ====
function sayMyName(name) {
    console.log(name);
}
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 'admin';
var id2 = 51;
//# sourceMappingURL=types.js.map