/* eslint-disable */
// Prototype
// 클래스와 비슷함

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function greet() {
    return `Hi, ${this.name}!`
}


function Student(name) {
    this.__proto__.constructor(name)
}


Student.prototype.study = function study() {
    return `${this.name} is studying!`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Hyeonjun')

console.log(me)
console.log(me.greet())
console.log(me.study())
console.log(me instanceof Student)
console.log(me instanceof Person)
console.log([] instanceof Array, [] instanceof Object)

const anotherPerson = new Person('Foo')
console.log(anoterPerson instanceof Student)
