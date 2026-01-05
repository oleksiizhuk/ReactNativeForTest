interface ObjectWithDynamicProperties {
  [key: string]: any
}
export function addPrivateProperty(
  o: any,
  name: string,
  predicate: (v: any) => boolean,
) {
  let value: any

  o[`get${name}`] = function () {
    return value
  }

  o[`set${name}`] = function (v: any) {
    if (predicate(v)) {
      value = v
    }
  }
}
const ob: ObjectWithDynamicProperties = {}
addPrivateProperty(ob, 'Name', (name) => typeof name === 'string')
ob.setName('Frank')
console.log(ob.getName())
