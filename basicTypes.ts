// Boolean
// Null
// Undefined
// Number
// BigInt
// String
// Symbol
let isDone: boolean = false

// 接下来来到 number，注意 es6 还支持2进制和8进制，让我们来感受下

let age: number = 10
let binaryNumber: number = 0b1111

// 之后是字符串，注意es6新增的模版字符串也是没有问题的
let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

// 还有就是两个奇葩兄弟两，undefined 和 null
let u: undefined = undefined
let n: null = null

// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined


// any类型：在有明确类型的时候避免使用any
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = 'boolean'
// 在任意值上访问任何属性都是允许的：
notSure.myName
// 也允许调用任何方法：
notSure.getName()
