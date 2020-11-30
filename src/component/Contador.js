import React, {useState, Fragment} from 'react';  



const Contador = ()=>{

const [numero , setNumero] = useState(0);

const aumentar = () => {
    console.log('me diste un click')
    setNumero (numero + 1)
}

    return(

        <fragment>
        <h3>mi primer componentes {numero}</h3>
        <button onClick={aumentar}>Aumentas</button>
        </fragment>
    
    );
}
export default  Contador;