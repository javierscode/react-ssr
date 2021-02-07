import React, { useEffect } from 'react'

const App = () => {

    useEffect(() => {
        console.log("La hidratación funciona")
    }, [])
    
    return(
    <div>
    <h1>Hola Mundo</h1>
    </div>
    )
}

export default App;