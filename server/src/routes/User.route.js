import UserController from '../controlers/User.controler.js'


const routes = (server) => {
  server.post('/user', UserController.createUser)
  server.get('/user', UserController.getAllUsers)
  server.delete('/user/:userId', UserController.deleteUser)
  server.put('/user/:userId', UserController.updateUser)
  server.get('/searchuser', UserController.queryUsername)
  server.get('/user/:userId', UserController.getUserById)
}

export default {
  routes
}