/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
declare class Prototype {
    primitive: any;
    component: object;
    circularReference: ComponentWithBackReference;
    clone(): this;
}
declare class ComponentWithBackReference {
    prototype: Prototype;
    constructor(prototype: Prototype);
}
export { Prototype, ComponentWithBackReference };
