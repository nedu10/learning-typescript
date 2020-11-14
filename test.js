let my_name = "chinedu";
let p = 12;
let names = ["chichi", "fish", false, 19];
let only_string_array = ["peter", "paul", "fred"];
let only_number_array = [1, 3, 67];
let only_boolean_array = [true, false, true];
// enum type
var door_state;
(function (door_state) {
    door_state[door_state["Open"] = 0] = "Open";
    door_state[door_state["Closed"] = 1] = "Closed";
})(door_state || (door_state = {}));
function log(val) {
    console.log(val);
}
log(door_state.Open);
log(door_state[1]);
log(door_state.Closed);
