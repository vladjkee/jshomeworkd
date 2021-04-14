//  1.Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
//  (например n=4 , 1+2+3+4)
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(4));


// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
// 4.1 Для каждого поля создать get и set с проверкой типов.

class Book {
  constructor(author, name, year, publishing) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishing = publishing;
  }

  get author() {
    return this._author;
  }
  get name() {
    return this._name;
  }
  get year() {
    return this._year;
  }
  get publishing() {
    return this._publishing;
  }
  get fullName() {
    return `${this.name} ${this.author}`;
  }
  set author(newValue) {
    this._validateSide(newValue, 'string');
    if(!newValue.length){
      throw new RangeError();
    }
    this._author = newValue;
  }
  set name(newValue) {
    this._validateSide(newValue, 'string');
    if(!newValue.length){
      throw new RangeError();
    }
    this._name = newValue;
  }
  set year(newValue) {
    this._validateSide(newValue, 'string')
    this._year = newValue;
  }
  set publishing(newValue) {
    this._validateSide(newValue, 'string')
    if(!newValue.length){
      throw new RangeError();
    }
    this._publishing = newValue;
  }
  _validateSide(newValue, type) {
    if (typeof (newValue) !== type) {
      throw new TypeError();
    }
  }
}
class ElectronicBook extends Book {
  constructor(author, name, year, publishing, format, number) {
    super(author, name, year, publishing);
    this.format = format;
    this.number = number;
  }
  get number() {
    return this._number;
  }
  get format() {
    return this._format;
  }
  set format(newValue){
    this._validateSide(newValue, 'string')
    this._format = newValue;
  }
  set number(newValue){
    this._validateSide(newValue, 'number')
    this._number = newValue;
  }
}
const b = new Book(`King`, "bob", `1960`, `UK`);
console.log(b);
const e = new ElectronicBook(`King`,"Smith",`2018`,`New York`, `PDF`, 11112232313123);
console.log(e);

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

class Student {
  constructor(name, surname, isMale, contacts, univerInfo) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.univerInfo = univerInfo;
  }
  get name(){
    return this._name;
  }
  get surname(){
    return this._surname;
  }
  get isMale(){
    return this._isMale;
  }
  get contacts(){
    return this._contacts;
  }
  set name(newValue){
    this._validateType(newValue, 'string')
    this._name = newValue;
  }
  set surname(newValue){
    this._validateType(newValue, 'string')
    this._surname = newValue;
  }
  set isMale(newValue){
    this._validateType(newValue, 'boolean')
    this._isMale = newValue;
  }
  set contacts(newValue){
    this._validateType(newValue, 'string')
    this._contacts = newValue;
  }
  _validateType(newValue, type) {
    if (typeof (newValue) !== type) {
      throw new TypeError();
     }
   }
}

class Faculty {
  constructor(aboutFaculty, chair){
    this.faculty = aboutFaculty;
    this.chair = chair;
  }
  get faculty() {
    return this._faculty;
  }
  get chair() {
    return this._chair;
  }
  set faculty(newValue){
    this._validateType(newValue, "string")
    this._faculty = newValue;
  }
  set chair(newValue){
    this._validateType(newValue, "string")
    this._chair = newValue;
  }
 
  _validateType(newValue, type){
    if(typeof(newValue) !== type){
      throw new TypeError();
    }
  }
}
const student1 = new Student("Ivan","Ivanov", true, "city Odessa");
const student2 = new Student("Test","Testovich", false, "city Lviv");
const faculty = new Faculty("Engineer", "spec Engineer");

// 5. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

console.log(Array(25).fill(0).map((e, i) => i + 1));
