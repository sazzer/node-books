module.exports = {
    register: function(server) {
        server.get('/debug/version', function(req, res, next) {
            res.send({
                name: 'node-books',
                version: '1.0'
            });

            next();
        });
    }
}
