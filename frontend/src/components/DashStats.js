import { useEffect, useState } from "react"
import axios from "axios"

const DashStats = (props) => {
    const [ userList, setUserList ] = useState([])

    const getUsers = () => {
        try {
            axios.get('http://localhost:3001/users')
            .then((response)=>{console.log(response); setUserList([...response.data.users]); console.log(response.data.users)})
            console.log(userList)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getUsers()
    }, [])


    return (
        <div className="dashStats" >
            <div className="newUsers">
                <div className='newUsersHeader'>
                    <span className='userHeaderMargin'>New Users</span>
                </div>
                <div className='newUsersContainer'>
                    {userList && userList.map((user, i)=>{
                        return (
                            <div key={i} className='userContainer'>
                                <span className='userName'>{user.name}</span>
                                <span className='userEmail'>{user.email}</span>
                                <span className='userDate'>{user.signup_date.slice(0, 10)}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashStats;