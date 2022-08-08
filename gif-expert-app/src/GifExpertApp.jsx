import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'BLACKPINK' ]);

  const onAddCategory = (newCategory) => {
    //Verifica que lo que se escriba esté en el arreglo, para no repetir llaves.
    if (categories.includes(newCategory)) return;

    //operador spread "..." me va a dar los elementos existentes en el actual estado del array
    setCategories((current) => [newCategory, ...current]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gif */}
      {/* usamos map para recorrer los key-value junto con su orden */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
