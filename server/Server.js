import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configurations from './configurations/Configurations.js'

const server = express()

server.use(helmet())
server.use(morgan('common'))

server.get('/recipe',(request, response) => {
	response.send('Ditt API-anrop gick igenom')
 })


server.use(Middlewares.notFound)
server.use(Middlewares.errorHandler)


Configurations.connectToDatabase()
Configurations.connectToPort(server)
