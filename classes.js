function printClass(a) {
    console.log(a.print());
    return null;
}
var PrintA = /** @class */ (function () {
    function PrintA() {
    }
    PrintA.prototype.print = function () {
        console.log("this is class A");
    };
    return PrintA;
}());
var PrintB = /** @class */ (function () {
    function PrintB() {
    }
    PrintB.prototype.print = function () {
        console.log("this is class B");
    };
    return PrintB;
}());
var print_a = new PrintA();
var print_b = new PrintB();
print_a.print();
print_b.print();
var ClassWithProperty = /** @class */ (function () {
    function ClassWithProperty() {
    }
    return ClassWithProperty;
}());
var new_class = new ClassWithProperty();
new_class.id = 3;
// class with automatic property
var ClassWithAutomaticProperty = /** @class */ (function () {
    function ClassWithAutomaticProperty(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithAutomaticProperty;
}());
var c_w_a_p = new ClassWithAutomaticProperty(3, "chinedu");
console.log(c_w_a_p);
console.log(c_w_a_p.id);
// console.log(c_w_a_p.name)
//Accesser property
//all about creating getters and setters
var ClassAccessorProperty = /** @class */ (function () {
    function ClassAccessorProperty() {
        this._id = 7;
    }
    Object.defineProperty(ClassAccessorProperty.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
        },
        enumerable: false,
        configurable: true
    });
    return ClassAccessorProperty;
}());
var c_a_p = new ClassAccessorProperty();
c_a_p.id = 4;
console.log(c_a_p);
//Static property
//static property is available without creating instance of the class
var ClassStaticProperty = /** @class */ (function () {
    function ClassStaticProperty() {
    }
    ClassStaticProperty.print_hobby = function () {
        return this._hobby;
    };
    ClassStaticProperty._author = "chinedu";
    ClassStaticProperty._hobby = "Play video games";
    return ClassStaticProperty;
}());
ClassStaticProperty._author = "kenechi";
console.log(ClassStaticProperty._author);
console.log(ClassStaticProperty.print_hobby());
// Inheritance
