"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyweightFactory = exports.Flyweight = void 0;
/**
 * The Flyweight stores a common portion of the state (also called intrinsic
 * state) that belongs to multiple real business entities. The Flyweight accepts
 * the rest of the state (extrinsic state, unique for each entity) via its
 * method parameters.
 */
var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        var s = JSON.stringify(this.sharedState);
        var u = JSON.stringify(uniqueState);
        console.log("Flyweight: Displaying shared (".concat(s, ") and unique (").concat(u, ") state."));
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
/**
 * The Flyweight Factory creates and manages the Flyweight objects. It ensures
 * that flyweights are shared correctly. When the client requests a flyweight,
 * the factory either returns an existing instance or creates a new one, if it
 * doesn't exist yet.
 */
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    /**
     * Returns a Flyweight's string hash for a given state.
     */
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    /**
     * Returns an existing Flyweight with a given state or creates a new one.
     */
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    };
    FlyweightFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("\nFlyweightFactory: I have ".concat(count, " flyweights:"));
        for (var key in this.flyweights) {
            console.log(key);
        }
    };
    return FlyweightFactory;
}());
exports.FlyweightFactory = FlyweightFactory;
