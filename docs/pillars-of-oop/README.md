# The Four Pillars of OOP

## Abstraction

The concept of reducing complexity for the sake of readibility by **abstracting** content into reusable pieces.

### Before Abstraction

```ts
// The user ran this command in the bash shell:
// > ts-node index.ts admin
function main() {
  const [app, file, userType] = process.argv;

  switch (userType) {
    case "admin":
      console.log("Hello, admin!");
      break;
    case "moderator":
    case "user":
      console.warn(
        "Unfortunately, you do not have permission to access this program. Cya!"
      );
      return;
    default:
      console.error("Wait a minute.... who ARE you?");
      return;
  }

  let randomId = "";
  const legalChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 10;
  for (let i = 0; i < idLength; i++) {
    randomId += legalChars[Math.floor(Math.random() * (legalChars.length + 1))];
  }

  console.log(`Here is your random id, sir: ${randomId}`);
}
```

### After Abstraction

```ts
// File: /modules/Auth/index.ts
export * from "./validateRole.ts";

// File: /modules/Auth/validateRole.ts
export function validateRole(userType: string) {
  switch (userType) {
    case "admin":
      console.log("Hello, admin!");
      return true;
    case "moderator":
    case "user":
      console.warn(
        "Unfortunately, you do not have permission to access this program. Cya!"
      );
      return false;
    default:
      console.error("Wait a minute.... who ARE you?");
      return false;
  }
}

// File: /modules/Random/index.ts
export * from "./getRandomId";

// File: /modules/Random/getRandomId.ts
const legalChars = "abcdefghijklmnopqrstuvwxyz0123456789";
export function getRandomId(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += legalChars[Math.floor(Math.random() * (legalChars.length + 1))];
  }
  return result;
}

// File: ./index.ts
import { getRandomId } from "./modules/Random";
import { validateRole } from "./modules/Auth";
function main() {
  const [app, file, userType] = process.argv;

  const canContinue = validateRole(userType);
  if (!canContinue) {
    return;
  }

  console.log(`Here is your random id, sir: ${getRandomId(10)}`);
}

// The user ran this command in the bash shell:
// > ts-node index.ts admin
```

## Encapsulation

The concept of **encapsulating** content (models, functions, etc.) with a common theme into a container of some sort.

### Before Encapsulation

```ts
// File: /utils/getRandomId.ts
export function getRandomId(length: number) {
  return /* generate random alphanumeric id with the specified length... but for now: */ "abc123";
}

// File: /utils/getRandomNumber.ts
export function getRandomNumber(min: number, max: number) {
  return /* generate random number beteen a specified range... but for now: */ 1;
}
```

### After Encapsulation (within a class)

```ts
// File: /modules/Random/index.ts
export class Random {
  static getId(length: number) {
    return "abc123";
  }

  static getNumber(min: number, max: number) {
    return 1;
  }
}

// File: /index.ts
const id = Random.getId(5);
```

## Polymorphism

The concept of **morphing** a single operation into **many** forms.

### Operator Polymorphism

```ts
console.log("Hello " + 1 + " World");
// Prints Hello 1 World
```

### Variable Polymorphism

```ts
let testVar: any = 5;
testVar = "String";
testVar = false;
```

### Coercion Polymorphism

```ts
console.log("Hello world!"); // Hello world!
console.log(5); // 5
console.log({ test: "Hello World!" }); // { test: 'Hello World!' }
```

### Functional Polymorphism

```ts
function doSomething(key: string | number) {
  if (typeof key === "string") {
    return "Hi!";
  } else if (typeof key === "number") {
    return "Hello!";
  }
  return "uh...";
}
```

## Inheritance

The concept of **inheriting** properties and functions from a parent through extension, spreading, or implementation.

### Before Extension/Implementation Inheritance

```ts
export class Car {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

export class Boat {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
```

### After Extension Inheritance

```ts
export class Vehicle {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

export class Car extends Vehicle {
  constructor(name: string) {
    super(name);
  }
}

export class Boat extends Vehicle {
  constructor(name: string) {
    super(name);
  }
}
```

### After Interface Implementation Inheritance

```ts
export interface Vehicle {
  name: string;
  getName: () => string;
}

export class Car implements Vehicle {
  constructor(name: string) {
    this.name = `Car: ${name}`;
  }

  getLoggableName() {
    return this.name;
  }

  getName() {
    return this.name.replace("Car: ", "");
  }
}

const car = new Car("Toyota");
car.getName(); // => 'Toyota'

export class Boat implements Vehicle {
  constructor(name: string) {
    this.name = `Boat: ${name}`;
  }

  getFancyName() {
    return this.name + " -- ooh, fancy";
  }

  getName() {
    return this.name.replace("Boat: ", "");
  }
}

const boat = new Boat("Yamaha");
boat.getFancyName(); // => 'Yamaha -- ooh, fancy'
```

### Before Object Spreading Inheritance

```ts
const carInstance = {
  name: "Toyota",
  getName: function () {
    return this.name;
  },
};

const boatInstance = {
  name: "Yamaha",
  getName: function () {
    return this.name;
  },
};
```

### After Object Spreading Inheritance

```ts
const vehicleInstance = {
  name: "n/a",
  getName: function () {
    return this.name;
  },
};

const carInstance = {
  ...vehicleInstance,
  name: "Toyota",
};

const boatInstance = {
  ...vehicleInstance,
  name: "Yamaha",
};
```
