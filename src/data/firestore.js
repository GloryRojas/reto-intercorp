import firebase from './firebase';
import { useState, useEffect } from 'react';

const db = firebase.firestore();

export const useFirebase = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect( () => { 
        db.collection('usuarios').get()
            .then(e => {
                const user = [];
                e.forEach( doc => user.push(doc.data()));
                setUsuarios(user);
            });
    }, [] );
    return usuarios;
}

export const useFirebaseEdad = () => {
    const [edad, setEdad] = useState([]);
    useEffect( () => { 
        db.collection('usuarios').get()
            .then(e => {
                const user = [];
                e.forEach( doc => {
                    user.push(parseInt(doc.data().edad))
                });
                setEdad(user);
            });
    }, [] );
    return edad;
}

export const sendUser = (nombre, apellido, nacimiento, edad) => {
    return firebase.firestore().collection('usuarios').add({
        nombre,
        apellido,
        nacimiento,
        edad,
        id: nacimiento+nombre
    })
}