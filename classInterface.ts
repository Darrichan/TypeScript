interface Radio {
  switchRadio(trigger: boolean): void;
}
// class Car implements Radio {
//   switchRadio(trigger) {
//     return 123
//   }
// }
// class Cellphone implements Radio {
//   switchRadio() {
//   }
// }

interface Battery {
  checkBatteryStatus(): void;
}

// 要实现多个接口，我们只需要中间用 逗号 隔开即可。
class Cellphone implements Radio, Battery {
  switchRadio() {
  }
  checkBatteryStatus() {

  }
}
