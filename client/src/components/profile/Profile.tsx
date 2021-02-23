import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'

export const Profile = () => {

  const [authUser, setAuthUser] = useContext(UserContext)

  return (
    <div className='profileWrapper'>
      <span className='profilename'>{authUser.username}</span>
      <ProfileDropDown />
      <img className='profileimg' src={'https://thispersondoesnotexist.com/image'} alt=''></img>
    </div>
  )
}
