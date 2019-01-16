module.exports = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'API',
        description: 'Sample spec for API',
    },
    basePath: '/',
    tags: [
    ],
    securityDefinitions: {
        JWTUser: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsaW1raW1',
        },
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    paths: {
        "/": {
            get: {
                tags: ["Index"],
                description: "Get test index",
                produces: ["application/json"],
                summary: "Get test index",
                parameters: [
                ],
                responses: {
                200: {
                    description: "Test index",
                    schema: {
                    type: "object",
                    properties: {
                        code: {
                            type: "number",
                            example: 200
                        },
                        message: {
                            type: "string",
                            example: "Working"
                        },
                    }
                    }
                }
                }
            },
        },
        "/test": {
            get: {
                tags: ["Test"],
                description: "Get test",
                produces: ["application/json"],
                summary: "Get test ",
                parameters: [
                ],
                responses: {
                200: {
                    description: "Test request",
                    schema: {
                    type: "object",
                    properties: {
                        code: {
                            type: "number",
                            example: 200
                        },
                        message: {
                            type: "string",
                            example: "Test Working"
                        },
                    }
                    }
                }
                }
            },
        },
},
};
