const SignupForm = () => {
    return (
        <div>
             
            <form className="signupForm">
                <input className="nameSignup" type='text' placeholder="First name"/>
                <input className="emailSignup" type='text' placeholder="Email"/>
                <input className="buttons" type='submit' value='Sign Up'/>
            </form>

        </div>
    )
}

export default SignupForm