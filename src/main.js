#!/usr/bin/env node

var Needle = require('needle-di'),
    needle = Needle.new();

needle.register('configuration')
    .staticValue({
        restify: {
            port: process.env.PORT || 5000
        }
    });
needle.register('restify')
    .dependsOn('configuration')
    .dependsOn('routes')
    .factoryFunction(function(cfg) {
        var restify = require('restify'),
            server = restify.createServer({
                name: 'node-books'
            });

        server.pre(restify.pre.userAgentConnection());
        
        server.use(restify.acceptParser(server.acceptable));
        server.use(restify.authorizationParser());
        server.use(restify.dateParser());
        server.use(restify.queryParser());
        server.use(restify.jsonp());
        server.use(restify.gzipResponse());
        server.use(restify.bodyParser());

        server.port = cfg.configuration.restify.port;

        Object.keys(cfg.routes).forEach(function(k) {
            console.log('Registering routes: %s', k);
            cfg.routes[k].register(server);
        });
        return server;
    });
needle.register('routes')
    .dependsOn('routes-users')
    .dependsOn('routes-debug');
needle.register('routes-debug')
    .requires('./routes/debug')
    .factoryFunction(function(route) { return route; });
needle.register('routes-users')
    .requires('./routes/users')
    .factoryFunction(function(route) { return route; });

needle.done().then(function(container) {
    container.get('restify').then(function(server) {
        server.listen(server.port, function() {
            console.log("Starting %s on port %s", server.name, server.url);
        });
    });
});
