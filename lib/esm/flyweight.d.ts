/**
 * The Flyweight stores a common portion of the state (also called intrinsic
 * state) that belongs to multiple real business entities. The Flyweight accepts
 * the rest of the state (extrinsic state, unique for each entity) via its
 * method parameters.
 */
declare class Flyweight {
    private sharedState;
    constructor(sharedState: any);
    operation(uniqueState: any): void;
}
/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 */
declare class FlyweightFactory {
    private flyweights;
    constructor(initialFlyweights: string[][]);
    /**
     * Returns a Flyweight's string hash for a given state.
     */
    private getKey;
    /**
     * Returns an existing Flyweight with a given state or creates a new one.
     */
    getFlyweight(sharedState: string[]): Flyweight;
    listFlyweights(): void;
}
export { Flyweight, FlyweightFactory };
