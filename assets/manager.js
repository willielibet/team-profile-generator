//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Manager extends Employee {
    //intern constructor with the features an intern needs.
    //this constructor will be called when creating an engineer
    //instance.
    constructor(id, name, email, officeNumber){
        this.officeNumber = officeNumber;
        //to access the superclass (Employee) constructor and methods.
        super(id, name, email);
    }

    //only the get methods for Manager and officeNumber are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the Manager. 
    //get methods to access instance the role Manager and officeNumber.
    getRole() {
        return "Manager";

    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
}
