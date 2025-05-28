"use strict"

require('dotenv').config()
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000

const document = {
  info: {
    version: packageJson.version,
    title: packageJson.title || 'Blog API',
    description: packageJson.description || 'Blog API dokümantasyonu',
    termsOfService: "http://example.com/terms",
    contact: {
      name: packageJson.author || 'Developer',
      email: "developer@example.com"
    },
    license: {
      name: packageJson.license || 'MIT',
    },
  },
  host: `${HOST}:${PORT}`,
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'JWT Authentication - Example: Bearer <token>'
    }
  },
  security: [{ Bearer: [] }],
  definitions: {
    User: require('./models/User').schema.obj,
    Blog: require('./models/Blog').schema.obj,
    Category: require('./models/Category').schema.obj,
    Comment: require('./models/Comment').schema.obj,
    Token: {
      access: "string",
      refresh: "string"
    }
  }
}

const routes = ['./server.js']
const outputFile = './configs/swagger.json'

swaggerAutogen(outputFile, routes, document)
