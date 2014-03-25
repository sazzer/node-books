var package = require("../../../package.json");

module.exports = {
    register: function(server) {
        server.get('/debug/version', function(req, res, next) {
            res.send({
                name: package.name,
                version: package.version
            });

            next();
        });
    }
}
