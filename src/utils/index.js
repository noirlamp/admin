const dict = {
  String: '[object String]',
  Number: '[object Number]',
  Boolean: '[object Boolean]',
  Undefined: '[object Undefined]',
  Null: '[object Null]',
  Symbol: '[object Symbol]',
  Object: '[object Object]',
  Array: '[object Array]',
  Function: '[object Function]',
  RegExp: '[object RegExp]',
  Date: '[object Date]'
}

export const isType = (value, type) => {
  if (!type) return console.log('lost type')

  const valueType = Object.prototype.toString.call(value)

  return dict[type] === valueType
}

export const isJSONString = value => {
  try {
    if (JSON.parse(value) instanceof Object) {
      return true
    }
  } catch (e) {
    console.error(e)
  }
  return false
}

export const isExternal = path => /^(https?:|http?:|mailto:|tel:)/.test(path)
