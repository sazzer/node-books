module.exports = {
    /**
     * Error signifying that the user was unknown
     * @param userId The ID of the unknown user
     */
    UnknownUser: function(userId) {
        this.constructor.prototype.__proto__ = Error.prototype;
        Error.call(this);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = "Unknown user: " + userId;
        this.userId = userId;
    }
}
