// Union types
let union_type: number | string = 2;
union_type = "fight";

// Type alais
type StringOrNumber = string | number;

function add_with_alais(
  arg1: StringOrNumber,
  arg2: StringOrNumber
): StringOrNumber {
  return arg1.toString() + arg2.toString();
}

// Null and Undefined
function testparam(tet: null | undefined) {
  console.log("test parameter is: " + tet);
}

// testparam();
testparam(null);
