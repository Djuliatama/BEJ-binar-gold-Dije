class Employee {
    sayHello(name) {
        console.info(`Hello ${name} , my name is employee ${this.name}`);
     }
}
    
class Manager extends Employee {
    //sayHello(name) {
    //    console.info(`Hello ${name} , my name is manager ${this.name}`);
    // }
}

const dije = new Employee();
dije.name = "Dije";
dije.sayHello("John");

const john = new Manager();
john.name = "John";
john.sayHello("John");

console.info(dije);
