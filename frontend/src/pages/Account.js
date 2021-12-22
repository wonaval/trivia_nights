import { Link } from 'react-router-dom'

const Account = () => {
    return (
        <div className='account'>
        <img className='accountImg' />Left Image
        <div className='accountRight'>
            <h2>Welcome to Team Rocket Trivia, Ivan!</h2>
            <p>Would you like to create an account?</p>
            <form className='accountForm'>
                <input type='text' value={'Ivan'} placeholder='First Name'/> 
                <input type='text' placeholder='Last Name'/>  {/* Value is going to be user.last */}
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Password'/> 
            </form>
            <Link to='/'>Skip</Link>
            <button className='buttons'>Create Account</button>
        </div>
    </div>
    )
}

export default Account