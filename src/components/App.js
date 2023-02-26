import React, { useEffect, useState } from "react"; 

function App() {
    const [dogImage, setDogImage] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDogImage(data.message);
          setIsLoaded(false);
        });
    }, []);
  

    return (
        <div>
          {isLoaded ?
            <p>Loading...</p> :
            <img src={dogImage} alt="A Random Dog" />
          }
        </div>
      );
    }

export default App;