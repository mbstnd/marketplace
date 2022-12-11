/*import { useState } from "react"*/


const Publication = ({ submit }) => {

   /* const [nombre, setNombre] = useState("")
    const [condicion, setCondicion] = useState("")
    const [precio,setPrecio ] = useState("")
    const [modelo, setModelo ] = useState("")
    const [descripcion, setDescripcion ] = useState("")


    const handleEnviar = ()=> {
        const data = 
        { 
            nombre: nombre, 
            precio: precio, 
            modelo: modelo, 
            condicion: condicion,
            descripcion: descripcion}

        console.log (data)
    }*/


    return (
    <div className="main-publication">
        <h3>Completa el siguiente formulario:</h3>
        <form className="publication-form" onSubmit={(e) => submit(e)}>
            <div className="publication-section">
                <label>NOMBRE</label>
                <input type="text" placeholder="Nombre del Vendedor"></input>
            </div>
            <div className="publication-section">
                <label>ESTADO DEL PRODUCTO</label>
                <input type="text" placeholder="Estado del Instrumento"></input>

            </div>
            <div className="publication-section">
                <label>PRECIO</label>
                <input type="text" placeholder="Precio del Producto"></input>
            </div>
            <div className="publication-section">
                <label>MODELO</label>
                <input type="text" placeholder="Indica el Modelo"></input>
            </div>
            <div className="publication-section">
                <label>DESCRIPCIÓN</label>
                <input type="text" placeholder="Agrega una Descripción"></input>
            </div>
            <button className="btn-filter">Publicar</button>
        </form>
    </div>
    )
}

export default Publication