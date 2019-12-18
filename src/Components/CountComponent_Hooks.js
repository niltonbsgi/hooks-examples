import React, { useState, useEffect } from 'react'

export default function CountComponent_Hooks(){

    const [ count, setCount ] = useState(0)

    useEffect(()=> {
        document.title = `Você clicou ${count} vezes`
    })

    return(
        <div>
            <p>Você clicou { count } vezes</p>
            <button onClick={ ()=> setCount(count + 1) }>
                Click me (Count Hooks)
            </button>
        </div>
    )
}