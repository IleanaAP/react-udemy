import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'BLACKPINK' , 'BLINK']);
    const onAddCategory = () => {
        //operador spred "..." me va a dar los elementos existentes en el actual estado del array
        setCategories(current => [...current, 'ITZY']);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory/>

        {/* Listado de Gif */}
        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
            {/* usamos map para recorrer los key-value junto con su orden */}
            { categories.map( category => {
                return <li key={ category }> { category } </li>
            } ) }
            {/*<li></li>*/}
        </ol>
            {/* Git item */}

    </>
  )
}
