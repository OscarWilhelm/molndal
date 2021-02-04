import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {

  const [authUser, setAuthUser] = useContext(UserContext)

  return (
    <div>
      <img className='profileimg' src={'https://thispersondoesnotexist.com/image'} alt=''></img>
      {authUser.username}
    </div>
  )
}
