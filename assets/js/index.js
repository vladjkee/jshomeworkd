 const str = "some string i need";

 let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
 let capitalizeStr = (str) => str.split(' ').map(capitalizeString).join(' ');

 console.log(capitalizeStr(str));



const str2 = "some string i need";

function capitalizeStr2(str){
  let str2 = str.split(" ").map(str2 => {
    return str2.charAt(0).toUpperCase() + str2.slice(1);
  });
  return str2.join(" ");
}
console.log(capitalizeStr2(str2));