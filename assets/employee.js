class Employee {
    //employee constructor with the features an employee needs.
    //this constructor will be called when creating an employee
    //instance such as en engineer and/or intern. 
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    //get methods to access instance
    //variables id, name, and email.
    getId() {
        return this.id;

    }
    
    getName(){
        return this.name;
    }

    getEmail() {
        return this.email;

    }
}
