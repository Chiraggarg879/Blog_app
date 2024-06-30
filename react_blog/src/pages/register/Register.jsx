import './register.css'
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        
        <form  className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your name "/>
            <label >Email</label>
            <input type = 'email' placeholder='Enter your email' className='registerInput'></input>
            <label>Password</label>
            <input type="password" placeholder='Enter your password'className='registerInput' />
            <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton"><Link className='link' to = '/login'>Login</Link></button>
    </div>
  )
}

export default Register;