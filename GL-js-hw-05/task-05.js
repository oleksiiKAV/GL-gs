/* eslint-disable no-underscore-dangle */
class Car {
  constructor(speed, price, maxSpeed, isOn, distance) {
    this.speed = speed; // - текущая скорость, изначально 0
    this.price = price; // - цена автомобиля
    this.maxSpeed = maxSpeed; // - максимальная скорость
    this.isOn = isOn; // - заведен ли автомобиль, значения true или false. Изначально false
    this.distance = distance; // - общий киллометраж, изначально 0
  }

  static getSpecs(obj) {
    console.log(
      `You car has this parameters:\n - speed: ${obj.speed};\n
        - MaxSpeed: ${obj.maxSpeed};\n - Is Strated: ${obj.isOn};\n 
        - distance: ${obj.distance};\n - price: ${obj.price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
    return this._price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = 0;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else this.speed = this.maxSpeed;
    return this.speed;
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else this.speed = 0;
    return this.speed;
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = this.speed * hours;
    }
    return this.distance;
  }
}
console.log(`Task 05`);
const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.maxSpeed += 1;
console.log(`---------------- ${mustang.maxSpeed} -----------`);
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
