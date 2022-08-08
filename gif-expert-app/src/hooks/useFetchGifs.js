import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading(false);
  }

  useEffect( () => {
    getImages();
  }, []); //el array/dependencias vacias del segundo argumento, marca que solo se ejecutara la primera vez


  return {
    images,
    isLoading
  }
}