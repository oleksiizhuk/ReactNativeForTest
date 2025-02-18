type ObjectType = { [key: string]: any }

export const deepCopy = <T extends ObjectType>(data: T): T => {
  if (Array.isArray(data)) {
    return data?.map((element: any) => deepCopy(element)) as unknown as T
  } else if (typeof data === 'object' && data !== null) {
    const newObject: ObjectType = {}
    for (const [key, value] of Object.entries(data)) {
      newObject[key] = deepCopy(value)
    }
    return newObject as T
  } else {
    return data
  }
}

const obj = {
  string: 'string',
  number: 10,
  array: [[1, 2, 3], [{ name: 'name' }]],
  obj: {
    age: 20,
  },
}

console.log('deepCopy = ', deepCopy(obj).array[1])
