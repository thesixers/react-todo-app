import { useState } from "react"

export function TodoInput({ handleAddTodo }) {
    const [inputValue, setInputValue] = useState('');

    function updateTodo(){
        if(!inputValue){
            alert('U are trying to add a black todo') 
            return;
        }
        handleAddTodo(inputValue)
        setInputValue('')
    }


    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} onKeyDown={(e) => {if(e.key === 'Enter') updateTodo()}} placeholder="Add task"/>
            <button onClick={()=> {updateTodo()}} >
            Add <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}