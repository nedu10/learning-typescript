interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class BasicSetup implements IDerivedFromBase {
  id: number;
  name: string;
}

// class can have multiple implements but cannot have multiple extends

class BaseClass {
  private _id: number;
  constructor(_id: number) {
    this._id = _id;
  }
}

class DerivedClass extends BaseClass {
  private _name: string;
  constructor(_id: number, _name: string) {
    super(_id);
    this._name = _name;
  }
}

//protected class members
//protected class is only accessible within the class and subclass
class ProtectedClass {
  protected _id: number;
  public get_id(): number {
    return this._id;
  }
}

class DerivedprotectedClass extends ProtectedClass {
  constructor() {
    super();
    this._id = 0;
  }
}

let d_p_c = new DerivedprotectedClass();
console.log(d_p_c.get_id());

//Abstract classes
// abstract function means any class derived from this class must implement the abstract function

abstract class AbstractEmployee {
  public id: number;
  public name: string;
  abstract getDetails(): string;
  public printDetails() {
    console.log(this.getDetails());
  }
}

class NewEmployee extends AbstractEmployee {
  getDetails(): string {
    return `id: ${this.id}, name: ${this.name}`;
  }
}
class NewManager extends AbstractEmployee {
  public employees: NewEmployee[];
  getDetails(): string {
    return `id: ${this.id}, name: ${this.name}, employee count: ${this.employees.length}`;
  }
}

let employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();

let manager = new NewManager();
manager.id = 1;
manager.name = "Manager Name";
manager.employees = new Array();
manager.printDetails();
