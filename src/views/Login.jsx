import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ login }) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [usuarios, setUsuarios] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const validate = () => {
    return user.length & password.length
}

useEffect(() => {
    getUsers("./user.json")
},[])

const getUsers = (data) => {
        
    fetch(data)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setUsuarios(data)
          
    })

    
}

const handleClick = (e) => {
    e.preventDefault();
    
    const login = usuarios.filter((usuario) => {
        
        if(user === usuario.user && password === usuario.password) {
        localStorage.setItem('token', 'test_token_123456789')
        navigate("/profile");
    } else {
        setError(true)
    }
    })

    
}

    return (
        <div className="main-login">
            <div className="login-container">
                <h2>Iniciar sesión</h2>
                <form className="login-form">
                    <input type="text" placeholder=" Usuario" name="login-name" value={user} onChange={e=> setUser(e.target.value) }></input>
                    <input type="password" placeholder=" Contraseña" name="login-password" value={password} onChange={e=> setPassword(e.target.value) }></input>
                    <button className='btn-login' to="/profile" disabled={!validate()} onClick={(e) => handleClick(e)}>Iniciar sesión</button>
                    { error && <small>🗙  Usuario o contraseña incorrecta 🗙</small> }
                </form>
            </div>
        </div>
    )
}

export default Login