import React from 'react'
import BackendAPIService from '../shared/api/service/BackendAPIService'
import { useState, useEffect } from 'react'

export const PlanningView = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    username: 'newUser',
    password: 'Secret',
  })

  const create = async () => {
    try {
      setLoading(true)
      await BackendAPIService.createUser(newUser)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    const response = await BackendAPIService.getAllUsers()
    setUsers(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [loading])

  return (
    <div>
      <h1>BACKEND API:</h1>
      <p>Username:</p><input onChange={(event) => setNewUser({ ...newUser, username: event.target.value })} /><br />
      <p>Password:</p><input onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} /><br />
      <button onClick={() => create()}>Create User</button>
      <hr />
      <h1>All Users</h1>
      {users.map((x: any) => (<div>{x.username}</div>))}
    </div>
  )
}
