import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const {DATABASE_URL, PORT} = process.env

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('SUCCESSFULLY CONNECTED TO DATABASE...')
  } catch (error) {
    console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE:' + error)
		process.exit()
  }
}

const connectToPort = (application) => {
  application.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT: ' + 3001)
  })
}

export default {
  connectToDatabase,
  connectToPort
}

/* mongoose.connect('mongodb://localhost/namndb', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> console.log('Succesfully connected to the database'))
	.catch((error) => {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE:' + error)
		process.exit()
	})

server.listen(3001, () => {
	console.log('Servern är igång på port: ' + 3001)
})
*/