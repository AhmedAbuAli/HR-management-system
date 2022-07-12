"use-strict";

let Employees = []
function Employee(employeeID , fullName , department , level , image , salary=0 ) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.calculateNetSalary()
    Employees.push(this)
}

// Prototype Functions 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

Employee.prototype.calculateSalary = function(){
    if (this.level.toLowerCase() == "senior") {
        return getRndInteger(1500,2000);
    }
    else if (this.level.toLowerCase() == "sid-senior"){
        return getRndInteger(1000,1500); 
    }
    else {
        return getRndInteger(500,1000);
    }
}
Employee.prototype.calculateNetSalary  = function () {
    let netSalary = this.calculateSalary() - (this.calculateSalary()*0.075)
    this.salary = netSalary;
    return netSalary;
}

Employee.prototype.render  = function () {
    console.log(this.fullName+', Salary = '+this.salary);
    return ' Name : ' + this.fullName + ' - ID :' + this.employeeID + '  Department : ' + this.department + ' -  Level : ' + this.level +', Salary = '+this.salary;
}
const employee1 = new Employee(1000 , "Ghazi Samer", "Administration", "Senior" , "../assets/person3.jpg")
const employee4 = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , "../assets/person2.jpg")

const employee2 = new Employee(1001 , "Lana Ali", "Finance","Senior" , "../assets/person1.jpg")
const employee7 = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" , "../assets/person6.jpg")

const employee3 = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , "../assets/person7.jpg")

const employee5 = new Employee(1004 , "Omar Zaid" , "Development" , "Senior" , "../assets/person4.jpg")
const employee6 = new Employee(1005 , "Rana Saleh" , "Development" , "Junior" , "../assets/person8.jpg")


for (let i = 0; i < Employees.length; i++) {
    Employees[i].render()
    let elment = 'em'+i;
    document.getElementById(elment).innerHTML = Employees[i].render()
}