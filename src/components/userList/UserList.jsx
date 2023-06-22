
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../../store/slices/users'

export const UserList = () => {

    const {list} = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchAllUsers())
    }, [dispatch])
    

  return (
    <div className='container'>
        <div className='row'>
            {list.map(UserList => {
                   return <div key={UserList.id} className='col-md-3 mb-4'>
                        <div className='card'>
                            <img src={UserList.avatar} alt="avatar" />
                            <div className='card-body'>
                                <h5 className='card-title'>{`${UserList.first_name} ${UserList.last_name}`}</h5>
                                <p className='card-text'>{UserList.email}</p>
                            </div>
                        </div>
                    </div>
            })}
        </div>
    </div>
  )
}
