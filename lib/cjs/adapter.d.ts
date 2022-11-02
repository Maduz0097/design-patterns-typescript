/**
 * The Target defines the domain-specific interface used by the client code.
 */
declare class Target {
    request(): string;
}
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
declare class Adaptee {
    specificRequest(): string;
}
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
declare class Adapter extends Target {
    private adaptee;
    constructor(adaptee: Adaptee);
    request(): string;
}
export { Adaptee, Adapter, Target };
