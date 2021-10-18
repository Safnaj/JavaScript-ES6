class Employee {
    constructor(name) {
        this.name = name;
    }

    display = () => console.log(this.name + 'is an Employee');
}

class Manager extends Employee {
    constructor(name, section){
        super(name);
        this.section = section;
    }

    display = () => console.log(this.name + 'is an Employee of '+this.section);
}

const e1 = new Employee("Safnaj");
const e2 = new Manager("Safnaj", "RPA");

e1.display();
e2.display();
e2.display = () => console.log("this function is override");
e2.display();