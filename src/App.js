import React, { useState, useEffect } from 'react';
import './assets/main.css'
import Nav from './components/Nav';
import ImageCard from './components/ImageCard'

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('dog');
  const [isloading, setIsLoading] = useState(true);
  //method 1
  /* useEffect(() => {

    async function fetchData() {
      const API_KEY = process.env.REACT_APP_API_KEY
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`

      try {
        const response = await fetch(url)
        const data = await response.json()

        setImages(data.hits)
        console.log('images', images);
      } catch (e) {

        console.error('error is', e);
      }
    }
  }, [])
*/

  //method 2
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
  }, []);

  return (
    <div className="container mx-auto mt-10">

      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (

          <ImageCard key={image.id} image={image} />
        ))}

      </div>
    </div>
  );
}

export default App;
