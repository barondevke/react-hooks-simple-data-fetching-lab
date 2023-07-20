import React, { useEffect, useState } from 'react'

const App = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(json => {
                setData(json)
                setIsLoaded(true)

            })

    }, [])
    if (!isLoaded) return <p>Loading...</p>
    return (
        <div>
            <img src={data.message}>
            </img>

        </div>
    )
}

export default App

