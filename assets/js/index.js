const str = "some string i need";

let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
let capitalizeStr = (str) => str.split(' ').map(capitalizeString).join(' ');

console.log(capitalizeStr(str));