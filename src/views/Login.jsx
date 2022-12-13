import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const validate = () => {
    return user.length & password.length
}

const handleClick = (e) => {
    e.preventDefault();
    
    navigate("/profile")
}

    return (
        <div className="main-login">
            <div className="login-container">
                <h2>Iniciar sesión</h2>
                <form className="login-form">
                    <input type="text" placeholder=" Usuario" name="login-name" value={user} onChange={e=> setUser(e.target.value) }></input>
                    <input type="password" placeholder=" Contraseña" name="login-password" value={password} onChange={e=> setPassword(e.target.value) }></input>
                    <button className='btn btn-primary' to="/profile" disabled={!validate()} onClick={(e) => handleClick(e)}>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login