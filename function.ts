// a function that does not have a name is  called an anomolous function

function log(val: any): void {
  console.log(val);
}

function addNumbers(a: number, b: number): string {
  return (a + b).toString();
}

// Anomolous function
var anomo_func = function (a: string, b?: string) {
  return a + b;
};

//question mark is to make parameter b optional

// Note any optional parameter must be the last parameter

log(anomo_func("chinedu "));

// Default parameters
function default_param(first_name: string, last_name: string = "Ifediorah") {
  return first_name + " " + last_name;
}

log(default_param("Emeka"));

// Rest
function build_person(first_name: string, ...remaining_name: string[]): string {
  return first_name + " " + remaining_name.join(" ");
}

let personOne = build_person("chinedu", "chukwuemeka", "uchenna", "ifediorah");

log(personOne);
