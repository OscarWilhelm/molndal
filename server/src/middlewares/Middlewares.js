import dotenv from 'dotenv'

dotenv.config()
const {ENVIRONMENT} = process.env

const notFound = (request, response, next) => {
	const error = new Error('INVALID URL: ' + request.originalUrl + '  not found')
	response.status(404)
	next(error)
}

const errorHandler = (error, request, response, next) => {
	const statuscode = response.statusCode != 200 ? 500 : response.statusCode
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