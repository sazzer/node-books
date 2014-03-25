var User = require("../users/user");

module.exports = {
    register: function(server) {
        server.get('/user/:id', function(req, res, next) {
            var user = User.new();
            user.userid = 1;
            user.username = "sazzer";
            user.fullname = "Graham Cox";
            user.email = "graham@grahamcox.co.uk";
            user.active = true;
            res.send(user);
            next();
        });
    }
}

