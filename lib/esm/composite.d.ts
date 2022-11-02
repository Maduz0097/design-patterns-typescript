/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
declare abstract class Component {
    protected parent: Component | null;
    /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
    setParent(parent: Component | null): void;
    getParent(): Component | null;
    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    add(_component: Component): void;
    remove(_component: Component): void;
    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    isComposite(): boolean;
    /**
     * The base Component may implement some default behavior or leave it to
     * concrete classes (by declaring the method containing the behavior as
     * "abstract").
     */
    abstract operation(): string;
}
/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
declare class Leaf extends Component {
    operation(): string;
}
/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
declare class Composite extends Component {
    protected children: Component[];
    /**
     * A composite object can add or remove other components (both simple or
     * complex) to or from its child list.
     */
    add(component: Component): void;
    remove(component: Component): void;
    isComposite(): boolean;
    /**
     * The Composite executes its primary logic in a particular way. It
     * traverses recursively through all its children, collecting and summing
     * their results. Since the composite's children pass these calls to their
     * children and so forth, the whole object tree is traversed as a result.
     */
    operation(): string;
}
export { Component, Composite, Leaf };
