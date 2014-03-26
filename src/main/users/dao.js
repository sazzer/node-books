var User = require("./user"),
    Errors = require("./errors"),
    Q = require("q"),
    Base = require("selfish").Base;

/**
 * DAO for loading User records
 */
module.exports = Base.extend({
    /**
     * Find the user with the given User ID
     * @param id The ID of the user
     * @return promise of the user record
     */
    findById: function(id) {
        return Q.fcall(function() {
            if (id == 1) {
                var user = User.new();

                user.userid = id;
                user.username = "sazzer";
                user.fullname = "Graham Cox";
                user.email = "graham@grahamcox.co.uk";
                user.active = true;

                return user;
            } else {
                throw new Errors.UnknownUser(id);
            }
        });
    }
});
