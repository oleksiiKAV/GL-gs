/* eslint-disable no-underscore-dangle */
class Car {
<<<<<<< HEAD
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
=======
  constructor(speed, price, maxSpeed, isOn, distance) {
    this.speed = speed; // - текущая скорость, изначально 0
    this.price = price; // - цена автомобиля
    this.maxSpeed = maxSpeed; // - максимальная скорость
    this.isOn = isOn; // - заведен ли автомобиль, значения true или false. Изначально false
    this.distance = distance; // - общий киллометраж, изначально 0
>>>>>>> f38692fd49cd747357175bce33ca48ca219cfacf
  }

  static getSpecs(obj) {
    console.log(
<<<<<<< HEAD
      `You car has this parameters: 
        - MaxSpeed: ${obj._maxSpeed}; - speed: ${obj._speed}; 
        - Is Strated: ${obj._isOn}; - distance: ${obj._distance}; - price: ${obj._price}`,
=======
      `You car has this parameters:\n - speed: ${obj.speed};\n
        - MaxSpeed: ${obj.maxSpeed};\n - Is Strated: ${obj.isOn};\n 
        - distance: ${obj.distance};\n - price: ${obj.price}`,
>>>>>>> f38692fd49cd747357175bce33ca48ca219cfacf
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
<<<<<<< HEAD
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
=======
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
>>>>>>> f38692fd49cd747357175bce33ca48ca219cfacf
  }
}
console.log(`Task 05`);
const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
<<<<<<< HEAD
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
=======
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
>>>>>>> f38692fd49cd747357175bce33ca48ca219cfacf
