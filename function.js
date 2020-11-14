// a function that does not have a name is  called an anomolous function
function log(val) {
    console.log(val);
}
function addNumbers(a, b) {
    return (a + b).toString();
}
// Anomolous function
var anomo_func = function (a, b) {
    return a + b;
};
//question mark is to make parameter b optional
// Note any optional parameter must be the last parameter
log(anomo_func("chinedu "));
// Default parameters
function default_param(first_name, last_name) {
    if (last_name === void 0) { last_name = "Ifediorah"; }
    return first_name + " " + last_name;
}
log(default_param("Emeka"));
// Rest
function build_person(first_name) {
    var remaining_name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remaining_name[_i - 1] = arguments[_i];
    }
    return first_name + " " + remaining_name.join(" ");
}
var personOne = build_person("chinedu", "chukwuemeka", "uchenna", "ifediorah");
log(personOne);
