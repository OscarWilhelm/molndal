import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import Middlewares from './src/middlewares/Middlewares.js'
import Configurations from './configurations/Configurations.js'
import UserRoutes from './src/routes/User.route.js'


const server = express()
server.use(express.json()) 
server.use(cors({credential: true}))
server.use(helmet())
server.use(morgan('common'))

server.get('/test',(request, response) => {
	response.send('Ditt API-anrop gick igenom')
 })

UserRoutes.routes(server)
server.use(Middlewares.notFound)
server.use(Middlewares.errorHandler)

Configurations.connectToDatabase()
Configurations.connectToPort(server)
