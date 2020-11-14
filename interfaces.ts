function log(val: any): void {
  console.log(val);
}

interface IComplexType {
  id: number;
  name?: string; //making it optional
}

let name_obj: IComplexType = { id: 3, name: "chinedu" };
let name_obj2: IComplexType = { id: 2 };

interface IPoint {
  readonly x: number; //assigning read only means it should never be changed
  y: number;
}

let get_point: IPoint = { x: 4, y: 3 };
get_point.y = 9;
log(get_point);
// variable use constant while property use readonly
