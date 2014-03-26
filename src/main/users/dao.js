var User = require("./user"),
    Errors = require("./errors"),
    Q = require("q");

/**
 * DAO for loading User records
 */
var UserDao = function() {
    this._cache = {};

    var user = new User();

    user.userid = 1;
    user.username = "sazzer";
    user.fullname = "Graham Cox";
    user.email = "graham@grahamcox.co.uk";
    user.active = true;

    this._cache[user.userid] = user;
};

/**
 * Find the user with the given User ID
 * @param id The ID of the user
 * @return promise of the user record
 */
UserDao.prototype.findById = function(id) {
    return Q.fcall(function() {
        var user = this._cache[id];

        if (user) {
            return user;
        } else {
            throw new Errors.UnknownUser(id);
        }
    }.bind(this));
}

module.exports = UserDao;
