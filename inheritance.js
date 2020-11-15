var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicSetup = /** @class */ (function () {
    function BasicSetup() {
    }
    return BasicSetup;
}());
// class can have multiple implements but cannot have multiple extends
var BaseClass = /** @class */ (function () {
    function BaseClass(_id) {
        this._id = _id;
    }
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass(_id, _name) {
        var _this = _super.call(this, _id) || this;
        _this._name = _name;
        return _this;
    }
    return DerivedClass;
}(BaseClass));
//protected class members
//protected class is only accessible within the class and subclass
var ProtectedClass = /** @class */ (function () {
    function ProtectedClass() {
    }
    ProtectedClass.prototype.get_id = function () {
        return this._id;
    };
    return ProtectedClass;
}());
var DerivedprotectedClass = /** @class */ (function (_super) {
    __extends(DerivedprotectedClass, _super);
    function DerivedprotectedClass() {
        var _this = _super.call(this) || this;
        _this._id = 0;
        return _this;
    }
    return DerivedprotectedClass;
}(ProtectedClass));
var d_p_c = new DerivedprotectedClass();
console.log(d_p_c.get_id());
//Abstract classes
// abstract function means any class derived from this class must implement the abstract function
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name;
    };
    return NewEmployee;
}(AbstractEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name + ", employee count: " + this.employees.length;
    };
    return NewManager;
}(AbstractEmployee));
var employee = new NewEmployee();
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();
var manager = new NewManager();
manager.id = 1;
manager.name = "Manager Name";
manager.employees = new Array();
manager.printDetails();
