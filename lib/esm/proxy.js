/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request.');
    };
    return RealSubject;
}());
/**
 * The Proxy has an interface identical to the RealSubject.
 */
var ProxyPattern = /** @class */ (function () {
    /**
     * The Proxy maintains a reference to an object of the RealSubject class. It
     * can be either lazy-loaded or passed to the Proxy by the client.
     */
    function ProxyPattern(realSubject) {
        this.realSubject = realSubject;
    }
    /**
     * The most common applications of the Proxy pattern are lazy loading,
     * caching, controlling the access, logging, etc. A Proxy can perform one of
     * these things and then, depending on the result, pass the execution to the
     * same method in a linked RealSubject object.
     */
    ProxyPattern.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    ProxyPattern.prototype.checkAccess = function () {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    ProxyPattern.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    return ProxyPattern;
}());
export { ProxyPattern, RealSubject };
