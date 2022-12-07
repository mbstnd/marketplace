import { NavLink } from "react-router-dom"

const Login = () => {
    return (
        <div className="main-login">
            <div className="login-container">
                <h2>Iniciar sesión</h2>
                <form className="login-form">
                    
                    <input type="text" placeholder=" Usuario" name="login-name"></input>
                    
                    <input type="password" placeholder=" Contraseña" name="login-password"></input>
                    <NavLink className=' btn btn-primary' to="/profile">Iniciar sesión</NavLink>
                </form>
            </div>
            <div className="signup-container">
                <h2>¿No tienes cuenta?</h2>
                <NavLink className='btn btn-primary' to="/registration">Crear cuenta</NavLink>
            </div>
        </div>
    )
}

export default Login