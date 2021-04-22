//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Intern extends Employee {
    //intern constructor with the features an intern needs.
    //this constructor will be called when creating an intern
    //instance.
    constructor(id, name, email, school){
        this.school = school;
        //to access the superclass (Employee) constructor and methods.
        super(id, name, email);
    }

    //only the get methods for Intern and school are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the Intern. 
    //get methods to access instance the role Intern and school.
    getRole() {
        return "Intern";

    }
    
    getGithub(){
        return this.school;
    }
}
