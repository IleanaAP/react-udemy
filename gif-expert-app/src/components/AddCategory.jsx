import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    //console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    //condicion a cumplir si se tiene mas de 1 caracter
    if( inputValue.trim().length <= 1) return; //trim method removes whitespaces from both ends of a string returning a new string, without modifying the original string
    //console.log(inputValue);
    //setCategories( categories => [ inputValue, ...categories ]);
    
    setInputValue('');
    
    onNewCategory(inputValue.trim());

  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
