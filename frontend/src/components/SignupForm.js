const SignupForm = () => {
    return (
        <div>
            Sign up Form
            <form className="signupForm">
                <input type='text' placeholder="First name"/>
                <input type='text' placeholder="Email"/>
                <input className="buttons" type='submit' value='Sign Up'/>
            </form>

        </div>
    )
}

export default SignupForm