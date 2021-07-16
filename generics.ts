function echo(arg) {
  return arg
}
const result = echo(123)
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any

function echo<T>(arg: T): T {
  return arg
}
const result = echo(123)

// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap(['string', 123])
