function echoWithArr<T>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])
