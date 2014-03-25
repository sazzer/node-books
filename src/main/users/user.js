var Base = require("selfish").Base;

/**
 * Representation of a User
 */
module.exports = Base.extend({
    /**
     * Initialize the user
     */
    initialize: function() {
        this.userid = undefined;
        this.username = undefined;
        this.fullname = undefined;
        this.email = undefined;
        this.active = false;
    }
});
