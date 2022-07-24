# Array of objects to object
[![codecov](https://codecov.io/gh/antonsacred/array-to-object/branch/master/graph/badge.svg?token=C10CHOFXWE)](https://codecov.io/gh/antonsacred/matrix-determinant)

Convert array of objects into object with keys based on key we have passed in.

## Example
```typescript
import { arrayToObject } from "from-array-to-object";

const objects = [
  { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
  { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
  { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
  { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
  { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
];

arrayToObject(objects, "id");
// {
//   "1": { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
//   "2": { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
//   "3": { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
//   "4": { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
//   "5": { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
// }

arrayToObject(objects, "otherData", "age");
// {
//   "22": { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
//   "21": { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
//   "25": { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
//   "23": { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
//   "24": { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
// }

arrayToObject(objects, "otherData", "gender"); // only last objects with unique keys will be in result
// {
//   male: { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
//   female: { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
// };

arrayToObject(objects, "otherData", "gender"); // there is no "otherData.gender", so we will get empty object
// {}
```

Only string and number can be used as key in result object.