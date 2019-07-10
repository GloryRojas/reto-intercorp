import React from 'react';
import { useFirebaseEdad } from '../data/firestore';

const Calculos = () => {

    const edades = useFirebaseEdad();

    console.log(edades)

    const promedio = (numeros) => {
        const sumaTotal = numeros.reduce((ant, act) => ant + act)
        return sumaTotal/numeros.length;
    }

    return(
        <div>
            <p>El promedio de las edades es: <span></span></p>
        </div>
    )
}

export default Calculos;