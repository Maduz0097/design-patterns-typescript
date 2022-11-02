/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var Decorator = /** @class */ (function () {
    function Decorator(basecomponent) {
        this.basecomponent = basecomponent;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    Decorator.prototype.operation = function () {
        return this.basecomponent.operation();
    };
    return Decorator;
}());
export { Decorator, ConcreteComponent };
