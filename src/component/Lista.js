import React, { Fragment, useState } from "react";


const Lista = () => {
    const [arrayNumero, setNumero]= useState([1,2,3,4,5])

    const [numero , setNum] = useState(5) 

    const agreg = ()=>{
        setNum(numero + 1)
        console.log('click')
        setNumero([
            ...arrayNumero, numero
            ])
    }

    return (
     

        <Fragment>
            <h1>Lista</h1>
            <button onClick={agreg}>Agregar</button>
            {
                arrayNumero.map((item ,index) =>
            <p key = {index}>{item} - {index}</p>
                )
            }
        </Fragment>
        );
}
 
export default Lista;