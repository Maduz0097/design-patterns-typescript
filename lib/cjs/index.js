"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealSubject = exports.ProxyPattern = exports.FlyweightFactory = exports.Flyweight = exports.ConcreteComponent = exports.Decorator = exports.Leaf = exports.Component = exports.Composite = exports.Adaptee = exports.Adapter = exports.Target = exports.ComponentWithBackReference = exports.Prototype = void 0;
var prototype_1 = require("./prototype");
Object.defineProperty(exports, "Prototype", { enumerable: true, get: function () { return prototype_1.Prototype; } });
Object.defineProperty(exports, "ComponentWithBackReference", { enumerable: true, get: function () { return prototype_1.ComponentWithBackReference; } });
var adapter_1 = require("./adapter");
Object.defineProperty(exports, "Target", { enumerable: true, get: function () { return adapter_1.Target; } });
Object.defineProperty(exports, "Adapter", { enumerable: true, get: function () { return adapter_1.Adapter; } });
Object.defineProperty(exports, "Adaptee", { enumerable: true, get: function () { return adapter_1.Adaptee; } });
var composite_1 = require("./composite");
Object.defineProperty(exports, "Composite", { enumerable: true, get: function () { return composite_1.Composite; } });
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return composite_1.Component; } });
Object.defineProperty(exports, "Leaf", { enumerable: true, get: function () { return composite_1.Leaf; } });
var decorator_1 = require("./decorator");
Object.defineProperty(exports, "Decorator", { enumerable: true, get: function () { return decorator_1.Decorator; } });
Object.defineProperty(exports, "ConcreteComponent", { enumerable: true, get: function () { return decorator_1.ConcreteComponent; } });
var flyweight_1 = require("./flyweight");
Object.defineProperty(exports, "Flyweight", { enumerable: true, get: function () { return flyweight_1.Flyweight; } });
Object.defineProperty(exports, "FlyweightFactory", { enumerable: true, get: function () { return flyweight_1.FlyweightFactory; } });
var proxy_1 = require("./proxy");
Object.defineProperty(exports, "ProxyPattern", { enumerable: true, get: function () { return proxy_1.ProxyPattern; } });
Object.defineProperty(exports, "RealSubject", { enumerable: true, get: function () { return proxy_1.RealSubject; } });