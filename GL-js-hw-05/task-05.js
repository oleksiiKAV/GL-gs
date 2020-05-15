/* eslint-disable no-underscore-dangle */
class Car {
  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0,
  }) {
    this._speed = speed; // - текущая скорость, изначально 0
    this._price = price; // - цена автомобиля
    this._maxSpeed = maxSpeed; // - максимальная скорость
    this._isOn = isOn; // - заведен ли автомобиль, значения true или false. Изначально false
    this._distance = distance; // - общий киллометраж, изначально 0 0
  }

  static getSpecs(obj) {
    console.log(
      `You car has this parameters: 
        - MaxSpeed: ${obj._maxSpeed}; - speed: ${obj._speed}; 
        - Is Strated: ${obj._isOn}; - distance: ${obj._distance}; - price: ${obj._price}`,
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    // if (this._speed + value <= this._maxSpeed) {
    this._speed += value;
    // } else this._speed = this._maxSpeed;
    return this._speed;
  }

  decelerate(value) {
    // if (this._speed - value >= 0) {
    this._speed -= value;
    // } else this._speed = 0;
    return this._speed;
  }

  drive(hours) {
    const allDist = this._distance;
    if (this._isOn) {
      this._distance = this._speed * hours;
    }
    this._distance = allDist + this._distance;
    return allDist;
  }
}
console.log(`Task 05`);
const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
// mustang._maxSpeed += 1;
console.log(`---------------- ${mustang._maxSpeed} -----------`);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
