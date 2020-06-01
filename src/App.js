import React, { useState, useEffect } from 'react';
import './assets/main.css'
import Nav from './components/Nav';
import ImageCard from './components/ImageCard'
import ImageInput from './components/ImageInput';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        console.log(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.error(error))

  }, [term]);

  return (
    <div className="container mx-auto mt-10">
     
      <ImageInput searchText={(text) => setTerm(text)} />
      {
        !isloading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No images found </h1>
      }
      {
        isloading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading . . . </h1> :

          <div className="grid grid-cols-3 gap-4">

            {images.map(image => (

              <ImageCard key={image.id} image={image} />
            ))}

          </div>
      }
    
    </div>
  );
}

export default App;
