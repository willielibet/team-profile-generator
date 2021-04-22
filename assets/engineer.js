//importing the Employee.
const Employee = require("./Employee");

//this class inherits the attributes and methods from
//the employee class (by using the keyword extends and
//the super() method).
class Engineer extends Employee {
    //engineer constructor with the features an engineer needs.
    //this constructor will be called when creating an engineer
    //instance.
    constructor(id, name, email, github){
        this.github = github;
        //to access the superclass (Employee) constructor and methods.
        super(id, name, email);
    }

    //only the get methods for Engineer and github are needed since
    //this class inherits the other get methods to access the name,
    //id, and email of the engineer. 
    //get methods to access instance the string Engineer and github.
    getRole() {
        return "Engineer";

    }
    
    getGithub(){
        return this.github;
    }
}

//export the class Engineer for use elsewhere in our programs.
module.exports = Engineer;