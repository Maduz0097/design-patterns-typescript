/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface BaseComponent {
    operation(): string;
}
/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
declare class ConcreteComponent implements BaseComponent {
    operation(): string;
}
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
declare class Decorator implements BaseComponent {
    protected basecomponent: BaseComponent;
    constructor(basecomponent: BaseComponent);
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    operation(): string;
}
export { Decorator, BaseComponent, ConcreteComponent };
