

export function TodoCards({todo, handleDeleteTodo, handleCompleteTodo, todoIndex}) {
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button 
                onClick={() => {handleCompleteTodo(todoIndex)}} 
                disabled={todo.complete}
                >
                    <h6>Done</h6>
                </button>
                <button 
                onClick={() => {handleDeleteTodo(todoIndex)}} 
                >
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}