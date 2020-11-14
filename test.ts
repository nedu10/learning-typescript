let my_name: string = "chinedu";
let p: number = 12;

let names: object = ["chichi", "fish", false, 19];

let only_string_array: string[] = ["peter", "paul", "fred"];
let only_number_array: number[] = [1, 3, 67];
let only_boolean_array: boolean[] = [true, false, true];

// enum type

enum door_state {
  Open,
  Closed,
}

function log(val: any): void {
  console.log(val);
}

log(door_state.Open);
log(door_state[1]);
log(door_state.Closed);
