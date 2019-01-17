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
        "/user": {
            get: {
                tags: ["User"],
                description: "Get users",
                produces: ["application/json"],
                summary: "Get users",
                security: [{
                    JWTUser: []
                }],
                responses: {
                200: {
                    description: "Get users",
                    schema: {
                    type: "object",
                    properties: {
                        code: {
                            type: "number",
                            example: 200
                        },
                        result: {
                            type: "array",
                            items: {
                                type: 'object',
                                properties: {
                                    id: {
                                        type: "number",
                                        example: 1
                                    },
                                    username: {
                                        type: "string",
                                        example: "username"
                                    },
                                    age: {
                                        type: "number",
                                        example: 20
                                    },
                                }
                            }
                        },
                    }
                    }
                }
                }
            },
            post: {
                tags: ['User'],
                description: 'Create new user',
                produces: ['application/json'],
                summary: 'Create new user',
                parameters: [
                    {
                        name: 'body',
                        in: 'body',
                        description: 'User data',
                        required: true,
                        schema: {
                            type: 'object',
                            required: [
                                'username',
                                'password'
                            ],
                            properties: {
                                username: {
                                    type: 'string',
                                    example: 'qwerty',
                                    description: 'Username',
                                },
                                password: {
                                    type: 'string',
                                    example: 'Qwe321',
                                    description: 'User password',
                                },
                                age: {
                                    type: 'number',
                                    example: 21,
                                    description: 'User age',
                                }
                            },
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'User request payload',
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                    example: 'InR5cCI6IkpXVCJ9...',
                                },
                                refreshToken: {
                                    type: 'string',
                                    example: 'PAVjatUeFZa3oZ5P4...',
                                },
                                accessTokenExpiredAt: {
                                    type: 'number',
                                    example: 1529626007,
                                },
                            },
                        },
                    },
                },
            },
        },
},
};
