'use client';
import { useState } from "react";

export default function () {
    const [msg , setMsg] = useState('');
    const [mostrarDiv, setmostrarDiv] = useState(true)

    // const alterarMsg = () =>{
    //     setMsg('bomdia');
    //     console.log(msg);
    // }
    //  alterarMsg();
    const manipularInput = (evento) =>{
        
        
        setMsg((evento.target.value).toUpperCase());

    };



    return(
        <div>
            {/* <p> {msg} </p>
            <button onClick={alterarMsg}>alterar</button> */}

        
            
            {mostrarDiv && (
                <div>
                <h1>Página 3 </h1>
                

            </div>)}

        </div>

    );

};