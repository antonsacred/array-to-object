export function arrayToObject(array: object[], ...keys: string[]): object {
  return array.reduce((obj: any, item: object) => {
    const key = getValueDeep(item, keys);
    if (key !== undefined) {
      obj[key] = item;
    }
    return obj;
  }, {});
}

function getValueDeep(
  obj: object,
  keys: string[]
): string | number | undefined {
  let value: any = obj;
  for (const key of keys) {
    if (typeof value === "object" && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      value = undefined;
      break;
    }
  }
  if (typeof value === "number" || typeof value === "string") {
    return value;
  }
  return undefined;
}
