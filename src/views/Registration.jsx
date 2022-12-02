const Registration = ()=> {
    return(
        <div className="main-regist">
            <div className="container-regist">
                <h2 className="text-regist">Crear Nueva Cuenta</h2>
                <form className="form-regist">
                    <input type="text"  placeholder=" Nombre" name="regist-name"/>
                    <input type="text"  placeholder=" Correo" name="regist-correo"/>
                    <input type="password"  placeholder=" Contraseña" name="regist-password"/>
                    <button>Crear Cuenta </button>
                </form>
            </div> 
        </div>
    )
}

export default Registration