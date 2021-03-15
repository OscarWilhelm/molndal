import dotenv from 'dotenv'
import StatusCode from '../../configurations/StatusCode.js'

dotenv.config()
const {ENVIRONMENT} = process.env

const notFound = (request, response, next) => {
	const error = new Error('INVALID URL: ' + request.originalUrl + '  not found')
	response.status(StatusCode.NOT_FOUND)
	next(error)
}

const errorHandler = (error, request, response, next) => {
	const statuscode = response.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : response.statusCode
	response.status(statuscode)
	response.json({
		statuscode: statuscode, 
		message: error.message, 
		stackTrace: ENVIRONMENT === 'production' ? null : error.stack
	})
}

export default {
  notFound, 
  errorHandler
}