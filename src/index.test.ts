import { arrayToObject } from "./index";

test("array to object", () => {
  const objects = [
    { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
    { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
    { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
    { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
    { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
  ];

  const expectedResult1 = {
    "1": { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
    "2": { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
    "3": { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
    "4": { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
    "5": { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
  };
  expect(arrayToObject(objects, "id")).toEqual(expectedResult1);

  const expectedResult2 = {
    "22": { id: 1, name: "Tony", otherData: { age: 22, gender: "male" } },
    "21": { id: 2, name: "Michael", otherData: { age: 21, gender: "male" } },
    "25": { id: 3, name: "Kate", otherData: { age: 25, gender: "female" } },
    "23": { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
    "24": { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
  };
  expect(arrayToObject(objects, "otherData", "age")).toEqual(expectedResult2);

  const expectedResult3 = {
    male: { id: 4, name: "Tom", otherData: { age: 23, gender: "male" } },
    female: { id: 5, name: "Kate", otherData: { age: 24, gender: "female" } },
  };
  expect(arrayToObject(objects, "otherData", "gender")).toEqual(
    expectedResult3
  );

  expect(arrayToObject(objects, "otherData", "phone")).toEqual({});

  expect(arrayToObject(objects, "otherData", "phone", "number")).toEqual({});

  expect(arrayToObject(objects, "otherData")).toEqual({});

  expect(arrayToObject(objects, "notExistProperty", "name")).toEqual({});

  expect(arrayToObject(objects, "name", "name")).toEqual({});

  expect(arrayToObject(objects, "name", "otherData")).toEqual({});

  expect(arrayToObject(objects, "otherData", "name")).toEqual({});
});

test("more cases", () => {
  const objects = [
    {
      id: 1,
      name: "Tony",
      otherData: {
        null: null,
        undefined: undefined,
        float: 10.5,
        function: () => {},
        boolean: true,
      },
    },
    {
      id: 2,
      name: "Tony",
      otherData: {
        null: null,
        undefined: undefined,
        float: 11.2,
        function: () => {},
        boolean: true,
      },
    },
  ];

  expect(arrayToObject(objects, "otherData", "null")).toEqual({});
  expect(arrayToObject(objects, "otherData", "undefined")).toEqual({});
  expect(arrayToObject(objects, "otherData", "function")).toEqual({});
  expect(arrayToObject(objects, "otherData", "boolean")).toEqual({});

  const objectFloatAsKey = {
    "10.5": objects[0],
    "11.2": objects[1],
  };
  expect(arrayToObject(objects, "otherData", "float")).toEqual(
    objectFloatAsKey
  );
});
