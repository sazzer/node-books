var restify = require("restify"),
    User = require("../users/user"),
    UserErrors = require("../users/errors");

module.exports = {
    build: function(cfg) {
        var userDao = cfg['users-dao'];

        return {
            register: function(server) {
                server.get('/user/:id', function(req, res, next) {
                    userDao.findById(req.params.id)
                        .then(function(user) {
                            res.json(user);
                        }, function(err) {
                            if (err instanceof UserErrors.UnknownUser) {
                                res.send(new restify.NotFoundError(err.message));
                            } else {
                                res.send(new restify.InternalError(err.message));
                            }
                        })
                        .fin(function() {
                            next();
                        });
                });
            }
        }
    }
}

