interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  console.log(a.print());
  return null;
}

class PrintA implements IPrint {
  name: string;
  print(): void {
    console.log(`this is class A`);
  }
}
class PrintB implements IPrint {
  name: string;
  print(): void {
    console.log(`this is class B`);
  }
}

let print_a = new PrintA();
let print_b = new PrintB();

print_a.print();
print_b.print();

class ClassWithProperty {
  public id: number; // by default properties are public
  private ide: number; //Private properties cannot be changed outside the class private ptroperty are only accessible within the class
  readonly pp: string; // Is a ready only or a constant
}

let new_class = new ClassWithProperty();
new_class.id = 3;

// class with automatic property
class ClassWithAutomaticProperty {
  constructor(public id: number, private name: "chinedu") {}
}

let c_w_a_p = new ClassWithAutomaticProperty(3, "chinedu");

console.log(c_w_a_p);
console.log(c_w_a_p.id);
// console.log(c_w_a_p.name)

//Accesser property

//all about creating getters and setters

class ClassAccessorProperty {
  private _id: number = 7;
  get id(): number {
    return this._id;
  }
  set id(val: number) {
    this._id = val;
  }
}

let c_a_p = new ClassAccessorProperty();

c_a_p.id = 4;
console.log(c_a_p);

//Static property
//static property is available without creating instance of the class
class ClassStaticProperty {
  static _author: string = "chinedu";
  static _hobby: string = "Play video games";

  static print_hobby(): string {
    return this._hobby;
  }
}

ClassStaticProperty._author = "kenechi";
console.log(ClassStaticProperty._author);
console.log(ClassStaticProperty.print_hobby());

// Inheritance
