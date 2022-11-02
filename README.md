
# design-patterns-typescript

This npm package is developed for support the design patterns in typescript.
We can use these design patterns in our frontend web development.




## Installation

Install design-patterns-typescript with npm

```bash
  npm i design-patterns-typescript
```
    
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Usage/Examples

## Using Flyweight design pattern

```javascript
import {FlyweightFactory} from 'design-patterns-typescript'

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
    
]);

factory.listFlyweights();



function addCarToPoliceDatabase(
    ff: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string,
) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);

    
    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();
```





## Features

### These Structural design patterns are implemented and you can just import them and use.

- Adapter
  #### Allows objects with incompatible interfaces to collaborate.
- Composite
  #### Lets you compose objects into tree structures and then work with these structures as if they were individual objects.
- Decorator
  #### Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
- Flyweight
  #### Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
- Proxy
  #### Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

### These Creational design patterns are implemented and you can just import them and use.

- Prototype
  #### Lets you copy existing objects without making your code dependent on their classes.
## Contributing

Contributions are always welcome!

.


## License

[MIT](https://choosealicense.com/licenses/mit/)


### Keywords

design-patterns typescript react node