

import { useState, useEffect } from 'react'

const Gallery = () => {
    const endpoint = "/guitar.json";
    
    useEffect(() => {
        fetch(endpoint)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setProducts(json)
        })

        .catch((e) => console.log(e))
    },[])
  
    

}
export default Gallery;