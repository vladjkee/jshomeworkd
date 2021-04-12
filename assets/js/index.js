class User {
  constructor(name, surname, ){
    this.name = name;
    this.surname = surname;

  }
  get fullName(){
    return `${this.name} ${this.surname}`;
  }

}

class Student  extends User{
constructor(name, surname, ){
  super(name, surname, );
  this.year = year; 
}
getCourse(){
  const currentYear = Date().getFullYear();
  const course = currentYear - this.year + 1;
  return course;
}
 
}

const s = new Student('John', 'Smith', 2021);