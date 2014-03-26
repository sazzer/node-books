/**
 * Representation of a User
 */
var User = function() {
    Object.defineProperties(this, {
        "userid": {
            value: undefined,
            writable: true,
            enumerable: true
        },
        "username": {
            value: undefined,
            writable: true,
            enumerable: true
        },
        "fullname": {
            value: undefined,
            writable: true,
            enumerable: true
        },
        "email": {
            value: undefined,
            writable: true,
            enumerable: true
        },
        "active": {
            value: undefined,
            writable: true,
            enumerable: true
        }
    });
};

module.exports = User;
