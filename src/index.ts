export function arrayToObject(array: object[], ...keys: string[]): object {
  return array.reduce((obj: any, item: any) => {
    const key = getValueDeep(item, keys);
    if (key !== undefined) {
      obj[key] = item;
    }
    return obj;
  }, {});
}

function getValueDeep(obj: any, keys: string[]): string | number | undefined {
  let value = undefined;
  let temp = obj;
  for (const key of keys) {
    if (typeof temp === "object") {
      value = temp[key];
      temp = value;
    }
  }
  if (typeof value === "number" || typeof value === "string") {
    return value;
  }
  return undefined;
}
