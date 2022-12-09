import { useState } from "react"

const Publication = () => {
    const [nombre, setNombre] = useState("")
    const [condicion, setCondicion] = useState("")
    const [precio,setPrecio ] = useState("")
    const [modelo, setModelo ] = useState("")
    const [descripcion, setDescripcion ] = useState("")

    const handlenombre = (e)=> {
        setNombre(e.target.value)
    }

    const handlecondicion = (e)=> {
        setCondicion(e.target.value)
    }

    const handleprecio = (e)=> {
        setPrecio(e.target.value)
    }

    const handlemodelo = (e)=>{
        setModelo(e.target.value)
    }

    const handledescripcion = (e)=> {
        setDescripcion(e.target.value)
    }

    const handleEnviar = ()=> {
        const data = 
        { 
            nombre: nombre, 
            precio: precio, 
            modelo: modelo, 
            condicion: condicion,
            descripcion: descripcion}

        console.log (data)
    }

    // const agregarProducto = (e)=> {
    //     e.preventDefault()

    // }


    return (
    <div className="main-publication">
        <h3>Completa el siguiente formulario:</h3>
        <div className="publication-section">
            <form>NOMBRE</form>
            <input type="text" placeholder="Nombre del Vendedor" onChange={(e)=> handlenombre(e)}></input>
        </div>
        <div className="publication-section">
            <form>ESTADO DEL PRODUCTO</form>
            <input type="text" placeholder="Estado del Instrumento" onChange={(e)=> handlecondicion(e)} />

        </div>
        <div className="publication-section">
            <form>PRECIO</form>
            <input type="text" placeholder="Precio del Producto" onChange={(e)=> handleprecio(e)}></input>
        </div>
        <div className="publication-section">
            <form>MODELO</form>
            <input type="text" placeholder="Indica el Modelo" onChange={(e)=> handlemodelo(e)}></input>
        </div>
        <div className="publication-section">
            <form>DESCRIPCIÓN</form>
            <input type="text" placeholder="Agrega una Descripción" onChange={(e)=> handledescripcion(e)}></input>
        </div>
        <button className="btn-filter" onClick={()=> handleEnviar()}>Publicar</button>
    </div>
    )
}

export default Publication