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
class ConcreteComponent implements BaseComponent {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements BaseComponent {
    protected basecomponent: BaseComponent;

    constructor(basecomponent: BaseComponent) {
        this.basecomponent = basecomponent;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public operation(): string {
        return this.basecomponent.operation();
    }
}

export { Decorator,BaseComponent,ConcreteComponent}