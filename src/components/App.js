// create your App component here
import { useEffect, useState } from "react";

function App(){

    const [photo, setPhoto] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setPhoto(data.message))
    }, [])

    console.log(photo)

    const newPhoto = photo === "" ? <p>Loading...</p> : <img src={photo} alt="A Random Dog"></img>

    return (
        newPhoto
    )
}

export default App;